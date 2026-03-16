"use client"

import "./Qr.css"

export default function QRPage() {
  return (
    <div className="qr-page">

      {/* LEFT SIDE */}
      <div className="qr-left">

        <h2>Generate QR</h2>

        <label>Asset Category</label>
        <select className="qr-input">
          <option>IT Assets</option>
          <option>Non IT Assets</option>
          <option>Accesories</option>
        </select>

        <label>Department</label>
        <select className="qr-input">
          <option>Front Office</option>
          <option>Back Office</option>
        </select>

        <label>Search Asset ID</label>
        <input
          type="text"
          className="qr-input"
          placeholder="Enter Asset ID"
        />

        <label>Search by Tags (optional)</label>
        <input
          type="text"
          className="qr-input"
          placeholder="Enter tags"
        />

        <button className="qr-btn">
          Find Asset
        </button>

      </div>


      {/* RIGHT SIDE */}

      <div className="qr-right">

        <div className="qr-preview">
          QR Code Preview
        </div>

      </div>

    </div>
  )
}