import { Icon } from "@iconify/react"

export default function WeeklyForecast() {
    return (
        <section>
            <h2>7-Day Forecast</h2>

            {/* Repeat for 7 times */}
            <div className="forecast" styles="display:flex">
                <p>Today</p>
                <Icon icon="material-symbols:cloudy" />
                <p>Fog</p>

                <p>31C</p>
                <p>21C</p>
            </div>
        </section>
    );
}