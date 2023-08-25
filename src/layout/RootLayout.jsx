/* eslint-disable react/prop-types */
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";
import { Outlet } from "react-router-dom";

function RootLayout(props) {
  return (
    <>
      <HeaderBar/>
        <main>
          <Outlet/>
        </main>
      <FooterBar/>
    </>
  ) 
}

export default RootLayout

