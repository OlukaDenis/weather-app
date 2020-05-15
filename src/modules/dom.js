import { CustomDate } from './customDateFormat'
/* eslint-disable */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
/* eslint-enable */

export const DomElements = (() => {
  const container = document.getElementById('content');

  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  const dataContainer = document.createElement('div');

  searchInput.setAttribute('type', 'text');
  const searchBtn = document.createElement('input');
  searchBtn.setAttribute('type', 'submit');
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchBtn);

  const updateData = (data) => {
    dataContainer.innerHTML = '';
    console.log(data);
    const topDiv = document.createElement('div');
    const cityInfo = document.createElement('div');
    const cityName = document.createElement('h1');
    cityName.innerHTML = data.name;
    const countryName = document.createElement('p');
    countryName.innerHTML = data.country;
    cityInfo.appendChild(cityName);
    cityInfo.appendChild(countryName);

    const cloudsInfo = document.createElement('div');
    const cloudImage = document.createElement('img');
    cloudImage.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
    const cloudsDesc = document.createElement('p');
    cloudsDesc.innerHTML = data.description;
    cloudsInfo.appendChild(cloudImage);
    cloudsInfo.appendChild(cloudsDesc);

    topDiv.appendChild(cityInfo);
    topDiv.appendChild(cloudsInfo);

    const bottomDiv = document.createElement('div');
    const temp = document.createElement('div');
    const tempDiv = document.createElement('h4');
    const tempIc = document.createElement('i');
    tempIc.classList.add('fas', 'fa-thermometer-half')
    const tempData = document.createElement('span');
    tempData.innerHTML = data.temp;
    tempDiv.appendChild(tempIc);
    tempDiv.appendChild(tempData);
    temp.appendChild(tempDiv);
    bottomDiv.appendChild(temp);

    const humidity = document.createElement('div');
    const humidityDiv = document.createElement('h4');
    const humidityIc = document.createElement('i');
    humidityIc.classList.add('fas', 'fa-tint')
    const humidityData = document.createElement('span');
    humidityData.innerHTML = data.humidity;
    humidityDiv.appendChild(humidityIc);
    humidityDiv.appendChild(humidityData);
    humidity.appendChild(humidityDiv);
    bottomDiv.appendChild(humidity);

    const pressure = document.createElement('div');
    const pressureDiv = document.createElement('h4');
    const pressureIc = document.createElement('i');
    pressureIc.classList.add('fas', 'fa-tint')
    const pressureData = document.createElement('span');
    pressureData.innerHTML = data.pressure;
    pressureDiv.appendChild(pressureIc);
    pressureDiv.appendChild(pressureData);
    pressure.appendChild(pressureDiv);
    bottomDiv.appendChild(pressure);

    dataContainer.appendChild(topDiv);
    dataContainer.appendChild(bottomDiv);
  };

  container.appendChild(searchForm);
  container.appendChild(dataContainer); 

  return {
    searchForm,
    searchInput,
    updateData
  }
})();
