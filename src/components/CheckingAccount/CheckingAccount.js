import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";
import styles from "../CheckingAccount/CheckingAccount.module.css";

export default function CheckingAccount() {
    const chartRef = useRef();

    useEffect(() => {
        const data = [
            { x: 1, y: 4 },
            { x: 2, y: 5 },
            { x: 3, y: 12 },
            { x: 4, y: 6 },
            { x: 5, y: 10 },
            { x: 6, y: 5 },
            { x: 7, y: 1 },
            { x: 8, y: 8 },
            { x: 9, y: 1 },
        ];

        const width = 600;
        const height = 225;
        const margin = { top: 20, right: 20, bottom: 30, left: 0 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const svg = d3.select(chartRef.current).attr("width", width).attr("height", height);

        const xScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.x)])
            .range([0, innerWidth]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.y)])
            .range([innerHeight, 0]);

        const line = d3
            .line()
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y))
            .curve(d3.curveBasis);

        const chart = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

        chart
            .append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#47b747")
            .attr("stroke-width", 3);

        chart
            .selectAll(".x-axis-text")
            .data(data)
            .enter()
            .append("text")
            .attr("class", "x-axis-text")
            .text((d) => d.x)
            .attr("x", (d) => xScale(d.x))
            .attr("y", innerHeight + 15)
            .attr("text-anchor", "middle")
            .attr("font-size", "12px")
            .attr("fill", "black");
    }, []);

    return (
        <>
            <Card className={styles.graphCard}>
                <CardHeader
                    title="Checking Account"
                    action={
                        <IconButton>
                            <select name="manage" className={styles.lineChart}>
                                <option value="1">Manage</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <select name="manage" className={styles.lineChart}>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="4">May</option>
                                <option value="4">June</option>
                                <option value="4">July</option>
                                <option value="4">August</option>
                                <option value="4">September</option>
                                <option value="4">October</option>
                                <option value="4">November</option>
                                <option value="4">December</option>
                            </select>
                        </IconButton>
                    }
                />
                <hr style={{ borderColor: "#f0eded" }} />
                <CardActionArea>
                    <svg ref={chartRef}></svg>
                </CardActionArea>
            </Card>
        </>
    );
}
