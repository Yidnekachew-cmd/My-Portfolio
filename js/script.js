const linkHello = document.querySelector('#hellolink');
const linkAbout = document.querySelector('#aboutlink');
const linkPortfolio = document.querySelector('#portfoliolink');
const linkContact = document.querySelector('#contactlink');
const ProjectCard = document.querySelectorAll('.work_cards');
const Modal = document.querySelector('.modal-container');
const ModalTitle = document.querySelector('.modaltitle');
const ModalTechnology = document.querySelector('.language_used_modal');
const ModalImage = document.querySelector('.popup-image');
const ModalDescription = document.querySelector('.pop-up-description');
const ModalSeeLive = document.querySelector('.seelive');
const ModalSeeSource = document.querySelector('.seesource');

/* eslint-disable no-unused-vars */
function onClickMenu() {
  document.querySelector('.mobilemenu').style.display = 'flex';
  document.querySelector('main').style.display = 'none';
  document.querySelector('.heading').style.backgroundImage = "url('./images/image_geometry_menu_1.svg')";
  document.querySelector('.heading').style.height = '15vh';
  document.querySelector('.mobile_close_icon').style.display = 'block';
  document.querySelector('.mobile_menu_icon').style.display = 'none';
}

function onClickClose() {
  document.querySelector('main').style.display = 'block';
  document.querySelector('.mobile_close_icon').style.display = 'none';
  document.querySelector('.mobile_menu_icon').style.display = 'block';
  document.querySelector('.heading').style.backgroundImage = 'url(./images/image_geometry_1.svg)';
  document.querySelector('.mobilemenu').style.display = 'none';
  document.querySelector('.heading').style.height = '75px';
}

linkHello.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block';
  document.querySelector('.mobile_close_icon').style.display = 'none';
  document.querySelector('.mobile_menu_icon').style.display = 'block';
  document.querySelector('.heading').style.backgroundImage = 'url(./images/image_geometry_1.svg)';
  document.querySelector('.mobilemenu').style.display = 'none';
  document.querySelector('.heading').style.height = '75px';
});
linkContact.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block';
  document.querySelector('.mobile_close_icon').style.display = 'none';
  document.querySelector('.mobile_menu_icon').style.display = 'block';
  document.querySelector('.heading').style.backgroundImage = 'url(./images/image_geometry_1.svg)';
  document.querySelector('.mobilemenu').style.display = 'none';
  document.querySelector('.heading').style.height = '75px';
});
linkAbout.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block';
  document.querySelector('.mobile_close_icon').style.display = 'none';
  document.querySelector('.mobile_menu_icon').style.display = 'block';
  document.querySelector('.heading').style.backgroundImage = 'url(./images/image_geometry_1.svg)';
  document.querySelector('.mobilemenu').style.display = 'none';
  document.querySelector('.heading').style.height = '75px';
});
linkPortfolio.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block';
  document.querySelector('.mobile_close_icon').style.display = 'none';
  document.querySelector('.mobile_menu_icon').style.display = 'block';
  document.querySelector('.heading').style.backgroundImage = 'url(./images/image_geometry_1.svg)';
  document.querySelector('.mobilemenu').style.display = 'none';
  document.querySelector('.heading').style.height = '75px';
});

