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
  searchForm.setAttribute('class', 'form')
  const searchInput = document.createElement('input');
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('container');
  const celFarBtn = document.createElement('button');

  searchInput.setAttribute('type', 'text');
  const sbtn = document.createElement('button');
  sbtn.setAttribute('type', 'submit');
  const btnIc = document.createElement('span');
  btnIc.classList.add('fas', 'fa-search', 'search-btn');
  sbtn.appendChild(btnIc);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(sbtn);

  const updateData  = (data, cel) => {
    dataContainer.innerHTML = '';

    const toggleTemp = () => {
      if (cel){
        return  `${Math.round(data.temp)} °C`;
      } else {
        let faren = (data.temp * (9 / 5) + 32);
        return `${Math.round(faren)} °F`;
      }
    }

    console.log(data);
    const topDiv = document.createElement('div');
    topDiv.setAttribute('class', '__top-div');
    const cityInfo = document.createElement('div');
    const cityName = document.createElement('h1');
    cityName.innerHTML = data.name;
    const countryName = document.createElement('p');
    countryName.innerHTML = data.country;
    cityInfo.appendChild(cityName);
    cityInfo.appendChild(countryName);
    cityInfo.appendChild(celFarBtn);

    celFarBtn.setAttribute('class', 'btn cel-far-btn');
    celFarBtn.innerHTML = 'Change to °F';
    celFarBtn.addEventListener('click', () => {
      if (cel) {
        updateData(data, false);
        celFarBtn.innerHTML = 'Change to °C';
      } else {
        updateData(data, true);
        celFarBtn.innerHTML = 'Change to °F';
      }
    });

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
    bottomDiv.setAttribute('class', '__bottom-div');
    const temp = document.createElement('div');
    const tempDiv = document.createElement('h4');
    const tempIc = document.createElement('i');
    tempIc.classList.add('fas', 'fa-thermometer-half')
    const tempData = document.createElement('span');
    tempData.innerHTML = toggleTemp();
    tempDiv.appendChild(tempIc);
    tempDiv.appendChild(tempData);
    temp.appendChild(tempDiv);
    bottomDiv.appendChild(temp);

    const humidity = document.createElement('div');
    const humidityDiv = document.createElement('h4');
    const humidityIc = document.createElement('i');
    humidityIc.classList.add('fas', 'fa-tint')
    const humidityData = document.createElement('span');
    humidityData.innerHTML = ` ${data.humidity} %`;
    humidityDiv.appendChild(humidityIc);
    humidityDiv.appendChild(humidityData);
    humidity.appendChild(humidityDiv);
    bottomDiv.appendChild(humidity);

    const pressure = document.createElement('div');
    const pressureDiv = document.createElement('h4');
    const pressureIc = document.createElement('i');
    pressureIc.classList.add('fas', 'fa-tachometer-alt')
    const pressureData = document.createElement('span');
    pressureData.innerHTML = ` ${data.pressure} inHG`;
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
