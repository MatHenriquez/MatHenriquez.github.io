const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://MatHenriquez.github.io',
  title: 'MH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Matías Henríquez',
  role: 'Back-End Web Developer',
  description:'👋 Greetings! I am a fullstack web developer and I offer high quality services in the area of programming with JavaScript, Vue, NodeJs, PostgreSQL and MongoDB. I stand out for my fast logical problem solving and my passion for constant learning, as well as my ease to work in a team. Currently, I am seeking employment in the area of web development for companies of all sizes.',
  resume: 'https://drive.google.com/file/d/1ZL3utr-n2Gd7oZT6vXvqH1l5hfP0IkDQ/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/matias-henriquez-dev/',
    github: 'https://github.com/MatHenriquez',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'EducApp',
    description:
      'University platform for online education',
    stack: ['JavaScript', 'Node', 'Mongoose', 'MongoDB'],
    // sourceCode: 'https://github.com/MatHenriquez/Proyecto_Individual',
    // livePreview: 'https://proyecto-individual-eight.vercel.app/',
  },
  {
    name: 'PetBook',
    description:
      'A web application for pet adoption.',
    stack: ['JavaScript', 'Node', 'Sequelize', 'PostgreSQL'],
    sourceCode: 'https://github.com/MatHenriquez/Proyecto_Final_PetBook',
    // livePreview: 'https://petbook.vercel.app/',
  },
  {
    name: 'ElectroRepair',
    description:
      'Home appliance repair trade API',
    stack: ['Node', 'Express', 'MySQL', 'Prisma'],
    sourceCode: 'https://github.com/JereGomez/electrodomesticos/tree/main',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  // 'Next',
  // 'Redux',
  // 'SASS',
  'Git',
  'Node',
  'Express',
  'C#',
  // 'Sequelize',
  'PostgreSQL',
  'MongoDB'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matias.henriquez.dev@gmail.com',
}

export { header, about, projects, skills, contact }
