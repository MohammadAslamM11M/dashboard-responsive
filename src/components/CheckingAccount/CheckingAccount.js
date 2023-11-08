import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { CardContent } from "@mui/material";
import styles from "./CheckingAccount.module.css";

export default function CheckingAccount() {
    const chartRef = useRef();
    const [selectedMonth, setSelectedMonth] = useState("January");
    const [data, setData] = useState([]);

    const generateRandomData = (month) => {
        const data = [];
        for (let i = 1; i <= 30; i++) {
            const randomY = Math.floor(Math.random() * 10) + 1;
            data.push({ x: i, y: randomY });
        }
        return data;
    };

    const handleMonthChange = (event) => {
        const selected = event.target.value;
        setSelectedMonth(selected);
        const newData = generateRandomData(selected);
        setData(newData);
    };

    const renderChart = () => {
        const width = 600;
        const height = 200;
        const margin = { top: 20, right: 20, bottom: 30, left: 0 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const svg = d3.select(chartRef.current);

        svg.selectAll("*").remove();
        svg.attr("width", width).attr("height", height);

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
    };

    useEffect(() => {
        const initialData = generateRandomData(selectedMonth);
        setData(initialData);
    }, [selectedMonth]);

    useEffect(() => {
        renderChart(data);
    }, [data]);

    return (
        <>
            <Card className={styles.graphCard}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p className={styles.cardHeading}>Checking account</p>

                    <IconButton>
                        <select name="manage" className={styles.lineChart}>
                            <option value="1">Manage</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <select
                            name="manage"
                            className={styles.lineChart}
                            onChange={handleMonthChange}
                            value={selectedMonth}
                        >
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </IconButton>
                </div>
                <hr style={{ borderColor: "#f0eded" }} />
                <CardContent>
                    <svg ref={chartRef}></svg>
                </CardContent>
            </Card>
        </>
    );
}
