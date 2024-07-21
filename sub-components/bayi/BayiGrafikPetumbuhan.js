'use client'
import React from "react";
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const Charts = () => {
    const perfomanceChartSeries = [{
        name: "BBU",
        data: [1, 2, 3, 5, 6, 7, 8, 10]
    }];

    const perfomanceChartOptions = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };

    return (
        <Card className="h-100 w-100">
            <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h4 className="mb-0">BBU</h4>
                    </div>
                </div>
                <div className="mb-8">
                    <Chart
                        options={perfomanceChartOptions}
                        series={perfomanceChartSeries}
                        type="line"
                        width="100%"
                    />
                </div>
            </Card.Body>
        </Card>
    )
}

export default Charts