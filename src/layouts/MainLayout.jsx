import Footer from "@/components/custom/footer/Footer";
import { Outlet } from "react-router-dom";
import "../sharedStyles/SharedStyles.css";

function MainLayout() {
  return (
    <>
      <main className="min-h-[calc(100vh-50px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
