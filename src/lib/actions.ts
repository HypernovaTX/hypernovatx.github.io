import { mobileDevice } from "./settings";

// This is used for global actions
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

export function formatPhoneText(value: string): string {
  value = value.replace(/[^0-9\b]/g, '').substring(0, 10);
  
  if (value.length > 3 && value.length <= 6) {
      value = value.slice(0,3) + "-" + value.slice(3);
  } else if (value.length > 6) {
      value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);
  }
  return value;
}

export function isMobile(): boolean {
  if (mobileDevice.test(navigator.userAgent)) { return true }
  return false;
}