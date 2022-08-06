import './CurrentWeather.css'
const CurrentWeather = ({data}) => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                <p className='city'>{data.city}</p>
                <p className='weather-description'>Sunny</p>
                </div>
                <div>
                <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
                </div>
            </div>
            <div className='bottom'>
                <div className='temperature'>{Math.floor(data.main.temp)}°C</div>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like </span>
                        <span className='parameter-value'>{Math.floor(data.main.feels_like)}°C</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;