import { DomElements } from './modules/dom';
import JsonData  from './modules/data';
import './index.css';

const getSearchResults = async (city) => {
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    { mode: 'cors' }
  );
  weather
    .json()
    .then((res) => {
      DomElements.error.style.display = 'none';
      DomElements.updateData(JsonData(res), true);
    })
    .catch(() => {
      DomElements.error.style.display = 'block';
      DomElements.error.innerHTML = ` Sorry, couldn't fetch weather for this city! 😕😒`;
    });
};

const apiKey = '269c433647c44e7f08da7c96212b5f57';
DomElements.searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedCity = DomElements.searchInput.value;
  getSearchResults(selectedCity);
});

getSearchResults('kampala');
