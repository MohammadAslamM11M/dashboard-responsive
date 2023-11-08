import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import { CardContent } from "@mui/material";
import FileUploadModal from "../FileUploadModal/FileUploadModal";
import styles from "./InvoicesOwed.module.css";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function InvoicesOwed() {
    const chartRef = useRef();
    const [data, setData] = useState(Array.from({ length: 12 }, () => Math.floor(Math.random() * 30)).slice(0, 6));

    useEffect(() => {
        const width = 400;
        const height = 250;
        const barCount = data.length;
        const padding = 50;
        const borderRadius = 5;

        const barWidth = (width - padding * (barCount - 1)) / barCount;

        const svg = d3.select(chartRef.current).attr("width", width).attr("height", height);

        svg.selectAll("*").remove();

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * (barWidth + padding))
            .attr("y", (d) => height - d * 7)
            .attr("width", barWidth)
            .attr("height", (d) => d * 7)
            .attr("rx", borderRadius)
            .attr("ry", borderRadius)
            .attr("fill", "#47b747");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d, i) => months[i])
            .attr("x", (d, i) => i * (barWidth + padding) + barWidth / 2)
            .attr("y", height - 220)
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .attr("fill", "black");
    }, [data]);

    return (
        <>
            <Card className={styles.graphCard} style={{ borderRadius: "15px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p className={styles.cardHeading}>Invoices owed to you</p>
                    <IconButton>
                        <FileUploadModal />
                    </IconButton>
                </div>
                <hr style={{ borderColor: "#f0eded" }} />
                <CardContent>
                    <svg className={styles.barGraph} ref={chartRef}></svg>
                </CardContent>
            </Card>
        </>
    );
}
