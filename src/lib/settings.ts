/**
 * This is a library of all of the settings used in the website
 */
import { NavigationItem } from './types';

// Global stuff
export const siteName: string =                 'Arthur Guo \'s Website';
export const siteRoot: string =                 '';
export const siteFooterText: string =           'Website designed by Arthur (Hypernova) Guo - 2021';
export const siteNavigation: NavigationItem =   { list: [
  ['Home', siteRoot + '/'],
  ['About Me', siteRoot + '/about'],
  ['Projects', siteRoot + '/projects'],
  ['Experiences', siteRoot + '/about'],
  ['Contact', siteRoot + '/contact']
] };

// Home page
export const homeSettings: { [key: string]: string } = {
  title:              'Hi! My name is Arthur (ChengAn) Guo! I am a developer!',
  buttonText:         'Who I am exactly?',
  buttonUrl:          '/about',
  landerImg:          '/resources/img/mountain-base.jpg',
};