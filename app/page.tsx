"use client"

import { useState } from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Topbar from "../components/Topbar/Topbar"
import StatCard from "../components/Statcard/Statcard"
import ChartBox from "../components/Chartbox/Chartbox"
import AssetsPanel from "../components/Workspace/AssetsPanel"
import AiInsight from "../components/AiInsight/AiInsight";
import Issues from "../components/Issues/Issues";
import Qr from "../components/QR System/Qr";
import Documents from "../components/Documents/Documants"
import Analytics from "../components/Analytics/Analytics"

import './globals.css'


export default function Dashboard() {
  const [active, setActive] = useState('Dashboard')

  return (
    <div className="container">

      <Sidebar active={active} onSelect={setActive} />

      <div className="main">

        <Topbar />

        <div className="content">

          {active === 'Dashboard' ? (
            <>
              <div className="cards">
                <StatCard title="Active Categories" value="16"/>
                <StatCard title="Root Categories" value="4"/>
                <StatCard title="Active Alerts" value="23"/>
              </div>

              <div className="charts">
                <ChartBox title="Asset Health Trend"/>
                <ChartBox title="Alerts Over Time"/>
              </div>
            </>
          ) : active === 'Assets' ? (
            <AssetsPanel />
          ) : active === 'AI Insight' ? (
            <AiInsight/>
          ) : active === 'Issues' ? (
                  <Issues />
          ) : active === 'QR System' ? (
            <Qr />
          ) : active === 'Documents' ? (
            <Documents />
          ) : active === 'Analytics' ? (
            <Analytics />
          ) : (



            
            <div className="blank">
              <h3>{active}</h3>
              <p>This area is blank — you can implement it later.</p>
            </div>
          )}

        </div>

      </div>

    </div>
  )
}

//git push origin main
//