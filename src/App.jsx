
import './App.css'
import { Toaster } from 'react-hot-toast';
import AppRouter from "./routers";
import Layout from './reusableLayouts/layout';

const App = () => {

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Layout>
    <AppRouter />
    </Layout>
  </>
  )
}

export default App
