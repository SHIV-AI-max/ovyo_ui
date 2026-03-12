"use client"

import { useState } from 'react'
import "./AssetsPanel.css"
import "../Topbar/Assetmodal.css" // reuse modal styles

export default function AssetsPanel(){
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState(null)

  function openModal(t, b){
    setTitle(t)
    setBody(b)
    setOpen(true)
  }

  return (
    <div className="assets-panel">
      <div className="assets-upper section-box">
        <h3>Assets</h3>
        <div className="btn-row">
          <button onClick={() => openModal('Total Assets', <p>Total: 120</p>)}>Total Assets: 120</button>
          <button onClick={() => openModal('Active / Inactive', <p>Active: 89<br/>Inactive: 31</p>)}>Active / Inactive</button>
          <button onClick={() => openModal('Maintenance Needed', <p>Maintenance Needed: 8</p>)}>Maintenance Needed: 8</button>
        </div>
      </div>

      <div className="assets-middle section-box">
        <h3>Asset Categories</h3>
        <div className="btn-row">
          <button onClick={() => openModal('IT Assets', <p>IT Assets</p>)}>IT Assets</button>
          <button onClick={() => openModal('Non IT Assets', <p>Non IT Assets</p>)}>Non IT Assets</button>
          <button onClick={() => openModal('Accesories', <p>Accesories</p>)}>Accesories</button>
        </div>
      </div>

      <div className="assets-bottom section-box">
        <h3>Department</h3>
        <div className="btn-row">
          <button onClick={() => openModal('Front Office', <p>Front Office</p>)}>Front Office</button>
          <button onClick={() => openModal('Back Office', <p>Back Office</p>)}>Back Office</button>
        </div>
      </div>

      {open && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
            <div className="modal-body">
              <h2>{title}</h2>
              <div className="modal-inner">{body}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
