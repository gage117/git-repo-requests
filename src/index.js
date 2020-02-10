/* eslint-disable no-console */
import $ from 'jquery';

function repoTemplate(repo) {
  return `
    <div class='repo'>
      <p>${repo.name}</p>
      <a href='${repo.html_url}' target='_blank'>Link to GitHub Repo</a>
    </div>
  `;
}

function populateHtml(resJson) {
  resJson.map(repo => {
    const result = repoTemplate(repo)
    $('.repo-container').append(result);
  });
}

function getRepos(username) {
  const url = `https://api.github.com/users/${username}/repos`;

  fetch(url)
    .then(res => res.json())
    .then(resJson => populateHtml(resJson))
}

function render() {
  console.log('loads');
  $('form').on('submit', (event) => {
    event.preventDefault();
    getRepos($('.text-input').val());
  });
}

$(render);