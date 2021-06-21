/**
 * This is a library of all of the settings used in the website
 */
import { XY } from './types';

// Global stuff
export const siteName =                 'Arthur Guo \'s Website';
export const siteRoot =                 '';
export const siteFooterText =           'Website designed by Arthur (Hypernova) Guo - 2021';
export const siteNavigation =           { list: [
  ['Home', siteRoot + '/'],
  ['About Me', siteRoot + '/about'],
  ['Experiences', siteRoot + '/experiences'],
  ['Projects', siteRoot + '/projects'],
  ['Contact', siteRoot + '/contact']
] };

// Home page
export const homeSettings = {
  title:              'Hi! My name is Arthur Guo! I am a developer!',
  buttonText:         'Who I am exactly?',
  buttonUrl:          siteNavigation.list[1][1],
  landerImg:          '/resources/img/mountain-base.jpg',
  bgPos: (m: XY, x: number) => {
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
  }
};

// About page
export const aboutSettings = {
  title:              'Who I am?',
  paragraph:          'My name is Arthur Guo (also known as ChengAn or Hypernova). I am a programmer with a clear goal: to show the world what I can build. Creativity and problem solving is my bread and butter.',
  paragraph2:         'At a young age, I always wanted to turn my imagination into reality. In my earlier days, I started drawing to express myself. During my high school years (2007 - 2011), I started creating games as a hobby. Eventually, I need to build websites for my games, so I learned the basics around early 2010s. I then moved on to build apps for mobile phones and learned many new things. I wanted to become a developer so I started to learn new languages and tools the past few years. Most noteably JavaScript, TypeScript, PHP, React, and MySQL.',

  skillTitle:         'Skills',

};