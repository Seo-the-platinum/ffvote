import { type AppType } from "next/app";
import Navbar from "../components/nav";

import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />;
    </>
  )
};

export default api.withTRPC(MyApp);
