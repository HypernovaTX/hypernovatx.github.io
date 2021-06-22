// This is used for global actions
export function changeRoute(url: string): void {
  window.scrollTo(0, 0);
  window.location.href = url;
}
