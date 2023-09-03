import React, { useEffect } from 'react'
import {motion , AnimatePresence} from 'framer-motion';
import { MdDelete} from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RootState } from '@/context/reducers';
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_LIST , RETIVE_STATE_LIST, SAVE_STATE_LIST } from '@/context/actions/TodoActions';
import toast from 'react-hot-toast';
const TodoLists = () => {
  const Dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos?.todos);

  useEffect(()=> {
    Dispatch(RETIVE_STATE_LIST());
  },[])

  return (
    <div className={`${todos?.length > 6 ? 'overflow-y-scroll h-[500px] items-center  ' : 'items-start justify-center'} w-full bg-zinc-800 my-4 rounded-lg px-4 py-3 flex flex-col  gap-2`}>
      <AnimatePresence>
          {todos?.length > 0 ? <>
     
            {todos.slice().sort((a,b) => a.id - b.id).map((item, index)=> {
                return (
                  <ListCard key={index} index={index} id={item.id} item={item.item} />
                )
            })}
          
          </> : <p>No Active Activities</p>}
      </AnimatePresence>
    </div>
  )
}




interface ListCardProps {
  index: number,
  item: string,
  id: number
}


const ListCard = ({index, item , id}: ListCardProps) => {

  const Dispatch = useDispatch();

  const handleRemove = () => {
    Dispatch(REMOVE_FROM_LIST(id))
    Dispatch(SAVE_STATE_LIST());
    toast('Remove Task Successfully.', {
      icon: '✅'
    });
  }

  return (
    <motion.div 
    className='w-full bg-black px-4 py-3 rounded-lg flex items-center justify-between'
    initial={{opacity: 0 , y: 10}}
    animate={{opacity: 1 , y : 0}}
    exit={{opacity: 0, y: 10}}
    transition={{delay: index * 0.1, duration: 0.5 }}
    key={index}>
      <p className='text-lg text-[#999] font-semibold'>{(index + 1).toString()}.{item}</p>
      <motion.div
        className='cursor-pointer'
        whileTap={{ scale: 0.9}}
        >
        <MdDelete
        onClick={() => handleRemove()}
        className='text-2xl text-red-500'></MdDelete>
      </motion.div>
    </motion.div>
  )
}

export default TodoLists