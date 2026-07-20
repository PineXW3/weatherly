import styles from "@/styles/forecast-area.css"
import Header from "./Header"
import HeroWeather from "./HeroWeather"
import HourlyForecast from "./HourlyForecast"
import WeeklyForecast from "./WeeklyForecast"

export default function ForecastArea() {
    return (
        <section className="forecast-area">
            <Header />

            {/*Hero weather*/}
            <HeroWeather />

            <HourlyForecast />

            <section className="bottom-cards">
            {/*Weekly forecast*/}
            <WeeklyForecast />

            <div className="precipitation">Precipitation</div>
          
            <div className="sun-moon">Sun & Moon</div>
            </section>
        </section>
    );
}