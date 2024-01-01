import MainNav from "./MainNav";
import SideBar from "./SideBar";

const Navigation = () => {
  return (
    <>
      <div className="block lg:hidden">
        <MainNav />
      </div>
      <div className="hidden lg:block">
        <SideBar />
      </div>
    </>
  );
};

export default Navigation;
