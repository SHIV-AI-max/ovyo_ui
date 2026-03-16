"use client"

import "./Documents.css"

export default function DocumentPage(){

  return (
    <div className="doc-page">

      {/* LEFT SIDE */}

      <div className="doc-left">

        <h2>Find Asset Documents</h2>

        <label>Asset Category</label>
        <select className="doc-input">
          <option>IT Assets</option>
          <option>Non IT Assets</option>
          <option>Accesories</option>
        </select>

        <label>Department</label>
        <select className="doc-input">
          <option>Front Office</option>
          <option>Back Office</option>
        </select>

        <label>Search Asset ID</label>
        <input
          type="text"
          className="doc-input"
          placeholder="Enter Asset ID"
        />

        <label>Search by Tags (optional)</label>
        <input
          type="text"
          className="doc-input"
          placeholder="Enter tags"
        />

        <button className="doc-btn">
          Find Documents
        </button>

      </div>


      {/* RIGHT SIDE */}

      <div className="doc-right">

        <h3>Attached Files</h3>

        <table className="doc-table">

          <thead>
            <tr>
              <th>File Name</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>invoice_2024.pdf</td>
              <td>PDF</td>
              <td>12 Jan 2024</td>
            </tr>

            <tr>
              <td>warranty_card.jpg</td>
              <td>Image</td>
              <td>04 Feb 2024</td>
            </tr>

            <tr>
              <td>setup_manual.pdf</td>
              <td>PDF</td>
              <td>18 Mar 2024</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  )
}