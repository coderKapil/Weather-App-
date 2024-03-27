const apiKey = '95d85d8f967ed8cf8e950d03bd3db1b1'

const getWeather = async(city)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    return await response.json()
}

export default getWeather;