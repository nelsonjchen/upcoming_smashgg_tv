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
upcoming_container_element.style.zoom = "1.4"


var page_selector = document.querySelector('.pagination.pointer') as HTMLElement
page_selector.parentElement!.style.display = 'none'

var options_selector = document.querySelector('.pane-body')!.firstElementChild! as HTMLElement;
options_selector.style.display = 'none'

var branding_bar = document.createElement("div");
branding_bar.style.zIndex = "11000";
branding_bar.style.height = "100px";
branding_bar.style.width = "100%";
branding_bar.style.position = "fixed";
branding_bar.style.bottom = "0";
branding_bar.style.backgroundColor = "black";
branding_bar.style.position = "fixed";
branding_bar.style.display = "flex";
branding_bar.style.justifyContent = "center";
branding_bar.style.alignItems = "center";

var smashgg_bracket_link = document.createElement('span');
var bracket_title = document.querySelector('[title="Select Event"]')! as HTMLElement;
bracket_title.innerText
smashgg_bracket_link.innerHTML = "Brackets at <u>smash.gg/FAST</u><br/>" + bracket_title.innerText;
smashgg_bracket_link.style.color = "white";
smashgg_bracket_link.style.fontSize = "35px";
smashgg_bracket_link.style.padding = "0 20px";

var smashgg_logo = document.createElement('img');
smashgg_logo.src = "https://downloads.intercomcdn.com/i/o/80413437/7cb9f1e1b4c44bf38a36163a/5pYrME79koQZAcMZeLzTIz0mdcuwMU71agM-qbv3-1VsijJLxLqLQa_s642_nyNyQ_VaUf7f11IBxpUFt4WuNphIEQtJaYjezzF04OxwpBEy3XmdR5KGdErqU_m2--_wjpi87fZk";
smashgg_logo.style.maxHeight = "100%";
var frank_and_sons_logo = document.createElement('img');
frank_and_sons_logo.src = "https://www.frankandsonshow.net/s/img/emotionheader.jpg?1484334698.940px.210px";
frank_and_sons_logo.style.maxHeight = "100%";
var sponsor_logo = document.createElement('img');
sponsor_logo.style.height = "100%";
sponsor_logo.style.objectFit = "cover";
sponsor_logo.style.objectPosition = "0px -370px";
sponsor_logo.style.width = "552px";
sponsor_logo.src = "https://www.frankandsonshow.net/s/cc_images/teaserbox_902556915.jpg";

branding_bar.appendChild(smashgg_logo);
branding_bar.appendChild(smashgg_bracket_link);
branding_bar.appendChild(frank_and_sons_logo);
branding_bar.appendChild(sponsor_logo);

document.body.appendChild(branding_bar);

var intercom_element = document.querySelector('#intercom-container')! as HTMLElement; intercom_element.style.display = 'none'


function zoomTo(match_label: string,   manual = true) {
  let upper_match_label = match_label.toUpperCase();
  let target_element = document.evaluate(
    `//*/span[text()=\'${upper_match_label}\'][@class='identifier-container']`,
    document, null, XPathResult.ANY_TYPE, null).iterateNext() as HTMLElement;
  if (manual) {
    console.log(`Navigating to ${upper_match_label}:`);
  }

  try {
    let match_element = target_element.parentElement!.parentElement!;
    match_element.scrollIntoView(
      { behavior: "smooth", block: "center", inline: "center" }
    );
    if (manual) {
      console.log(`Navigated to ${upper_match_label}: `, match_element);
    }

  } catch {
    if (manual) {
      console.error(`Couldn't navigate to ${upper_match_label}`)
    }
  }

}
