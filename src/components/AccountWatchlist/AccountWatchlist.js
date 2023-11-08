import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardContent } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import styles from "./AccountWatchlist.module.css";

const AccountWatchlist = () => {
    return (
        <>
            <Card className={styles.graphCard}>
                <p className={styles.cardHeading}>Account watchlist</p>
                <hr style={{ borderColor: "#f0eded" }} />
                <div className={styles.table}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ color: "gray" }}>Account</TableCell>
                                    <TableCell style={{ width: 160, color: "gray" }} align="right">
                                        This Month
                                    </TableCell>
                                    <TableCell style={{ width: 160, color: "gray" }} align="right">
                                        YTD
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Sales
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        1,194.58
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        11,418.29
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Advertising
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        9,271.36
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        6,879.02
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Inventory
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        4,692.26
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        9,768.09
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Entertainment
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        0.00
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        0.00
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Product
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        4,692.10
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        2,529.90
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Card>
        </>
    );
};

export default AccountWatchlist;
