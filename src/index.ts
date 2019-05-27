// Hide Intercom Element
var intercom_element = document.querySelector('.intercom-app')! as HTMLElement;
intercom_element.style.display = "none";


// Grab Scrollable Bracket Element
var bracket_container_element = document.querySelector('.native-scroll.dragscroll')! as HTMLElement;

bracket_container_element.style.backgroundColor = "white";
bracket_container_element.style.position = "fixed";
bracket_container_element.style.top = "0";
bracket_container_element.style.left = "0";
bracket_container_element.style.height = "100%";
bracket_container_element.style.width = "100%";
bracket_container_element.style.zIndex = "9999";
bracket_container_element.style.zoom = "1.5"

var container_children = bracket_container_element.childNodes[0]! as HTMLElement;
container_children.style.width = "4096px";
container_children.style.height = "4096px";
container_children.style.paddingLeft = "1024px";
container_children.style.paddingTop = "1024px";

// Grab Headers
var bracket_headers = document.querySelectorAll<HTMLElement>('.bracket-content > div > div > div:first-child')

bracket_headers.forEach((bracket_header) => {
  bracket_header.style.position = 'sticky';
  bracket_header.style.top = '0';
  bracket_header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  bracket_header.style.zIndex = '10000';
  bracket_header.style.boxShadow = 'rgba(255, 255, 255, 0.95) -20px 0px 0px 0px, rgba(255, 255, 255, 0.95) 20px 0px 0px 0px'
})

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
smashgg_bracket_link.innerHTML = "Brackets at <u>smash.gg/FAST</u>";
smashgg_bracket_link.style.color = "white";
smashgg_bracket_link.style.fontSize = "55px";
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
sponsor_logo.src = "https://www.frankandsonshow.net/s/cc_images/teaserbox_902369372.jpg";

branding_bar.appendChild(smashgg_logo);
branding_bar.appendChild(smashgg_bracket_link);
branding_bar.appendChild(frank_and_sons_logo);
branding_bar.appendChild(sponsor_logo);

document.body.appendChild(branding_bar);

function zoomTo(match_label: string, manual = true) {
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

var m_proto: { [key: string]: null } = {};

for (const char of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  m_proto[char] = null
}

for (const char of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  for (const char_2 of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    m_proto[char + char_2] = null
  }
}

var m = new Proxy(m_proto,
  {
    get: (_obj, prop) => {
      zoomTo(prop as string)
    }
  }
)

function matchIdToInt(match_label: string): number {
  let number = 0
  if (match_label.length == 1) {
    number = match_label.charCodeAt(0) - 65
    return number
  } else {
    let larger_number = ((match_label.charCodeAt(0) - 65) + 1) * 26;
    let smaller_number = match_label.charCodeAt(1) - 65;
    return larger_number + smaller_number
  }
}

function intToMatchId(match_id: number): string {
  if (match_id < 26)
    return String.fromCharCode(match_id + 65)
  else {
    let larger_letter = String.fromCharCode((match_id / 26) + 65 - 1)
    let smaller_letter = String.fromCharCode((match_id % 26) + 65)
    return larger_letter + smaller_letter
  }
}

// Wander Zoom

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false }
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true }
    }
  };
  return rangeIterator;
}

function makeRangeCycleIterator(start = 0, end = Infinity, step = 1) {
  let innerRangeIterator = makeRangeIterator(start, end, step)
  const cycleIterator = {
    next: function () {
      let result;
      result = innerRangeIterator.next()
      if (result.done) {
        innerRangeIterator = makeRangeIterator(start, end, step)
      }
      return result
    }
  }
  return cycleIterator
}

function makeMatchListCycleIterator(matchIds: Array<string> = []) {
  let index = 0;

  const rangeIterator = {
    next: function () {
      let result = { value: matchIdToInt(matchIds[index]), done: false };
      index += 1;
      if (index == matchIds.length) {
        index = 0;
      }
      return result;
    }
  };
  return rangeIterator;
}

var wander_delay = 2500;
var wander_iterator: { next: () => { value: number; done: boolean; }; } | null = null;

function configureWander(from_match_id: string, to_match_id: string) {
  wander_iterator = makeRangeCycleIterator(
    matchIdToInt(from_match_id),
    matchIdToInt(to_match_id)
  );
}

function configureWanderList(matchIdList: string[]) {
  wander_iterator = makeMatchListCycleIterator(matchIdList);
}

function disableWander() {
  wander_iterator = null;
}

function wander() {
  setTimeout(function () {
    if (wander_iterator != null) {
      let match_id_int = wander_iterator.next().value
      zoomTo(intToMatchId(match_id_int), false);
      wander();
    }
  }, wander_delay);
}
