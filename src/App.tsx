import { useState } from "react";
import { IWeatherType } from "./@types/WeatherType";
import { weatherApi } from "./service/api";
import { LoaderCircle, Search, Sun, CloudRain, CloudDrizzle, Cloud, CloudSnow, CloudLightning, Wind, CloudFog, Sunset, Sunrise, Plus, Minus, Droplets, ThermometerSun} from "lucide-react";
import * as S from "./style/style";
import { toast } from "react-toastify";

const weatherIcons = {
  "céu limpo": <Sun color={"#ffd500"} />,
  "poucas nuvens": <Cloud color={"#8c8c8c"} />,
  "nuvens dispersas": <Cloud color={"#8c8c8c"} />,
  "nuvens quebradas": <Cloud color={"#8c8c8c"} />,
  "chuva passageira": <CloudDrizzle color={"#8c8c8c"} />,
  "chuva": <CloudRain color={"#5c6fff"} />,
  "tempestade": <CloudLightning color={"#000f80"} />,
  "neve": <CloudSnow color={"#a7aedc"} />,
  "névoa": <CloudFog color={"#a7aedc"} />,
  "vento": <Wind color={"#a7aedc"} />,
};

export function App() {
  const [weather, setWeather] = useState<IWeatherType>();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const getWeatherFromApi = async (lat: number, lon: number) => {
    setLoading(true);
    const response = await weatherApi.get(
      `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&lang=pt&units=metric`
    );
    setLoading(false);
    if (response.status > 299) {
      toast.error("Erro ao chamar API");
      return;
    }

    toast.success("Dados encontrados");
    setWeather(response.data);
  };

  const getGeoLocationByName = async () => {
    let query = location;
    if (state) query += `,${state}`;
    if (country) query += `,${country}`;

    const response = await weatherApi.get<any>(
      `/geo/1.0/direct?q=${query.replace(" ", "%20")}&limit=1&appid=${import.meta.env.VITE_API_KEY}`
    );
    if (response.status > 299 || response.data[0] == null) {
      toast.error("Endereço não encontrado");
      return;
    }

    getWeatherFromApi(response.data[0].lat, response.data[0].lon);
  };

  const handleSearch = () => {
    if (location.trim() === "") {
      toast.warning("Por favor, digite o nome de uma cidade!");
      return;
    }
    getGeoLocationByName();
  };

  const formatarHorario = (timestamp: number): string => {
  const data = new Date(timestamp * 1000);
  return data.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" });
};

  return (
    <>
      <S.Container>
        <S.Search>
          <S.Input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Digite a cidade"
          />
          <S.Input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Digite o estado (opcional)"
          />
          <S.Input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Digite o país (opcional)"
          />
          <S.Button onClick={handleSearch}>
            <Search />
          </S.Button>
        </S.Search>

        {loading ? (
          <S.LoaderCircle>
            <LoaderCircle className="svg" />
          </S.LoaderCircle>
        ) : (
          <S.Weather>
            {weather ? (
              <S.Result>

                <S.WeatherName>
                  {weather.name}, {weather.sys.country}
                </S.WeatherName>
                
                <S.WeatherRes>
                                    
                  <S.WeatherDesc>

                    <S.Temp>
                      {weather.main.temp}°C
                    </S.Temp>

                    <S.Description className="Description">
                      {weatherIcons[weather.weather[0].description as keyof typeof weatherIcons] || <Cloud />} 
                      {weather.weather[0].description} {" "}
                    </S.Description>

                  </S.WeatherDesc>

                  <S.WeatherResult>

                    <S.Desc className="Temp_min_max">
                      <S.Content>
                        <Minus /> min: {weather.main.temp_min}°C <br />
                      </S.Content>
                      <S.Content>
                        <Plus /> max: {weather.main.temp_max}°C
                      </S.Content>
                    </S.Desc>

                    <S.Desc className="Sun_sunrice_sunset"> 
                      <S.Content>
                        <Sunrise color="#ffb22e" /> {formatarHorario(weather.sys.sunrise)}
                      </S.Content>  
                      <S.Content>
                        <Sunset color="#2e93ff" /> {formatarHorario(weather.sys.sunset)} 
                      </S.Content>
                    </S.Desc>

                    <S.WeatherResult_2 >
                      <S.Desc className="Wind_speed">
                        <S.Content>
                        <Wind /> {weather.wind.speed}m/s
                        </S.Content>
                      </S.Desc>

                      <S.Desc className="Humidity">
                        <S.Content>
                          <Droplets color="#2e93ff" />
                          {weather.main.humidity}%
                        </S.Content>
                      </S.Desc>

                      <S.Desc className="Feels_like">
                        <S.Content>
                          <ThermometerSun />
                          {weather.main.feels_like}°C
                        </S.Content>
                      </S.Desc>
                    </S.WeatherResult_2>

                  </S.WeatherResult>

                </S.WeatherRes>

              </S.Result>
            ) : (
              ""
            )}
          </S.Weather>
        )}
      </S.Container>
    </>
  );
}
