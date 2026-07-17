import styles from "@/styles/forecast-area.css"
import Header from "./Header"

export default function ForecastArea() {
    return (
        <section className="forecast-area">
            <Header />

            {/*Hero weather*/}
            <div className="hero-weather">Hero</div>

            <div className="hourly-forecast">Hourly forecast</div>

            <section className="bottom-cards">
            {/*Weekly forecast*/}
            <div className="weekly-forecast">Weekly</div>

            <div className="precipitation">Precipitation</div>
          
            <div className="sun-moon">Sun & Moon</div>
            </section>
        </section>
    );
}