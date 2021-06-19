/**
 * This is a library of all of the settings used in the website
 */
import { NavigationItem } from './types';

// Global stuff
export const siteName: string =                 'Arthur Guo \'s Website';
export const siteFooterText: string =           'Website designed by Arthur (Hypernova) Guo - 2021';
export const siteNavigation: NavigationItem =   { list: [
  ['Home', '/'], ['About Me', '/about'], ['Projects', '/projects'], ['Experiences', '/about'], ['Contact', '/contact']
] };

// Home page
export const homeSettings: { [key: string]: string } = {
  title:              'Hi! My name is Arthur (ChengAn) Guo! I am a developer!',
  buttonText:         'Who I am exactly?',
  buttonUrl:          '/about',
};