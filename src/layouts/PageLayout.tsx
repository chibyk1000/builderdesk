import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default PageLayout;
