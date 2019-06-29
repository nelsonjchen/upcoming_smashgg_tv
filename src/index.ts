// Arguments
// --remote-debugging-port=9222
// Note non-headless remote control needs
// https://stackoverflow.com/a/26886625/286021

// Grab Content Element
var upcoming_container_element = document.querySelector('#content > div > div > div > div > div > div > div:nth-child(2) > div.flex-pane-container > div.flex-pane-main.scroller-pane') as HTMLElement;


upcoming_container_element.style.backgroundColor = "white";
upcoming_container_element.style.position = "fixed";
upcoming_container_element.style.top = "0";
upcoming_container_element.style.left = "0";
upcoming_container_element.style.height = "100%";
upcoming_container_element.style.width = "100%";
upcoming_container_element.style.zIndex = "9999";
upcoming_container_element.style.zoom = "1.5"


var page_selector = document.querySelector('.pagination.pointer') as HTMLElement
page_selector.parentElement!.style.display = 'none'

var options_selector = document.querySelector('.pane-body')!.firstElementChild! as HTMLElement;
options_selector.style.display = 'none'
