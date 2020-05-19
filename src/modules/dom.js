/* eslint-disable */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
/* eslint-enable */

export const DomElements = (() => {
  const body = document.getElementById('body');
  const container = document.getElementById('content');
  const searchForm = document.createElement('form');
  searchForm.setAttribute('class', 'form');
  const searchInput = document.createElement('input');
  const error = document.createElement('p');
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('container');
  const celFarBtn = document.createElement('button');

  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Search City ...');
  const sbtn = document.createElement('button');
  sbtn.setAttribute('type', 'submit');
  const btnIc = document.createElement('span');
  btnIc.classList.add('fas', 'fa-search', 'search-btn');
  sbtn.appendChild(btnIc);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(sbtn);

  error.classList.add('error');

  const updateData = (data, cel) => {
    dataContainer.innerHTML = '';

    const toggleTemp = () => {
      if (cel) {
        return `${Math.round(data.temp)} °C`;
      } else {
        const faren = data.temp * (9 / 5) + 32;
        return `${Math.round(faren)} °F`;
      }
    };

    if (data.main.toLowerCase() === 'clouds') {
      body.style.backgroundImage =
        'url(https://www.queenelizabethparkuganda.com/wp-content/uploads/2019/03/placeholder_thumb_1152x648.jpg)';
    } else if (data.main.toLowerCase() === 'drizzle') {
      body.style.backgroundImage =
        'url(https://imagevars.gulfnews.com/2019/10/05/Rain-UAE-0001_16d9a15da21_large.jpg)';
    } else if (data.main.toLowerCase() === 'rain') {
      body.style.backgroundImage =
        'url(https://www.sciencenews.org/wp-content/uploads/2018/11/112718_KP_rainfall_feat.jpg)';
    } else if (data.main.toLowerCase() === 'thunderstorm') {
      body.style.backgroundImage =
        'url(https://www.stormgeo.com/assets/ArticleImages/thunderstorm-flipped__FocusFillWzQyODgsMjcwMCwieSIsNzRd.jpg)';
    } else if (data.main.toLowerCase() === 'snow') {
      body.style.backgroundImage =
        'url(https://www.washingtonpost.com/resizer/ZVTyaknssC3yXxy2zWKyvRXkJA0=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OMPC2AQTQEI6VESMWNGQTO6JJA.jpg)';
    } else {
      body.style.backgroundImage =
        'url(https://4.bp.blogspot.com/_tOJ-lqBX0wQ/TKzHK2u3PmI/AAAAAAAAAD0/yBauow-LYT4/s1600/Kayla+October+4+012.jpg)';
    }
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
    cloudsInfo.classList.add('clouds-info');
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
    temp.classList.add('temperature');
    const tempDiv = document.createElement('h4');
    tempDiv.classList.add('p-heading');
    const tempIc = document.createElement('i');
    tempIc.classList.add('fas', 'fa-thermometer-half');
    const tempData = document.createElement('span');
    tempData.innerHTML = toggleTemp();
    tempDiv.appendChild(tempIc);
    tempDiv.appendChild(tempData);
    temp.appendChild(tempDiv);
    bottomDiv.appendChild(temp);

    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    const humidityDiv = document.createElement('h4');
    humidityDiv.classList.add('p-heading');
    const humidityIc = document.createElement('i');
    humidityIc.classList.add('fas', 'fa-tint');
    const humidityData = document.createElement('span');
    humidityData.innerHTML = ` ${data.humidity} %`;
    humidityDiv.appendChild(humidityIc);
    humidityDiv.appendChild(humidityData);
    humidity.appendChild(humidityDiv);
    bottomDiv.appendChild(humidity);

    const pressure = document.createElement('div');
    pressure.classList.add('pressure');
    const pressureDiv = document.createElement('h4');
    pressureDiv.classList.add('p-heading');
    const pressureIc = document.createElement('i');
    pressureIc.classList.add('fas', 'fa-tachometer-alt');
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
  container.appendChild(error);
  container.appendChild(dataContainer);

  return {
    searchForm,
    searchInput,
    updateData,
    error,
  };
})();