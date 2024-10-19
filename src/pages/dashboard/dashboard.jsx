import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./dashboard.css";
import { Outlet } from "react-router-dom";
// import { AuthContext } from "src/context/authProvider";

const Dashboard = () => {
  // const auth = useContext(AuthContext);
  // console.log(auth);

  return (
    <div className="dashboard">
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Dashboard;
