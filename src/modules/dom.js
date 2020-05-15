const container = document.getElementById('content');

export const searchForm = document.createElement('form');
export const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
const searchBtn = document.createElement('input');
searchBtn.setAttribute('type', 'submit');
searchForm.appendChild(searchInput);
searchForm.appendChild(searchBtn);

export const results = document.createElement('p');
container.appendChild(searchForm);
container.appendChild(results); 
