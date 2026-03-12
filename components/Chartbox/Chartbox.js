import "./Chartbox.css"

export default function ChartBox({title}){
  return(
    <div className="chartBox">
      <h3>{title}</h3>
      <div className="chartPlaceholder"></div>
    </div>
  )
}