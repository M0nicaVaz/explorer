import { PROJECTS } from './data.js';

const createHomeContainer = () => {
  let homeContainer = document.createElement('section');
  homeContainer.className = 'projects-container';
  return homeContainer;
};

const description = () => {
  return `
    <h1>Monica vaz</h1>
    <p>
      Um lugar para guardar todos os meus desafios do Explorer, da
      <a
        href="https://www.rocketseat.com.br/explorer?utm_source=youtube&utm_medium=live_qr_code&utm_campaign=offer_explorer&utm_term=organic&utm_content=event-FL03"
        target="_blank"
      >
        Rocketseat
      </a>
      .
    </p>
  `;
};

const createDescriptionElement = () => {
  let aboutContainer = document.createElement('section');
  aboutContainer.className = 'about-container';

  aboutContainer.innerHTML = description();

  return aboutContainer;
};

const createListElement = () => {
  let projectList = document.createElement('ul');
  projectList.className = 'project-list';
  return projectList;
};

const listTemplate = (project) => {
  const template = `<li>
                  <a href="${project.href}"> Projeto ${project.id} -
                  <span>${project.title}</span></a>
                    </li>`;

  return template;
};

export default () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'home-wrapper';

  const aboutContainer = createDescriptionElement();
  const homeContainer = createHomeContainer();
  const projectList = createListElement();

  homeContainer.appendChild(projectList);
  wrapper.appendChild(aboutContainer);
  wrapper.appendChild(homeContainer);

  let content = '';

  PROJECTS.forEach((project) => {
    const listItem = listTemplate(project);
    content += listItem;
  });

  projectList.innerHTML = content;

  return wrapper;
};
