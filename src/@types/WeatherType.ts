export interface IWeatherType{
    coord: Icoord,
    weather: IWeather[],
    base: string,
    main: IMain,
    visibility: number,
    wind: IWind,
    clouds: IClounds,
    dt: number,
    sys: ISys,
    timezone: number,
    id: number,
    name: string,
    cod: number
}

interface Icoord {
    lon: number,
    lat: number
}

interface IWeather{
    id: number,
    main: string,
    description: string,
    icon: string
}

interface IMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
}

interface IWind {
    speed: number,
    deg: number
}

interface IClounds {
    all: number
}

export interface ISys {
    type:    number;
    id:      number;
    country: string;
    sunrise: number;
    sunset:  number;
}

