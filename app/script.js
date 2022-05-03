class Project {
  constructor(title, description, img, pen, id) {
    this.title = title;
    this.description = description;
    this.img = img;
    this.pen = pen;
    this.id = id;
  }
}

const PROJECTS = [
  new Project(
    'Móveis Planejados',
    'Conceitos básicos de HTML e CSS.',
    './assets/project1.PNG',
    `https://codepen.io/WhosMonica/full/JjMprvQ`,
    1
  ),
  new Project(
    'Treine.me ',
    'Tags semânticas do HTML.',
    './assets/project2.PNG',
    `https://codepen.io/WhosMonica/full/MWrVaeZ`,
    2
  ),
  new Project(
    ' Rocket.sect',
    'Landing Page',
    './assets/project4.PNG',
    `https://codepen.io/WhosMonica/full/popLEjz`,
    3
  ),
  new Project(
    'Formulário',
    'Tags de formulário, pseudo-classes e Flexbox.',
    './assets/project5.PNG',
    `https://codepen.io/WhosMonica/full/vYpVWvM`,
    4
  ),
  new Project(
    'Space Cream',
    'Display Grid, responsividade e keyframes.',
    './assets/project6.PNG',
    `https://codepen.io/WhosMonica/full/dyJQXGZ`,
    5
  ),
  new Project(
    'FocusTimer',
    'Um timer no estilo pomodoro | JavaScript e DOM',
    './assets/project7.gif',
    'https://m0nicavaz.github.io/FocusTimer/',
    6
  ),
];

window.addEventListener('DOMContentLoaded', () => {
  let projectList = document.querySelector('#project-list');
  let content = '';

  PROJECTS.forEach((project, index) => {
    let listItem = `<li onClick="createContainer(${index})">
    Projeto ${project.id} - <span>${project.title}</span>
  </li>`;

    content += listItem;
  });

  projectList.innerHTML = content;
});

function toggleDisplay() {
  const mainContainer = document.querySelector('#main-container');
  const hiddenContainer = document.querySelector('#hidden-container');
  const aboutContainer = document.querySelector('#about-container');

  mainContainer.classList.toggle('display-none');
  hiddenContainer.classList.toggle('display-none');
  aboutContainer.classList.toggle('display-none');
}

function createContainer(index) {
  toggleDisplay();

  let project = PROJECTS[index];

  let containerTitle = `<h2>${project.title}</h2>`;
  let pageLink = `<a href="${project.pen}
      " target="_blank">
      Ir para o projeto</a>`;
  let descriptionP = `<p> ${project.description} </p>`;
  let img = `<img src="${project.img}"/> `;
  let back = `<button onClick="toggleDisplay()"> voltar </button>`;

  const hiddenContainer = document.querySelector('#hidden-container');
  hiddenContainer.innerHTML = `${containerTitle} ${descriptionP} ${pageLink} ${img} ${back}`;
}
