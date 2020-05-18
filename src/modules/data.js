export const JsonData = (json) => {
  const { lon, lat } = json.coord;
  const { main, description, icon } = json.weather[0];
  const { temp, temp_min, temp_max, pressure, humidity } = json.main;
  const { country } = json.sys;
  const [sunrise, sunset] = [Date(json.sys.sunrise), Date(json.sys.sunset)];
  const [name, timezone, dateTime] = [json.name, json.timezone, Date(json.dt)];

  return {
    lon,
    lat,
    main,
    description,
    icon,
    temp,
    temp_min,
    temp_max,
    pressure,
    humidity,
    dateTime,
    country,
    sunrise,
    sunset,
    name,
    timezone,
  };
};