// Pop-up Starts here
const projectsList = [
  {
    projectTitle: 'Leaderboard',
    description: 'Leaderboard is a website that displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service(using Notion)..',
    featuredImage: 'leader-board.jpeg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Github', 'REST Api'],
    linkToLive: 'https://yidnekachew-cmd.github.io/Leaderboard/dist/',
    linkToSource: 'https://github.com/Yidnekachew-cmd/Leaderboard',
  },
  {
    projectTitle: 'Andy Decor',
    description: 'In this project, I build a basic HTML page with use of HTML, CSS and JavaScript. I used event listeners and dynamic DOM modifications to fetch elements',
    featuredImage: 'Andy-decore.png',
    technologies: ['HTML', 'Css', 'JavaScript'],
    linkToLive: 'https://yidnekachew-cmd.github.io/Module-1-Capstone/',
    linkToSource: 'https://github.com/Yidnekachew-cmd/Module-1-Capstone.git',
  },
  {
    projectTitle: 'Math-magician',
    description: 'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    featuredImage: 'Math1.png',
    technologies: ['ReactJS', 'HTML/CSS', 'JSON'],
    linkToLive: 'https://math-magician-yidnekachew-cmd.onrender.com/',
    linkToSource: 'https://github.com/Yidnekachew-cmd/math-magician',
  },

  {
    projectTitle: 'Food-Recipes',
    description: 'Food Recipes is a simple project that display sea-foods from TheMealDb Api. The user can like, comment and look the description of each foods.',
    featuredImage: 'Food.jpeg',
    technologies: ['Html', 'Css', 'JavaScript', 'Github', 'REST Api'],
    linkToLive: 'https://fuadmoin.github.io/Food-Recipes/dist/',
    linkToSource: 'https://github.com/fuadmoin/Food-Recipes',
  },
  {
    projectTitle: 'Book-store',
    description: 'Book Store is a website for all fans of reading. It is a Single Page App (SPA) that allows users to: Add books. See their reading status.',
    featuredImage: 'Book-store.png',
    technologies: ['React Js', 'Redux', 'HTML/CSS', 'JavaScript'],
    linkToLive: '',
    linkToSource: 'https://github.com/Yidnekachew-cmd/book-store',
  },

];

ProjectCard.innerHTML = '';
for (let i = 0; i < projectsList.length; i += 1) {
  let languages = '';
  projectsList[i].technologies.forEach((language) => {
    languages += `
        <li class="lang-item">${language}</li>
      `;
  });
  ProjectCard[i].innerHTML = `
              <img src='images/${projectsList[i].featuredImage}' alt='Project Image' class='work_image' id='img${i}' />
            <div class='workdetails'>
              <h3 class='work_title'>${projectsList[i].projectTitle}</h3>
                <ul class='language_used'>
                  ${languages}
                </ul>
                  <button type='button' class='seeproject project-modal-${i}'>See this Project<i class="fa fa-arrow-right"></i></button>
            </div>
    `;
}

// Button Click Event

for (let i = 0; projectsList.length; i += 1) {
  document.querySelector(`.project-modal-${i}`).addEventListener('click', () => {
    let modaltechnology = '';
    projectsList[i].technologies.forEach((language) => {
      modaltechnology += `
        <li class="lang-list">${language}</li>
      `;
    });
    ModalTitle.innerHTML = projectsList[i].projectTitle;
    ModalTechnology.innerHTML = modaltechnology;
    ModalImage.src = `images/${projectsList[i].featuredImage}`;
    ModalDescription.innerHTML = projectsList[i].description;
    ModalSeeLive.setAttribute('href', projectsList[i].linkToLive);
    ModalSeeSource.setAttribute('href', projectsList[i].linkToSource);
    Modal.style.display = 'block';
  });
}

// Close Button

function CloseModal() {
  Modal.style.display = 'none';
}

// Form Validation

function validate() {
  const text = document.getElementById('mail').value;
  const regx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  document.forms[0].onsubmit = (e) => {
    if (regx.test(text)) {
      document.getElementById('error-message').innerHTML = 'Valid';
      document.getElementById('error-message').style.color = 'green';
    } else {
      document.getElementById('error-message').innerHTML = 'Invalid !!! Please enter the email in lower case';
      document.getElementById('error-message').style.color = 'red';
      e.preventDefault();
    }
  };
}

// Local Storage

const contactForm = document.querySelector('form');
const EmailValue = document.getElementById('mail');
const NameValue = document.getElementById('name');
const MessageValue = document.getElementById('message');

contactForm.addEventListener('input', () => {
  const formData = {
    username: NameValue.value,
    email: EmailValue.value,
    message: MessageValue.value,
  };
  localStorage.setItem('userData', JSON.stringify(formData));
});