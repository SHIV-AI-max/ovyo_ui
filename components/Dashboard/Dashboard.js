"use client"

import StatCard from "../Statcard/Statcard"
import ChartBox from "../Chartbox/Chartbox"

import "./Dashboard.css"

export default function DocumentPage() {

    return (
        <div className="dashboard-page">
            <div className="cards">
                <StatCard title="Active Categories" value="16" />
                <StatCard title="Root Categories" value="4" />
                <StatCard title="Active Alerts" value="23" />
            </div>
            <div className="charts">
                <ChartBox title="Asset Health Trend" />
                <ChartBox title="Alerts Over Time" />
            </div>
        </div>
    )
}