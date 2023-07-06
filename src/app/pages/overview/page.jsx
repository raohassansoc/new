"use client";
import Footer from "@/app/components/common/Footer";
import NavBar from "@/app/components/common/Navbar";
import OverviewMain from "@/app/components/overview/OverviewMain";

const Page = () => {
  return (
    <div className="bg-black">
      <NavBar />
      <div className="bg-[#232323] p-1 box-border"></div>
      <OverviewMain />
      <div className="bg-[#232323] p-1 box-border"></div>
      <Footer />
    </div>
  );
};

export default Page;
