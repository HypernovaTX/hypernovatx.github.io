export const projectListClient = [
  {
    title: 'JJ Pools & Patios',
    meta: 'fe-jjpool',
    type: 'Front End',
    life: 'Mar 2021 - Jun 2021',
    image: require('../resources/img/proj/jjpool.jpg'),
    tools: ['TypeScript', 'React', 'PHP', 'JavaScript'],
    client: 'JJ Industries LLC',
    description: 'This is a simple React website I\'ve built for a pool cleaning company. I have crafted the design of this website completely by myself as per the client\'s request.\r\n \r\nThe website has a relatively simple structure, the main component assembles the templates together. Each section of the website is separated as a function so it would be easier to update if I need to go back and update. I also created a separate component for the contact form because it handles form data, process data, and sending requests to the emailer PHP file which is a mini API to send emails from the contact form.',
    learned: [
      'Improved code organization',
      'A bit of SVG manipulation',
      'PHP emailer',
    ],
    url: [
      { name: 'Live Site', link: 'https://jjpoolsnpatios.com/' },
      { name: 'Source', link: 'https://github.com/HypernovaTX/JJPoolsNPatios' },
    ]
  },
  {
    title: 'DFW Mobile Repair',
    meta: 'fs-dfwmr',
    type: 'Full Stack',
    life: 'Oct 2020 - Feb 2021',
    image: require('../resources/img/proj/dfwmr.jpg'),
    tools: ['TypeScript', 'React', 'PHP', 'MySQL', 'JavaScript'],
    client: 'Hamm (Houmod)',
    description: 'This the first complex website I\'ve built for a client. This has allowed me to excercise my knowledge on full stack development. The website allows customers to input their vehicle specs and look up the quotes. The admins can access the admin dashboard to view/edit vehicle quotes and users\' accounts.\r\n \r\nThe front end has a router that defines each of the pages, each page is an entire component in exception of the admin dashboard where there it also calls (via Axios) an addition component that works as a quote editor popup window. Some component calls (Axios) to the backend to process the data.\r\n \r\nThe PHP backend (private due to security concerns) are separated by 2 classes: "user" for login and user editing and "quote" for viewing and editing. Both of the classes calls to the SQL class which is a very basic ORM I wrote. When sending response, most of the data are sent as JSON.',
    learned: [
      'Some understanding of development lifecycle',
      'Understanding of user registration/login systems',
      'Dealing with more complex API requests using Axios',
      'Dealing with more complex data structures',
      'Better understanding of OOP in PHP'
    ],
    url: [
      { name: 'Live Site', link: 'https://dfwmobilerepair.com/' },
      { name: 'Source (front end only)', link: 'https://github.com/HypernovaTX/DFWMobileRepair' },
    ]
  },
  {
    title: 'MFGG.net',
    meta: 'fs-mfgg',
    type: 'Full Stack',
    life: 'Jan 2019 - Oct 2019',
    image: require('../resources/img/proj/mfgg.jpg'),
    tools: ['PHP', 'MySQL', 'JavaScript'],
    client: 'MFGG Staff',
    description: 'MFGG is an old game development community founded in 2001. The software that the site utilizes was written in 2006 with PHP 5.2. I fixed some of the site\'s bugs, patched a security hole, and added more features to a legacy codebase.\r\n \r\nThe biggest accomplishment is to add a "Favorite System" where users can save submissions as favorites to their account. The software has different kind of components where I can call to several classes like "user", "db", "modules". I created a new MySQL database table then added new functions to call to the new SQL database. Then added more functions to modules and user components and templates to call to these functions. In the end, the feature is fully operational and users have not found any bugs in it even after a year.',
    learned: [
      'An understanding of working with a legacy codebase',
      'Preventive measures for security vulnerabilities like SQL injection',
      'The differences of various of SQL joins',
      'How to handle a large database',
    ],
    url: [
      { name: 'Live Site', link: 'https://mfgg.net' },
      { name: 'Source (incomplete)', link: 'https://drive.google.com/file/d/1gSTJfM8KnSeYsZ4660EoDFMlx3rPvCyr/view?usp=sharing' },
    ]
  },
  {
    title: 'Removu',
    meta: 'fe-removu',
    type: 'Front End',
    life: 'Apr 2018 - Mar 2019',
    image: require('../resources/img/proj/removu.jpg'),
    tools: ['WordPress', 'PHP', 'JavaScript'],
    client: 'Removu America Inc',
    description: 'Removu is a Korean-based camera company. Their website is built on WordPress and is hosted on an Ubuntu-based AWS server. I have helped the company by maintaing the site and redesigning its UI.\n\nThe website is ran on WordPress, I started removing any unnecessary plugins/assets from the site, compressed the images, and reduced some JavaScript to optimize the load. I then build each section of the home page based on a lander plugin the company purchased and used JavaScript to update the background\'s y position based on the scroll for the parallax effect. The marketing team requested me to use a video as the background of the header, I compressed the video as much as possible for the first header.',
    learned: [
      'Optimization of WordPress plugins',
      'Some knowledge on JavaScript',
      'WordPress theme modification',
    ],
    url: [
      { name: 'Archived Site', link: 'https://removu.com/' },    ]
  },
  {
    title: 'The Green Room Billiards',
    meta: 'fe-greenroom',
    type: 'Front End',
    life: 'May 2017 - Jun 2017',
    image: require('../resources/img/proj/tgrb.jpg'),
    tools: ['WordPress', 'PHP'],
    client: 'Larry Hill',
    description: 'I got a client from Billings MT that asked me to design a very simple website for his company. I was able to do this in a very short period of time.\r\n \r\nThis website is built straight off from WordPress with a theme called "Best". The style is too simple so I restructured the site and removed any unnecessary elements using plain CSS. I also modified some PHP codes to remove/edit some elemnts a little bit.',
    learned: [
      'How to finish a project in a short amount of time'
    ],
    url: [
      { name: 'Reupload', link: 'http://greenroom.byethost8.com/' },    
      { name: 'Source', link: 'https://drive.google.com/file/d/1w9qGQiiTSWYTTe5PgU__vln0OQCXFoQi/view?usp=sharing' }
    ]
  },
  
];

