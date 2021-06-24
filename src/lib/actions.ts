import { mobileDevice } from "./settings";

/**
 * Use the change the site's URL
 * @param {string} link - The URL the router is changing to 
 * @returns {void}
 */
export function changeRoute(link: string): void {
  if (window.inTransition) { return; }
  window.inTransition = true;
  window.startT();
  // Put a delay so the page changes according to the transition
  setTimeout( () => {
    window.mobileMenu = false;
    window.location.href = link;
    setTimeout( () => window.scroll(0, 0), 10);
  }, 600);
}

/**
 * Format the phone number format to: xxx-xxx-xxxx
 * @param {string} value - The raw value of the phone number
 * @returns {string}
 */
export function formatPhoneText(value: string): string {
  value = value.replace(/[^0-9\b]/g, '').substring(0, 10);
  
  if (value.length > 3 && value.length <= 6) {
      value = value.slice(0,3) + "-" + value.slice(3);
  } else if (value.length > 6) {
      value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);
  }
  return value;
}

/**
 * Determine whether it is on mobile or not (via display or device kind)
 * @param {boolean} display - (optional) Check on the display rather than the device kind
 * @returns {boolean}
 */
export function isMobile(display: boolean = false): boolean {
  if (display) {
    if (window.innerWidth <= 800) { return true; }
    return false;
  }
  if (mobileDevice.test(navigator.userAgent)) { return true; }
  return false;
}