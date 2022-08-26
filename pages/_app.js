import '../styles/globals.css'
import { QuioscoProvider } from '../context/QuioscoProvider'


function MyApp({ Component, pageProps }) {
  return (
    //pone el provider visible todo el tiempo
    <QuioscoProvider>
      <Component {...pageProps}/>
    </QuioscoProvider>

  )
}

export default MyApp