export const projectListPersonal = [
  {
    title: 'Arthur Guo',
    meta: 'fe-agsite',
    type: 'Front End',
    life: 'Jun 2021 - NOW',
    image: require('../resources/img/proj/ag.jpg'),
    tools: ['TypeScript', 'SCSS', 'React', 'JavaScript'],
    description: 'This is what you\'re looking at right now! My purpose in making this website is to sharpen my programming abilities while having a place to showcase my skills.\r\n \r\nSince this website is hosted on GitHub pages, I have learned how to use HashRouter to render the entire site without changing the actual URL which results in GitHub\'s 404 page. In addition, I have seperated each page to a component that builds itself from a global settings file and templates.',
    learned: [
      'General organization, design pattern, and logic seperation',
      'Fluency in SASS/SCSS',
      'Greater understanding of React Hooks and its rules',
      'Basic understandings of libraries such as Redux',
    ],
    url: [
      { name: 'Source', link: 'https://github.com/HypernovaTX/hypernovatx.github.io' },
    ]

  },
  {
    title: 'SimpleBugTracker.js',
    meta: 'fs-bug',
    type: 'Full Stack',
    life: 'Sep 2020 - Oct 2020',
    image: require('../resources/img/proj/bugtrack.jpg'),
    tools: ['TypeScript', 'React', 'Express', 'MySQL', 'JavaScript'],
    description: 'This is a bug-tracking project I wrote after learning ReactJS. To challenge me, I created this as a more complex version of a “To-Do" list. However, I have halted the development of this project in favor of a freelance project. My original goal for this project is a full-fledged bug tracking software with a login system and modular ticket items.\r\n \r\nThe front end splits into 2 components: "Sidebar" (unused) and "TicketList". "TicketList" is the main component that handles requests (Axios), sorting/filtering data, and an additional component that handles the popup window for data editing.\r\n \r\nThe backend is fairly simple, it uses "app.post" to route the requests. It uses a class called "dbimport" as a basic ORM to read/write data from the database. Then it tosses the data in JSON format.',
    learned: [
      'More about React and its components',
      'An understanding of Express.js',
      'Processing, sorting, and filtering data from MySQL',
      'Creating a form to write data to the database',
    ],
    url: [
      { name: 'Source (front end)', link: 'https://github.com/HypernovaTX/SimpleBugTracker.js-Frontend-' },
      { name: 'Source (back end)', link: 'https://github.com/HypernovaTX/SimpleBugTracker.js-Backend-' },
    ]
  },
  {
    title: 'Regular Toad Game',
    meta: 'gd-toad',
    type: 'Game Development',
    life: 'Apr 2020 - May 2020',
    image: require('../resources/img/proj/rtg2.jpg'),
    tools: ['GML'],
    description: 'During the early months of Covid-19 lockdown, I built this game to entertain myself. Most of the assets in this game are handmade or edited by myself. For example, the in-game artwork is hand-drawn in Microsoft Paint.\r\n \r\nThe game\'s physics were an custom made 2D platformer physics I wrote in 2016 that has improved handling. I modified some collision masks to make the experience even better plus some jumping physics change by increase the sensitivity when the player release the jump key.',
    learned: [],
    url: [
      { name: 'Gameplay Video', link: 'https://www.youtube.com/watch?v=8ZL53sWlx74' },
      { name: 'Download', link: 'https://www.mfgg.net/?act=resdb&param=02&c=2&id=37009' },
    ]
  },
  {
    title: '8Tones',
    meta: 'fs-8tones',
    type: 'Full Stack',
    life: 'Mar 2015 - Aug 2016',
    image: require('../resources/img/proj/8tones.jpg'),
    tools: ['GML', 'PHP', 'MySQL'],
    description: '8Tones is a music making app I built. The app allows users to sequence their 8-bit music on their mobile device and share their creations.\r\n \r\n8Tones allows users to create several music project and users can use the interface to produce music that is heavily inspired by old school music sequencer like Impluse Tracker, Famitracker, etc. Then users can upload their projects online for other users to listen.\r\n \r\nI write a set of array and store it in Game Maker\'s built in Data Structure to save all of the data of a project. To send the project online, I wrote a simple backend PHP API (procedural) that read/write data to the database thanks to the help of another developer called Zack Banack.',
    learned: [
      'Understanding HTTP requests',
      'Basic understanding of PHP and MySQL',
      'Understanding of hashing and salt',
      'Some basic understanding of grid based data structures',
    ],
    url: [
      { name: 'Video Demonstration', link: 'https://www.youtube.com/watch?v=A7rM7G9tHGE' },
      { name: 'Source', link: 'https://github.com/HypernovaTX/8Tones' },    
    ]
  },
  {
    title: 'Infinite Run Two',
    meta: 'fs-ir2',
    type: 'Game Development',
    life: 'Mar 2015 - Jul 2015',
    image: require('../resources/img/proj/ir2.png'),
    tools: ['GML'],
    description: 'Infinite Run Two was sequel to a less successful game that I built in early 2013 (Infinite Run One). I started off this project as an experimental 2D terrain generator.\r\n \r\nThe 2D terrain generator is pretty simple, at each of the grid, it checks previous ground elevation by its y-position and create another ground based on its elevation at the end.',
    learned: [
      'Using seeds to generate random terrains',
      'How to design more polished game UI',
    ],
    url: [
      { name: 'Gameplay Video', link: 'https://www.youtube.com/watch?v=VA8VnkEINE4' },
      { name: 'Source', link: 'https://drive.google.com/file/d/188423szoIWUpFd_HCABnPm-ZsWfzumRN/view?usp=sharing' }
    ]
  },
  {
    title: 'Cops',
    meta: 'fs-cops',
    type: 'Game Development',
    life: 'Jul 2014 - Jul 2016',
    image: require('../resources/img/proj/cops.jpg'),
    tools: ['GML'],
    description: 'Cops started off as a mini project for a game jam in mid 2014 where you have to use the color limitations of the Nintendo Entertainment System. Due to popularity, I resumed the development of this game until mid 2016.\r\n \r\nThe game\'s physics is extremely simple and built from scratch by myself.',
    learned: [],
    url: [
      { name: 'Gameplay Video', link: 'https://www.youtube.com/watch?v=IGT0QUChwmg' },
    ]
  },
];