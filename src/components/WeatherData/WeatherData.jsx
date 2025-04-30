export default function WeatherData({day, conditions, time}) {
    return (
        <div className="data">
            <h2>{day}</h2>
            <p><span>Conditions: </span>{conditions}</p>
            <p><span>Time: </span>{time}</p>
        </div>
    )
}