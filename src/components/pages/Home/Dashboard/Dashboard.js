import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "../../../Card/Card";
import BarGraph from "../../../BarGraph/BarGraph";
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
            <Grid container spacing={3}>
                <Grid item xs={12} className={styles.statsCard}>
                    <ActionAreaCard>xs=8</ActionAreaCard>
                    <ActionAreaCard>xs=8</ActionAreaCard>
                    <ActionAreaCard>xs=8</ActionAreaCard>
                    <ActionAreaCard>xs=8</ActionAreaCard>
                </Grid>
                <Grid item xs={8} className={styles.graphCard}>
                    <BarGraph>xs=8</BarGraph>
                </Grid>
                <Grid item xs={4} className={styles.graphCard}>
                    <ActionAreaCard>xs=4</ActionAreaCard>
                </Grid>
                <Grid item xs={12}>
                    <ActionAreaCard>xs=4</ActionAreaCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
