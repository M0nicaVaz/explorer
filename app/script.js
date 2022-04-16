class PROJECT {
  constructor(title, description, gif, pen, id) {
    this.title = title;
    this.description = description;
    this.gif = gif;
    this.pen = pen;
    this.id = id;
  }
}

const PROJECTS = [
  new PROJECT(
    'Móveis Planejados',
    'Conceitos básicos de HTML e CSS.',
    `./assets/ezgif-5-43200ea06a.gif`,
    `https://codepen.io/WhosMonica/full/JjMprvQ`,
    1
  ),
  new PROJECT(
    'Treine.me ',
    'Tags semânticas do HTML.',
    `./assets/ezgif-5-43200ea06a.gif`,
    `https://codepen.io/WhosMonica/full/MWrVaeZ`,
    2
  ),
  new PROJECT(
    ' Rocket.sekt',
    'Landing Page',
    `./assets/ezgif-5-43200ea06a.gif`,
    `https://codepen.io/WhosMonica/full/popLEjz`,
    4
  ),
  new PROJECT(
    'Formulário',
    'Tags de formulário, pseudo-classes e Flexbox.',
    `./assets/ezgif-5-43200ea06a.gif`,
    `https://codepen.io/WhosMonica/full/vYpVWvM`,
    5
  ),
  new PROJECT(
    'Space Cream',
    'Display Grid, responsividade e keyframes.',
    `./assets/ezgif-5-43200ea06a.gif`,
    `https://codepen.io/WhosMonica/full/dyJQXGZ`,
    6
  ),
];

window.onload = createList(PROJECTS);

function createList(array) {
  let projectList = document.querySelector('#project-list');
  let content = '';

  array.forEach((obj, index) => {
    let listItem = `<li onClick="createContainer(${index} )">
    Projeto ${obj.id} - <span>${obj.title}</span>
  </li>`;

    content += listItem;
  });

  projectList.innerHTML = content;
}

function toggleDisplay() {
  mainContainer = document.querySelector('#main-container');
  hiddenContainer = document.querySelector('#hidden-container');
  aboutContainer = document.querySelector('#about-container');

  mainContainer.classList.toggle('display-none');
  hiddenContainer.classList.toggle('display-none');
  aboutContainer.classList.toggle('display-none');
}

function createContainer(index) {
  toggleDisplay();

  obj = PROJECTS[index];

  let containerTitle = `<h2>${obj.title}</h2>`;
  let pageLink = `<a href="${obj.pen}
      " target="_blank">
      Veja no CodePen!</a>`;
  let descriptionP = `<p> ${obj.description} </p>`;
  let gif = `<img src="${obj.gif}"/> `;
  let back = `<button onClick="toggleDisplay()"> Voltar </button>`;

  hiddenContainer.innerHTML = `${containerTitle} ${descriptionP} ${pageLink} ${gif} ${back}`;
}
