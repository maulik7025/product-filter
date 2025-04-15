import { Outlet } from "react-router"
import Nav from "../component/Nav"

const productLayout = () => {
  return (
    <>
        <Nav />
        <Outlet/>
    </>
  )
}

export default productLayout