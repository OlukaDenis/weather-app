import { DomElements as Dom } from './modules/dom';
import { JsonData } from './modules/data';
import _ from 'lodash';
import './index.css';

const apiKey = '269c433647c44e7f08da7c96212b5f57';
Dom.searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedCity = Dom.searchInput.value;
  getSearchResults(selectedCity);
});

const getSearchResults = async (city) => {
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    { mode: 'cors' }
  );
  weather
    .json()
    .then((res) => {
      Dom.error.style.display = 'none';
      Dom.updateData(JsonData(res), true);
    })
    .catch(() => {
      Dom.error.style.display = 'block';
      Dom.error.innerHTML = ` Sorry, couldn't fetch weather for this city! 😩`;
    });
};

getSearchResults('kampala');
