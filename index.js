let aboutContents = {
    title: 'About me',
    greeting: `Greetings, my name is Lucas Cavalheiro.`,
    experience: `I'm a software programmer with over 2 years of experience in the areas of telecommunications and banking.`,
    topics: `I've maintained I.T systems, developed software and also single page applications.`
}

let curriculumWorkContents = [
        {
          name: 'Acotel do Brasil (2012 - 2013)',
          desc: 'Worked in the Q&A team as a testing intern, also performed some Customer Care functions.',
          res: 'More agile work regarding customer service.'
        },
        {
          name: 'BNDES (2013 - 2015)',
          desc: 'Worked as an intern, programming jobs to be sent to the mainframe and eventualy, some VBA macros for automation purposes.',
          res: 'My work with the VBA macros made the team\'s work considerably faster, certain tasks that usually took 1 or 2 days to be completed were now being done in a matter of hours.'
        },
        {
          name: 'IBM Global Financing (2019 - Present)',
          desc: 'As a developer student, i worked in the development of an internal S.P.A used for keeping track of the bank\'s transactions with clients.',
          res: 'Performed several refactoring tasks and introduced the team to some Clean Code principles that improved the project\'s overall performance and maintainability.'
        },
    ];

let degrees = [
        `Systems Development and Analysis (UNICARIOCA)`
      ];

let skills = {
        languages: [
          {name: 'HTML', icon: 'fab fa-html5 fa-2x'},
          {name: 'CSS', icon: 'fab fa-css3-alt fa-2x'},
        ],
        extra: [
          {name: 'Python', icon: 'fab fa-python fa-2x'},
          {name: 'Java', icon: 'fab fa-java fa-2x'},
        ],
        extra2: [
          {name: 'Javascript', icon: 'fab fa-js fa-2x'},
          {name: 'Vue.js', icon: 'fab fa-vuejs fa-2x' },
        ],
        frameworks: [
          {name: 'Bootstrap', icon: 'fab fa-bootstrap fa-2x' },
          {name: 'Node.js', icon: 'fab fa-node-js fa-2x' },
        ],
        practices: ['MySQL','DB2','MongoDB'],
        practices2: ['Scrum', 'Kanban', 'Clean Code'],
    };

let aboutElements = {
    title: document.getElementById('about-title'),
    greeting: document.getElementById('about-greeting'),
    experience: document.getElementById('about-experience'),
    topics: document.getElementById('about-topics'),
};

let curriculumWorkElements = [
    {
        name: document.getElementById('work-name-0'),
        desc: document.getElementById('work-desc-0'),
        res: document.getElementById('work-res-0')
    },
    {
        name: document.getElementById('work-name-1'),
        desc: document.getElementById('work-desc-1'),
        res: document.getElementById('work-res-1')
    },
    {
        name: document.getElementById('work-name-2'),
        desc: document.getElementById('work-desc-2'),
        res: document.getElementById('work-res-2')
    }
]

aboutElements.title.innerHTML = aboutContents.title;
aboutElements.greeting.innerHTML = aboutContents.greeting;
aboutElements.experience.innerHTML = aboutContents.experience;
aboutElements.topics.innerHTML = aboutContents.topics;

curriculumWorkElements[0].name.innerHTML = curriculumWorkContents[0].name;
curriculumWorkElements[0].desc.innerHTML += curriculumWorkContents[0].desc;
curriculumWorkElements[0].res.innerHTML += curriculumWorkContents[0].res;
curriculumWorkElements[1].name.innerHTML = curriculumWorkContents[1].name;
curriculumWorkElements[1].desc.innerHTML += curriculumWorkContents[1].desc;
curriculumWorkElements[1].res.innerHTML += curriculumWorkContents[1].res;
curriculumWorkElements[2].name.innerHTML = curriculumWorkContents[2].name;
curriculumWorkElements[2].desc.innerHTML += curriculumWorkContents[2].desc;
curriculumWorkElements[2].res.innerHTML += curriculumWorkContents[2].res;

$('.m-2').hide().show(2000);