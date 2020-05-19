const JsonData = (json) => {
	const { lon, lat } = json.coord;
	const { main, description, icon } = json.weather[0];
	const { temp, pressure, humidity } = json.main;
	const [tempMin, tempMax] = [json.main.temp_min, json.main.temp_max];
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
		tempMin,
		tempMax,
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

export default JsonData;

