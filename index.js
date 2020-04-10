let aboutContents = {
    title: 'About me',
    greeting: `Greetings, my name is Lucas Cavalheiro.`,
    experience: `I'm a software programmer with over 2 years of experience in the areas of telecommunications and banking.`,
    topics: `I've maintained I.T systems, developed software and also single page applications.`
}

let aboutElements = {
    title: document.getElementById('about-title'),
    greeting: document.getElementById('about-greeting'),
    experience: document.getElementById('about-experience'),
    topics: document.getElementById('about-topics'),
};

aboutElements.title.innerHTML += aboutContents.title;
aboutElements.greeting.innerHTML += aboutContents.greeting;
aboutElements.experience.innerHTML += aboutContents.experience;
aboutElements.topics.innerHTML += aboutContents.topics;
