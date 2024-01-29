
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navigationbar from "../components/Navbar/Navigationbar";


const MainLayout = () => {
  return (
    <>
      <div className="">
        <Navigationbar></Navigationbar>
      </div>
      <div className="container px-3 lg:px-24  mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
