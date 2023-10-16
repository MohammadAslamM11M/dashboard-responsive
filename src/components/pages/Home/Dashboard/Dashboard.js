import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "../../../Card/Card";
import styles from "./Dashboard.module.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} className={styles.statsCard}>
                    <ActionAreaCard>xs=8</ActionAreaCard>
                    <ActionAreaCard>xs=8</ActionAreaCard>
                    <ActionAreaCard>xs=8</ActionAreaCard>
                    <ActionAreaCard>xs=8</ActionAreaCard>
                </Grid>
                <Grid item xs={12}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
