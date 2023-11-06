import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";
import styles from "../CheckingAccount/CheckingAccount.module.css";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function BarGraph() {
    const chartRef = useRef();
    const [data, setData] = useState(Array.from({ length: 12 }, () => Math.floor(Math.random() * 30)).slice(0, 6));

    const randomizeData = () => {
        const randomData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 30)).slice(0, 6);
        setData(randomData);
    };

    useEffect(() => {
        const width = 600;
        const height = 200;
        const barCount = data.length;
        const padding = 100;
        const borderRadius = 5;

        const barWidth = (width - padding * (barCount - 1)) / barCount;

        const svg = d3.select(chartRef.current).attr("width", width).attr("height", height);

        svg.selectAll("*").remove();

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * (barWidth + padding))
            .attr("y", (d) => height - d * 5)
            .attr("width", barWidth)
            .attr("height", (d) => d * 5)
            .attr("rx", borderRadius)
            .attr("ry", borderRadius)
            .attr("fill", "#47b747");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d, i) => months[i])
            .attr("x", (d, i) => i * (barWidth + padding) + barWidth / 2)
            .attr("y", height + 20)
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .attr("fill", "black");
    }, [data]);

    return (
        <>
            <Card className={styles.graphCard}>
                <CardHeader
                    title="Total cash flow"
                    action={
                        <IconButton>
                            <button className={styles.barGraphRanButtonIn} style={{fontSize: "8px"}} onClick={randomizeData}></button>
                            <span>In</span>
                            <button className={styles.barGraphRanButtonOut} style={{fontSize: "8px"}} onClick={randomizeData}></button>
                            <span>Out</span>
                        </IconButton>
                    }
                />
                <hr style={{borderColor: "#f0eded"}}/>
                <CardActionArea>
                    <svg className={styles.barGraph} ref={chartRef}></svg>
                </CardActionArea>
            </Card>
        </>
    );
}
