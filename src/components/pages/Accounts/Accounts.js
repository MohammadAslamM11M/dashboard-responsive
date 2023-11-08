import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";

const Accounts = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "50px", marginTop: "60px" }}>
                    Accounts
                </h1>
            </Box>
        </>
    );
};

export default Accounts;
