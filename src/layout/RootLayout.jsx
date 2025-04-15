import { Outlet } from "react-router"
import Nav from "../component/Nav"


const RootLayout = () => {
  return (
    <>
        <Nav />
        <Outlet />
    </>
  )
}

export default RootLayout