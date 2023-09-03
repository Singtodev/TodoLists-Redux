import { Todo_AddToList, Todo_TodoList } from "@/components/TodoList";
import { Provider} from 'react-redux';
import store from "@/context/store";
import {motion} from 'framer-motion';

import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen flex flex-col items-center justify-center px-4 gap-y-6">
        <motion.p 
        whileTap={{scale: 0.86}}
        initial={{opacity: 0 , y: -10}}
        animate={{opacity: 1 , y: 0}}
        exit={{ opacity: 0, y: -10}}
        className="text-3xl cursor-pointer font-semibold text-gray-100">ToDo List </motion.p>
        <div className="w-full md:1/2 rounded-lg px-4 py-4 border border-zinc-800">
          <DataProvider>
            <Todo_AddToList />
            <Todo_TodoList />
          </DataProvider>
        </div>
      </div>
      <Toaster />
    </main>
  )
}


const DataProvider = ({children} : {children: React.ReactNode}) => {
  return <Provider store={store}>{children}</Provider>
}
