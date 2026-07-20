import {Icon} from "@iconify/react"

export default function WeatherPanel() {
    return (
        <section className="weather-panel">
            <div className="logo">
                <Icon icon="arcticons:weather" />
                Weatherly
            </div>

            <div className="location">
                <h2>
                    <Icon icon="boxicons:location" />
                    New York, USA
                </h2>

                <p>Fri, Jan 5 &bull; 10:30AM</p>
            </div>

            <section className="current-weather">
                <Icon icon="arcticons:weather" />
                
                <p>Fog</p>

                <h1>31C</h1>

                <p>Feels like 27C</p>

                <div>
                    <button>C</button>
                    <button>F</button>
                </div>
            </section>

            <section className="weather-stat">
                <p>Humidity 50%</p>
                <p>Wind Speed 1.4km/h</p>
                <p>Air Pressure 1009hPa</p>
                <p>Visibility 4.8km</p>
                <p>UV Index 1 Low</p>
            </section>

            
        
        </section>
    );
}