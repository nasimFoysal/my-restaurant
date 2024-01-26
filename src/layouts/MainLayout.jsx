import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container px-3 lg:px-24  mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
