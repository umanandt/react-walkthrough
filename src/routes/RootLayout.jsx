import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return(
  <>
    <MainHeader />
    <Outlet />
  </>
  )
}

export default RootLayout;


//outlet is just a placeholder
// placeholder for children which we have described in main page
//
