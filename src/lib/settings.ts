/**
 * This is a library of all of the settings used in the website
 */
import { MouseXY } from './types';

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
//const cloudXcalc = (x: number) => (x * 12) - (Date.now() / 1000) % 2112;
export const homeSettings = {
  title:              'Hi! My name is Arthur Guo! I am a developer!',
  buttonText:         'Who I am exactly?',
  buttonUrl:          '/about',
  landerImg:          '/resources/img/mountain-base.jpg',
  bgPos: (m: MouseXY) => {
    return {
      mountain: {
        backgroundPositionX: `calc(50% - ${ (m.x * 16) }px)`,
        backgroundPositionY: `calc(50% - ${ (m.y * 16) }px)`,
      },
      clouds: {
        backgroundPositionX: `calc(50% - ${ (m.x * 12) }px)`,
        backgroundPositionY: `calc(75% - ${ (m.y * 12) }px)`,
      },
      tree: {
        backgroundPositionX: `calc(25% - ${ (m.x * 8) }px)`,
        backgroundPositionY: `calc(110% - ${ (m.y * 8) }px)`,
      }
    }
  }
};