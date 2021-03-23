import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {AuthProvider} from '../auth/context'

function MyApp({ Component, pageProps }) {
  return(
	  <>
	  <AuthProvider>
	  	<Component {...pageProps} />
	  </AuthProvider>
	  </>
  )
}

export default MyApp
