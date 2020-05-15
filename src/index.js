import { results, searchForm, searchInput } from './modules/dom';

const apiKey = '269c433647c44e7f08da7c96212b5f57';
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const selectedCity = searchInput.value;
  const getWeather = async (city) => {
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,{ mode: 'cors'})
    return weather.json();
  };

  Promise.resolve(getWeather(selectedCity))
      .then(res => results.innerHTML = JSON.stringify(res))
});