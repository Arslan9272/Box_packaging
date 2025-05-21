import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRouter from "./routers";
import Layout from "./reusableLayouts/layout";
import ChatWrapper from "./pages/ChatWrapper";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <ChatWrapper />
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
};

export default App;
