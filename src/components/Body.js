import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* Depending on the route, we'll show either the MainContainer or WatchPage */}
      <Outlet />
    </div>
  );
};

export default Body;
