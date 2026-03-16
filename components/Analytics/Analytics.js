"use client"

import { useState } from "react"
import "./Analytics.css"

export default function AnalyticsPage(){

  const [range,setRange] = useState("today")

  const options = [
    {value:"today",label:"Today"},
    {value:"7days",label:"7 Days"},
    {value:"30days",label:"30 Days"},
    {value:"90days",label:"90 Days"},
    {value:"1year",label:"1 Year"}
  ]

  return(
    <div className="analytics-page">

      {/* HEADER */}

      <div className="analytics-header">

        <h2>Analytics</h2>

        <div className="range-selector">

          {options.map(opt => (
            <label key={opt.value} className="radio-card">

              <input
                type="radio"
                name="range"
                value={opt.value}
                checked={range===opt.value}
                onChange={(e)=>setRange(e.target.value)}
              />

              <span>{opt.label}</span>

            </label>
          ))}

        </div>

      </div>


      {/* TOP METRICS */}

      <div className="metrics-grid">

        <div className="metric-box">
          <h3>Total Active Assets ({range})</h3>
        </div>

        <div className="metric-box">
          <h3>Alert Count ({range})</h3>
        </div>

        <div className="metric-box">
          <h3>System Uptime ({range})</h3>
        </div>

        <div className="metric-box">
          <h3>Avg Response Time ({range})</h3>
        </div>

      </div>


      {/* MIDDLE CHARTS */}

      <div className="chart-grid">

        <div className="chart-box">
          <h3>Maintenance Activities ({range})</h3>
        </div>

        <div className="chart-box">
          <h3>Asset Utilization ({range})</h3>
        </div>

      </div>


      {/* TABLE */}

      <div className="table-section">

        <h3>Top Performing Assets ({range})</h3>

        <table>

          <thead>
            <tr>
              <th>Asset</th>
              <th>Usage</th>
              <th>Efficiency</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Printer-01</td>
              <td>92%</td>
              <td>High</td>
            </tr>

            <tr>
              <td>Server-02</td>
              <td>88%</td>
              <td>High</td>
            </tr>

            <tr>
              <td>Scanner-04</td>
              <td>80%</td>
              <td>Medium</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  )
}