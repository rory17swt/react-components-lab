import WeatherForecast from './components/WeatherForecast/WeatherForecast.jsx'
import WeatherIcon from './components/WeatherIcon/WeatherIcon.jsx'
import WeatherData from './components/WeatherData/WeatherData.jsx';

const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];


const App = () => {

  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((day, index) => (
          <WeatherForecast key={index}

            day={day.day}
            img={day.img}
            imgAlt={day.imgAlt}
            conditions={day.conditions}
            time={day.time}

          ></WeatherForecast>
        ))}
      </section>

      <main>
        {weatherForecasts.map((day, index) => (
          <WeatherIcon 

          key={index}
          img={day.img}

          />
        ))}
        </main>

        <footer>
        {weatherForecasts.map((day, index) => (
          <WeatherData 
          
          key={index}
          day={day.day}
          conditions={day.conditions}
          time={day.time}

          />
        ))}
        </footer>
    </>
  )
}

export default App
