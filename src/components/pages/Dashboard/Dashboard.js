import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Box from "@mui/material/Box";

const Dashboard = () => {
    return (
        <>
            <Box sx={{display: "flex"}}>
                <Sidebar />
            </Box>
        </>
    );
};

export default Dashboard;
