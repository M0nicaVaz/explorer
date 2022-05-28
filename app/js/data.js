class Project {
  constructor(title, href, description, img, live, id) {
    this.title = title;
    this.href = href;
    this.description = description;
    this.img = img;
    this.live = live;
    this.id = id;
  }
}

const PROJECTS = [
  new Project(
    'Móveis Planejados',
    '#moveis-planejados',
    'Conceitos básicos de HTML e CSS.',
    './assets/project1.PNG',
    `https://codelive.io/WhosMonica/full/JjMprvQ`,
    1
  ),
  new Project(
    'Treine.me ',
    '#treine-me',
    'Tags semânticas do HTML.',
    './assets/project2.PNG',
    `https://codelive.io/WhosMonica/full/MWrVaeZ`,
    2
  ),
  new Project(
    ' Rocket.sect',
    '#rocket-sect',
    'Landing Page',
    './assets/project4.PNG',
    `https://codelive.io/WhosMonica/full/popLEjz`,
    3
  ),
  new Project(
    'Formulário',
    '#formulario',
    'Tags de formulário, pseudo-classes e Flexbox.',
    './assets/project5.PNG',
    `https://codelive.io/WhosMonica/full/vYpVWvM`,
    4
  ),
  new Project(
    'Space Cream',
    '#space-cream',
    'Display Grid, responsividade e keyframes.',
    './assets/project6.PNG',
    `https://codelive.io/WhosMonica/full/dyJQXGZ`,
    5
  ),
  new Project(
    'FocusTimer',
    '#focustimer',
    'Um timer no estilo pomodoro | JavaScript e DOM',
    './assets/project7.gif',
    'https://m0nicavaz.github.io/FocusTimer/',
    6
  ),
];

export { PROJECTS };