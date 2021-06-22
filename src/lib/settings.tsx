/**
 * This is a library of all of the settings used in the website
 */
import { XY } from './types';

// Global stuff
export const siteName =                 'Arthur Guo \'s Website';
export const siteRoot =                 '';
export const siteFooterText =           'Website designed by Arthur (Hypernova) Guo - 2021';
export const mobileDevice =             /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;
export const siteNavigation =           { list: [
  ['Home', siteRoot + '/#'],
  ['About Me', siteRoot + '/#/about'],
  ['Projects', siteRoot + '/#/projects'],
  ['Contact', siteRoot + 'https://forms.gle/b2VFnmVQmQhZh48G8']
] };

// Home page
export const homeSettings = {
  title:              'Hi! My name is Arthur Guo! I am a developer!',
  buttonText:         'Who I am exactly?',
  buttonUrl:          siteNavigation.list[1][1],
  landerImg:          '/resources/img/mountain-base.jpg',
  bgPosDesktop: (m: XY, x: number) => {
    return {
      mountain: {
        backgroundPositionX: `calc(50% - ${ (m.x * 24) }px)`,
        backgroundPositionY: `calc(50% - ${ (m.y * 24) }px)`,
      },
      clouds: {
        backgroundPositionX: `calc(50% - ${ (m.x * 16) + x }px)`,
        backgroundPositionY: `calc(75% - ${ (m.y * 16) }px)`,
      },
      tree: {
        backgroundPositionX: `calc(25% - ${ (m.x * 8) }px)`,
        backgroundPositionY: `calc(110% - ${ (m.y * 8) }px)`,
      }
    }
  },
  bgPosMobile: (x: number) => {
    return {
      mountain: { backgroundPositionX: `50%`, backgroundPositionY: `50%`, },
      clouds: { backgroundPositionX: `calc(50% - ${x}px)`, backgroundPositionY: `75%`, },
      tree: { backgroundPositionX: `25%`, backgroundPositionY: `110%`, }
    }
  }
};

// About page
export const aboutSettings = {
  title:              'Who I am?',
  landerImg:          require('../resources/img/arthurguo.jpg'),
  paragraph:          'My name is Arthur Guo (also known as ChengAn or Hypernova). I am a programmer with a clear goal: to show the world what I can build. Creativity and problem solving is my bread and butter.',
  paragraph2:         'At a young age, I always wanted to turn my imagination into reality. In my earlier days, I started drawing to express myself. During my high school years (2007 - 2011), I started creating games as a hobby. Eventually, I need to build websites for my games, so I learned the basics around early 2010s. I then moved on to build apps for mobile phones and learned many new things. I wanted to become a developer so I started to learn new languages and tools the past few years. Most noteably JavaScript, TypeScript, PHP, React, and MySQL.',

  buttonText:         'Check out my projects!',
  buttonUrl:          siteNavigation.list[2][1],
  skillTitle:         'Skills',
  skillList:          [
    {
      title: 'Front End Development',
      meta: 'front-end',
      image: require('../resources/img/icon-frontend.png'),
      summary: 'Since 2012, I have experimented with HTML/CSS and JavaScript to showcase the games I\'ve built. Around 2017, I started doing some freelance projects by modifying existing WordPress themes. I then moved on to React and Typescript in mid 2020.',
      tags: ['HTML5', 'CSS3', 'SASS/SCSS', 'Javascript', 'Typescript', 'React'],
    }, 
    {
      title: 'Back End Development',
      meta: 'back-end',
      image: require('../resources/img/icon-backend.png'),
      summary: 'I first learned back end when I was working on an app in mid-2016 with PHP. Around early 2019, I helped maintaining a legacy back end PHP code base for a gaming website that was made in 2006. In mid 2020, while I was learning React, I learned how to write backend JS with Express.',
      tags: ['PHP', 'Express'], 
    }, 
    {
      title: 'Game Development',
      meta: 'game-dev',
      image: require('../resources/img/icon-gamedev.png'),
      summary: 'Game development is the initial path I took to learn programming. Back in 2007, I learned how to build games with Game Maker 6.1 and built dozens of game project. I have also published some of my projects to the App Store, Google Play Store, and Windows Phone Store.', 
      tags: ['Game Maker 6.1 - 8.1', 'Game Maker: Studio 1.4', 'GLSL'],
    },
    {
      title: 'Others',
      meta: 'others',
      image: require('../resources/img/icon-others.png'),
      summary: 'I have various of other skills under my belt I learned from hobbies, past work experiences, etc.',
      tags: ['GNU/Linux (CentOS, Debian)', 'DNS', 'Apache', 'Graphic Design', 'Hardware Repair', 'Communications', 'Mandarin Chinese (中文 - 普通话)'],
    }, 
  ]
};

// Projects page
export const projectSettings = {
  title:              'Projects',
  summary:            'Here are a list of my notable projects I have built in the past.',
}
