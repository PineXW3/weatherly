export default function Home() {
  return (
    <main>
      <aside className="sidebar">Side bar</aside>

      <section className="weather-panel">
        {/*Logo*/}
        <h1>Weatherly</h1>
      </section>

      {/*Main content*/}
      <section className="forecast-area">
        <header className="header">
          <input className="search-bar"></input>

          <div className="menu">Settings</div>
        </header>

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


    </main>
  );
}