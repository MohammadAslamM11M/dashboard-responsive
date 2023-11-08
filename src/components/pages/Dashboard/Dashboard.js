import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CheckingAccount from "../../CheckingAccount/CheckingAccount";
import TotalCashFlow from "../../TotalCashFlow/TotalCashFlow";
import InvoicesOwed from "../../InvoicesOwed/InvoicesOwed";
import AccountWatchlist from "../../AccountWatchlist/AccountWatchlist";
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
            <Grid container spacing={1} className={styles.cardmargin}>
                <Grid item xs={12} md={6} className={styles.statsCard}>
                    <CheckingAccount>xs=8</CheckingAccount>
                </Grid>
                <Grid item xs={12} md={6} className={styles.statsCard}>
                    <InvoicesOwed>xs=8</InvoicesOwed>
                </Grid>
                <Grid item xs={12} md={6} className={styles.statsCard}>
                    <TotalCashFlow>xs=8</TotalCashFlow>
                </Grid>
                <Grid item xs={12} md={6} className={styles.statsCard}>
                    <AccountWatchlist>xs=8</AccountWatchlist>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
