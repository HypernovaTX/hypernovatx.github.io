/**
 * This is a library of all of the interfaces used in this project
 */

// Use: top side navigation menu items
// { list: [string (name), string (url)][] }
export interface NavigationItem { list: [string, string][] };
export interface XY { x: number, y: number };
export interface contactForms { name: string, email: string, phone: string, company: string, message: string };
export interface contactErr { name: number, email: number, phone: number, company: number, message: number, recaptcha: number };