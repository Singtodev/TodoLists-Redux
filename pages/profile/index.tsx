import { Todo_AddToList, Todo_TodoList } from "@/components/TodoList";
import { Provider, useDispatch, useSelector} from 'react-redux';
import store from "@/context/store";
import {motion} from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { RootState } from "@/context/reducers";
import Link from 'next/link';
import { useEffect } from "react";
import { AUTH_CHECK_LOGIN, AUTH_LOGOUT } from "@/context/actions/AuthActions";
export default function Home() {

  const Dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user?.user);

  const handleLogout = () => {
        Dispatch(AUTH_LOGOUT());
        Dispatch(AUTH_CHECK_LOGIN());
  }

  return (
    <main>
      <div className="w-screen h-screen flex flex-col items-center justify-center px-4 gap-y-6">
        <motion.p 
        whileTap={{scale: 0.86}}
        initial={{opacity: 0 , y: -10}}
        animate={{opacity: 1 , y: 0}}
        exit={{ opacity: 0, y: -10}}
        className="text-3xl cursor-pointer font-semibold text-gray-100"> Profile </motion.p>
        <div className=" flex flex-wrap">
          {/* <p className="text-white">{JSON.stringify(user)}</p> */}
          {
            user != null ? (
              <p className="text-white">
                You are Logged In as {user?.first_name + ' ' + user?.last_name}  ! .
              </p>
            ): (<p className="text-white">Your aren't Logged In !.</p>)
          }
        </div>

        {user != null &&  (
            <div className="flex flex-col gap-4">
                <Link href="/" className="text-white hover:border px-5 hover:border-white rounded-md"> Go Home</Link>
                <Link href="/profile" className="text-white border px-5 border-white rounded-md"> Go Profile</Link>
                <Link href="/fetching" className="text-white px-5  rounded-md"> Go Fetching</Link>
                <div  
                onClick={()=> handleLogout()}
                className="text-white px-5"> Go logout </div>

            </div>
        )}


      </div>
      <Toaster />
    </main>
  )
}


const DataProvider = ({children} : {children: React.ReactNode}) => {
  return <Provider store={store}>{children}</Provider>
}
