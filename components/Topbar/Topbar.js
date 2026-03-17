
    "use client"
    import { useState } from "react"
    import "./Topbar.css"
    import Searchbar from "./Searchbar"
    import Assetbutton from "./Assetbutton"
    import Avatar from "./Avatar"
    import Image from "next/image";

    export default function Topbar(){
      return (
        <div className="topbar">
       
  <Image
    src="/ovyo.png"
    alt="Ovyo Logo"
    width={40}
    height={40}
    className="ovyo"
  />
 
          <Searchbar />
          <div className="actions">
            <Assetbutton />
            <Avatar />
          </div>
        </div>
      )
    }