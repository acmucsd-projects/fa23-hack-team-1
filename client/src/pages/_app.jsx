import '@/styles/globals.css'
import Navbar from '@/components/navbarcomp/navbar'

export default function App({ Component, pageProps }){
    return(
        <div>
            <Navbar/>
            <Component {...pageProps} />
        </div>
    )
}