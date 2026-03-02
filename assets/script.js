import { links } from './store.js';

function renderLinks() {
  const container = document.getElementById('links-container');
  links.forEach(({ name, url }) => {
    const wrapper = document.createElement('div');
    wrapper.style.paddingBottom = '30px';

    const btn = document.createElement('a');
    btn.href = url;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.className = 'btn btn-outline-light btn-lg';
    btn.textContent = name;

    wrapper.appendChild(btn);
    container.appendChild(wrapper);
  });
}

async function loadMovieData() {
  const movieSection = document.getElementById('movie-section');
  const tbody = document.getElementById('movie-data');
  const errorEl = document.getElementById('movie-error');

  movieSection.style.display = 'block';

  try {
    const response = await fetch('https://www.omdbapi.com/?t=Mr.+Nobody&apikey=trilogy');
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();
    if (data.Error) throw new Error(data.Error);

    const row = document.createElement('tr');
    const titleTd = document.createElement('td');
    const yearTd = document.createElement('td');
    const actorsTd = document.createElement('td');

    titleTd.textContent = data.Title;
    yearTd.textContent = data.Year;
    actorsTd.textContent = data.Actors;

    row.append(titleTd, yearTd, actorsTd);
    tbody.appendChild(row);
  } catch (err) {
    errorEl.textContent = `Could not load movie data: ${err.message}`;
    errorEl.style.display = 'block';
    tbody.closest('table').style.display = 'none';
  }
}

document.getElementById('load-btn').addEventListener('click', function () {
  this.style.display = 'none';
  renderLinks();
  loadMovieData();
});
