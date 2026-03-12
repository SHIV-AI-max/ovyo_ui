"use client"

import { useState } from "react"
import "./Assetbutton.css"
import Assetmodal from "./Assetmodal"

export default function Assetbutton(){
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="assetBtn" onClick={() => setOpen(true)}>Add Assets</button>
      <Assetmodal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
