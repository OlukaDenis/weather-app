import { DomElements as Dom } from './modules/dom';
import { JsonData } from './modules/data';

console.log(Dom)
const apiKey = '269c433647c44e7f08da7c96212b5f57';
Dom.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const selectedCity = Dom.searchInput.value;
  const getWeather = async (city) => {
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,{ mode: 'cors'})
    return weather.json();
  };

  Promise.resolve(getWeather(selectedCity))
      .then(res => Dom.updateData(JsonData(res)))
      .catch(err => console.log(err))
});