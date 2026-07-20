import "./page.css"
import Sidebar from "../components/Sidebar/Sidebar.js"
import WeatherPanel from "../components/WeatherPanel/WeatherPanel.js"
import ForecastArea from "../components/ForecastArea/ForecastArea.js"

export default function Home() {
  return (
    <main className="app">
      <Sidebar />

      <WeatherPanel />
      
      <ForecastArea />


    </main>
  );
}