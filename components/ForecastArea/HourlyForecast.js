import { Icon } from "@iconify/react"

export default function() {
    return (
        <section className="hourly-forecast">
            {/*Repeat multiple times*/}
            <div className="forecast">
                <p>Now</p>
                <Icon icon="material-symbols:cloudy" />
                <p>31C</p>
            </div>
            <div className="forecast">
                <p>12PM</p>
                <Icon icon="material-symbols:cloudy" />
                <p>30C</p>
            </div>
        </section>
    );
}