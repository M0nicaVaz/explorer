import { PROJECTS } from './data.js';

const createTemplate = (project) => {
  if (!project) {
    const template = `
            <h2>não há nada aqui :(</h2>
            <a class="btn" href=""> voltar </>
            `;

    return template;
  }

  const template = `
            <h2>${project.title}</h2>
            <a href="${project.live}"
                target="_blank">
                Ir para o projeto</a>
            <p>${project.description}</p>
            <img src="${project.img}"/> 
            <a class="btn" href=""> voltar </>
            `;

  return template;
};

const createProjectContainer = () => {
  const hiddenContainer = document.createElement('section');
  hiddenContainer.className = 'hidden-container';
  return hiddenContainer;
};

export default (hashClicked) => {
  const hash = hashClicked;

  function findProject() {
    return function (project) {
      return project.href == hash;
    };
  }

  const project = PROJECTS.find(findProject(hash));

  const projectContainer = createProjectContainer();
  projectContainer.innerHTML = createTemplate(project);

  return projectContainer;
};
