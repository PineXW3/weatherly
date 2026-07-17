import "./page.css"
import Sidebar from "@/components/Sidebar"
import WeatherPanel from "@/components/WeatherPanel"
import ForecastArea from "@/components/ForecastArea"

export default function Home() {
  return (
    <main className="app">
      <Sidebar />

      <WeatherPanel />
      
      <ForecastArea />


    </main>
  );
}