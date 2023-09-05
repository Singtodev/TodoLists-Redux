import React, { useState } from 'react'
import { BsCardChecklist , BsPlus } from 'react-icons/bs';
import {motion} from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_LIST } from '@/context/actions/TodoActions';
import toast from 'react-hot-toast';


const AddToList = () => {

  const [text, setText] = useState('');

  const Dispatch = useDispatch();
  const handleToDoAdd = () => {
    
    if(text.toString().length == 0 || !text) return toast('Add Task failed.', {icon: '❌'});

    //go pass 

    Dispatch(ADD_TO_LIST(text));
    toast('Add Task Successfully.', {
      icon: '✅'
    });
    setText('');
    
  }


  return (
    <div className='w-full flex items-center justify-center px-8 rounded-lg bg-zinc-800 py-2 gap-x-2'>
        <input 
        placeholder='Add your list'
        value={text}
        onChange={(e)=> setText(e.target?.value)}
        type="text" 
        className='flex-1 h-6 lg:h-12 bg-transparent  md:px-2 text-xl font-semibold text-[#777] outline-none border-none placeholder:text-[#555]' />
        
        <motion.div
          whileTap={{ scale: 0.96}}
          onClick={handleToDoAdd}
          className='rounded-md border border-emerald-400 cursor-pointer group-hover:bg-emerald-400'
        >
          <BsPlus className='text-2xl text-emerald-400 group-hover:text-white' />
        </motion.div>
    </div>
  )
}

export default AddToList