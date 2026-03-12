"use client"

import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar({ active, onSelect }){
  const items = [
    { section: 'Overview', label: 'Dashboard' },
    { section: 'Workspace', label: 'Assets' },
    { section: 'Workspace', label: 'Monitoring' },
    { section: 'Workspace', label: 'AI Insight' },
    { section: 'Workspace', label: 'Issues' },
    { section: 'Resources', label: 'QR System' },
    { section: 'Resources', label: 'Documents' },
    { section: 'Resources', label: 'Analytics' },
    { section: 'ADMIN', label: 'Users & Roles' },
    { section: 'ADMIN', label: 'Audit logs' }
  ]

  // group items by section
  const grouped = items.reduce((acc, it) => {
    acc[it.section] = acc[it.section] || []
    acc[it.section].push(it.label)
    return acc
  }, {})

  const [expanded, setExpanded] = useState({ Overview:true })

  function toggleSection(sec){
    setExpanded(prev => ({ ...prev, [sec]: !prev[sec] }))
  }

  return(
    <div className="sidebar">
      <h2 className="logo">Ovyo</h2>

      <div className="menu">
        {Object.keys(grouped).map(section => (
          <div key={section}>
            <p className={"section clickable"} onClick={() => toggleSection(section)}>{section}</p>
            {expanded[section] && grouped[section].map(label => (
              <div
                key={label}
                className={"item" + (active === label ? ' active' : '')}
                onClick={() => onSelect && onSelect(label)}
              >
                {label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}