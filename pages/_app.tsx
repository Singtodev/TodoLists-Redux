import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider} from 'react-redux';
import store from "@/context/store";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )

}


const AuthProvider = ({children} : {children: React.ReactNode}) => {
  return <Provider store={store}>{children}</Provider>
}
