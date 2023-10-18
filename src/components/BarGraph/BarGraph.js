import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import styles from "../Card/Card.module.css";

export default function BarGraph() {
    const [showHighlight, setShowHighlight] = React.useState(true);
    const [showTooltip, setShowTooltip] = React.useState(true);

    const handleHighlightChange = (event) => {
        setShowHighlight(event.target.checked);
    };

    const handleTooltipChange = (event) => {
        setShowTooltip(event.target.checked);
    };
    return (
        <Card className={styles.graphCard}>
            <CardActionArea>
                <Stack direction="column" sx={{ margin: "10px 160px", width: "60%" }}>
                    <Stack direction="row" sx={{ width: "100%" }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <h2>Overview</h2>
                            <SparkLineChart
                                plotType="bar"
                                data={[6, 5, 10, 8, 9, 4, 9, 10, 9, 8, 7, 8]}
                                height={200}
                                showHighlight={showHighlight}
                                showTooltip={showTooltip}
                                xAxis={{
                                    scaleType: "band",
                                    data: [
                                        "January",
                                        "February",
                                        "March",
                                        "April",
                                        "May",
                                        "June",
                                        "July",
                                        "August",
                                        "September",
                                        "October",
                                        "November",
                                        "December",
                                    ],
                                }}
                            />
                        </Box>
                    </Stack>
                </Stack>
            </CardActionArea>
        </Card>
    );
}
