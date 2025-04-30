import './WeatherForecast.css'


export default function weatherForecast({ day, img, conditions, time, imgAlt}) {

    return (
        <div className="weather">
            <h2>{day}</h2>
            <img src={img} alt={imgAlt} />
            <p><span>Conditions: </span>{conditions}</p>
            <p><span>Time: </span>{time}</p>
        </div>
    )
}
