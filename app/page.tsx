"use client"

import { useState } from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Topbar from "../components/Topbar/Topbar"

import AssetsPanel from "../components/Workspace/AssetsPanel"
import AiInsight from "../components/AiInsight/AiInsight";
import Issues from "../components/Issues/Issues";
import Qr from "../components/QR System/Qr";
import Documents from "../components/Documents/Documants"
import Analytics from "../components/Analytics/Analytics"
import Dashboard from "../components/Dashboard/Dashboard"
import './globals.css'


export default function UI() {
  const [active, setActive] = useState('Dashboard')

  return (
    <div className="container">
     <Topbar />
      
      <div className="main">
      <Sidebar active={active} onSelect={setActive} />

     
        

        <div className="content">



          {active === 'Dashboard' ? (
            <Dashboard />
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