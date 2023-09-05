import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider} from 'react-redux';
import store , { persistor } from "@/context/store";
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomProvider>
      <PersistGate persistor={persistor} >
        <Component {...pageProps} />
      </PersistGate>
    </CustomProvider>
  )

}


const CustomProvider = ({children} : {children: React.ReactNode}) => {
  return <Provider store={store}>{children}</Provider>
}
