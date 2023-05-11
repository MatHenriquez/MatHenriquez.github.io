const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://MatHenriquez.github.io',
  title: 'MH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Matías Henríquez',
  role: 'FullStack Web Developer',
  description:'👋 Greetings! I am a fullstack web developer and I offer high quality services in the area of programming with JavaScript, HTML, CSS, React, NodeJs and PostgreSQL. I stand out for my fast logical problem solving and my passion for constant learning, as well as my ease to work in a team. Currently, I am seeking employment in the area of web development for companies of all sizes.',
  resume: 'https://drive.google.com/drive/u/0/folders/1ZBoQYurw5oLhenXBXXiLLXpA_8VqUM1h',
  social: {
    linkedin: 'https://www.linkedin.com/in/matias-henriquez-dev/',
    github: 'https://github.com/MatHenriquez',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'PetBook',
    description:
      'A web application for pet adoption.',
    stack: ['React', 'JavaScript', 'Tailwind', 'Node', 'PostgreSQL'],
    sourceCode: 'https://github.com/MatHenriquez/Proyecto_Final_PetBook',
    livePreview: 'https://proyecto-final-pet-book.vercel.app/',
  },
  {
    name: 'Pokedex',
    description:
      'This website simulates a pokedez from the famous Pokemon animated series.',
    stack: ['React', 'JavaScript', 'Node', 'PostgreSQL'],
    sourceCode: 'https://github.com/MatHenriquez/Proyecto_Individual',
    livePreview: 'https://front-pi-nine.vercel.app/',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next',
  'Redux',
  'SASS',
  'Git',
  'Node',
  'Express',
  'Sequelize',
  'PostgreSQL'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matias.henriquez.dev@gmail.com',
}

export { header, about, projects, skills, contact }
