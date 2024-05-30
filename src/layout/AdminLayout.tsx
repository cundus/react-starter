import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
   return (
      <Grid container height={"100vh"}>
         <Grid item bgcolor={"gray"} height={"100%"} xs={2}>
            <Sidebar />
         </Grid>
         <Grid
            item
            bgcolor={"#f8f8f8"}
            height={"100%"}
            xs={8}
            overflow={"hidden"}
         >
            <Outlet />
         </Grid>
         <Grid item bgcolor={"brown"} height={"100%"} xs={2}></Grid>
      </Grid>
   );
};

export default AdminLayout;
