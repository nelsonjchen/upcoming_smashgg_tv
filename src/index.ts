// Hide Intercom Element
let intercom_element = document.querySelector('.intercom-app')! as HTMLElement;
intercom_element.style.display = "none";


// Grab Scrollable Bracket Element
let bracket_container_element = document.querySelector('.native-scroll.dragscroll')! as HTMLElement;

bracket_container_element.style.backgroundColor = "white";
bracket_container_element.style.position = "fixed";
bracket_container_element.style.top = "0";
bracket_container_element.style.left = "0";
bracket_container_element.style.height = "100%";
bracket_container_element.style.width = "100%";
bracket_container_element.style.zIndex = "9999";
bracket_container_element.style.zoom = "250%";

let container_children = bracket_container_element.childNodes[0]! as HTMLElement;
container_children.style.width = "4096px";
container_children.style.height = "4096px";
container_children.style.paddingLeft = "1024px";
container_children.style.paddingTop = "1024px";

function zoomTo(match_label: string) {
  let upper_match_label = match_label.toUpperCase();
  let target_element = document.evaluate(`//*/span[text()=\'${upper_match_label}\']`,
    document, null, XPathResult.ANY_TYPE, null).iterateNext() as HTMLElement;
  let match_element = target_element.parentElement!.parentElement!;
  match_element.scrollIntoView(
    { behavior: "smooth", block: "center", inline: "center" }
  );
}

const m = new Proxy({},
  {
    get: (_obj, prop) => {
      zoomTo(prop as string)
    }
  }
)

