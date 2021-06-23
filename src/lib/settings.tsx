/**
 * This is a library of all of the settings used in the website
 */
import { XY } from './types';

// Global stuff
export const siteName =                 'Arthur Guo \'s Website';
export const siteRoot =                 '';
export const siteFooterText =           'Website designed by Arthur (Hypernova) Guo - 2021';
export const mobileDevice =             /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;
export const phoneValidate =            /^\d{3}-\d{3}-\d{4}$/;
// eslint-disable-next-line no-control-regex
export const emailValidate =            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
export const emailJsKey =               'user_8FMH1Rt1nCasGQZejbl6u';
export const emailJsService =           'service_36bjcuv';
export const emailJsTemplate =          'template_n47zplu';
export const recaptcha =                '6LcOflEbAAAAAM_V8jC05Id_iqz3UJBqNLtPlir0';
export const siteNavigation =           { list: [
  ['Home', siteRoot + '/#'],
  ['About Me', siteRoot + '/#/about'],
  ['Projects', siteRoot + '/#/projects'],
  ['Contact', siteRoot + '/#/contact'] // Google Form - https://forms.gle/b2VFnmVQmQhZh48G8
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
  paragraph:          'My name is Arthur Guo (also known as ChengAn or Hypernova). I am a programmer with one objective: to learn new things everyday. Creativity and problem solving is my bread and butter.',
  paragraph2:         'I started programming games as a hobby during my high school years (2007 - 2011). Over time, I learned how to build websites in HTML / CSS for the games I\'ve made. When I worked for HostGator, I learned some programming while fixing customer\'s websites. After HostGator, I worked in several coding side projects from my employers. While I\'m off the clock, I took action and build several website for my clients.',

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
      summary: 'I first learned back end when I was working on an app in mid-2016 with PHP. Around early 2019, I helped maintaining a legacy back end PHP code base for a website that was made in 2006. In mid 2020, while I was learning React, I learned how to write backend JS with Express.',
      tags: ['PHP', 'Express'], 
    }, 
    {
      title: 'Game Development',
      meta: 'game-dev',
      image: require('../resources/img/icon-gamedev.png'),
      summary: 'Game development is the initial path I took to learn programming. I learned how to build games with GML and built dozens of game project since 2007.', 
      tags: ['Game Maker: Studio', 'GML', 'GLSL'],
    },
    {
      title: 'Others',
      meta: 'others',
      image: require('../resources/img/icon-others.png'),
      summary: 'I have various of other skills under my belt I learned from hobbies, past work experiences, etc.',
      tags: ['GNU/Linux', 'DNS', 'Apache', 'Adobe CS', 'Communications', 'Mandarin Chinese (中文 - 普通话)'],
    }, 
  ]
};

// Projects page
export const projectSettings = {
  title:              'Projects',
  summary:            'Here are a list of notable projects I have built in the past.',
}

// Contact page
export const contactSettings = {
  title:              'Contact Me',
  summary:            'If you\'re interested to hire me, please let me know! I am in Plano, TX but open to remote works.',

  avaiable:           '9:00 AM - 5:00 PM (US Central Time)',
  github:             'https://github.com/hypernovatx',
  linkedin:           'https://www.linkedin.com/in/arthur-guo-a59346148/',
  notice:             'To reduce SPAM, I hid my contact information in this site. When you\'re filling out the forms, please understand that it can only take phone numbers in US / Canada since I cannot make calls outside of +1 country code.',

  formName: { label: 'Full Name', name: 'name', },
  formEmail:  { label: 'Email Address', name: 'email', },
  formPhone: { label: 'Phone Number',  name: 'phone', },
  formCompany: { label: 'Company',  name: 'company', },
  formMessage: { label: 'Your Messages', name: 'message', },

  errNameEmpty: '"Full Name" cannot be left blank!',
  errEmailEmpty: '"Email Address" cannot be left blank!',
  errEmailInvalid: 'Email address is not valid!',
  errPhoneEmpty: '"Phone Number" cannot be left blank!',
  errPhoneInvalid: 'Your phone number is not correct! US / Canada numbers only!',
  errCompanyEmpty: '"Company" cannot be left blank!',
  errMessageEmpty: '"Your Messages" cannot be left blank!',
  errRecaptcha: 'Please verify the reCAPTCHA form!',

  resetDialogue: 'Are you sure you want to reset the entire contact form?',
  successMsg: 'Thanks for the email! I will review your message and respond if interested!',
  failMsg: 'There is something wrong with the email service! Please try again later!',

  infoSVG: 'M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z',
}
