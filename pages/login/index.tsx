import { Todo_AddToList, Todo_TodoList } from "@/components/TodoList";
import { Provider, useDispatch, useSelector} from 'react-redux';
import store from "@/context/store";
import {motion} from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { AUTH_CHECK_LOGIN, AUTH_LOGIN, AUTH_LOGOUT } from "@/context/actions/AuthActions";
import { RootState } from "@/context/reducers";
import { useEffect } from "react";

import Link from 'next/link';
export default function Home() {

  const Dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user?.user);

  const handleLogin = () => {
        const UserObject = {
            user: {
              id: "1",
              username: "john_doe",
              email: "john@example.com",
              password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
              first_name: "John",
              last_name: "Doe",
              avatar_url: "https://example.com/avatar.jpg",
              points: 0,
              status: "Active",
              email_verify: false,
              phones: [
                {
                  id: 0,
                  phone_number: "0825616378"
                }
              ],
              last_login: "2023-09-04T12:00:00.000Z",
              last_update: "2023-09-04T12:00:00.000Z",
              cart: [
                {
                  productId: "product_1",
                  quantity: 2
                },
                {
                  productId: "product_2",
                  quantity: 1
                }
              ],
              orders: [
                {
                  orderId: "order_1",
                  date: "2023-09-04T12:00:00.000Z",
                  items: [
                    {
                      productId: "product_1",
                      quantity: 2,
                      price: 25.99
                    }
                  ],
                  total: 51.98,
                  status: "success"
                },
                {
                  orderId: "order_2",
                  date: "2023-09-03T14:30:00.000Z",
                  items: [
                    {
                      productId: "product_2",
                      quantity: 1,
                      price: 19.99
                    },
                    {
                      productId: "product_3",
                      quantity: 3,
                      price: 12.99
                    }
                  ],
                  total: 64.96,
                  status: "success"
                }
              ],
              address: [
                {
                  id: 1,
                  street: "123 Main St",
                  city: "Exampleville",
                  state: "CA",
                  postalCode: "12345",
                  country: "USA"
                },
                {
                  id: 2,
                  street: "456 Elm St",
                  city: "Sampletown",
                  state: "NY",
                  postalCode: "67890",
                  country: "USA"
                }
              ],
              address_select_id: 1,
              vouchers: [
                {
                  id: "1",
                  name: "Voucher 1",
                  price: 10.99
                },
                {
                  id: "2",
                  name: "Voucher 2",
                  price: 5.99
                },
                {
                  id: "3",
                  name: "Voucher 3",
                  price: 15.49
                }
              ]
            },
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMifQ.abcdefg1234567890hijklmnopqrstuvwxyz",
            refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMifQ.abcdefg1234567890hijklmnopqrstuvwxyz",
            expireIn: 3600
        };
        Dispatch(AUTH_LOGIN(UserObject.user , UserObject.accessToken , UserObject.refreshToken , UserObject.expireIn))
  }

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
        className="text-3xl cursor-pointer font-semibold text-gray-100"> Login Page </motion.p>
        {
            user != null ? (
              <p className="text-white">
                You are Logged In as {user?.first_name + ' ' + user?.last_name}  ! .
              </p>
            ): (<p className="text-white">Please login!.</p>)
        }
        {user != null ? (
            <div className="flex flex-col gap-4">
                <Link href="/" className="text-white hover:border px-5 hover:border-white rounded-md"> Go Home</Link>
                <Link href="/profile" className="text-white hover:border px-5 hover:border-white rounded-md"> Go Profile</Link>
                <div  
                onClick={()=> handleLogout()}
                className="text-white px-5"> Go logout </div>

            </div>
        ): (
            <motion.button
            whileTap={{scale: 0.86}}
            onClick={()=> handleLogin()}
            className="border border-white px-6 rounded-lg text-white py-1">Login</motion.button>
        )}


        </div>
      <Toaster />
    </main>
  )
}


const DataProvider = ({children} : {children: React.ReactNode}) => {
  return <Provider store={store}>{children}</Provider>
}
