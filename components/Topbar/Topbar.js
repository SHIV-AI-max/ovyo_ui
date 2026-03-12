
    "use client"
    import { useState } from "react"
    import "./Topbar.css"
    import Searchbar from "./Searchbar"
    import Assetbutton from "./Assetbutton"
    import Avatar from "./Avatar"

    export default function Topbar(){
      return (
        <div className="topbar">
          <Searchbar />
          <div className="actions">
            <Assetbutton />
            <Avatar />
          </div>
        </div>
      )
    }