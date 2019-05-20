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
bracket_container_element.style.zoom = "200%";

var container_children = bracket_container_element.childNodes[0]! as HTMLElement;
container_children.style.width = "4096px";
container_children.style.height = "4096px";
container_children.style.paddingLeft = "1024px";
container_children.style.paddingTop = "1024px";

function zoomTo(match_label: string) {
  let upper_match_label = match_label.toUpperCase();
  let target_element = document.evaluate(
    `//*/span[text()=\'${upper_match_label}\'][@class='identifier-container']`,
    document, null, XPathResult.ANY_TYPE, null).iterateNext() as HTMLElement;
  let match_element = target_element.parentElement!.parentElement!;
  console.log(`Navigating to ${upper_match_label}: `, match_element);
  match_element.scrollIntoView(
    { behavior: "smooth", block: "center", inline: "center" }
  );
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

var wander_delay = 1000;
var wander_iterator: { next: () => { value: number; done: boolean; }; } | null = null;

function setupWander(from_match_id: string, to_match_id: string) {
  wander_iterator = makeRangeCycleIterator(
    matchIdToInt(from_match_id),
    matchIdToInt(to_match_id)
  );
  wander();
}

function disableWander() {
  wander_iterator = null;
}

function wander() {
  setTimeout(function () {
    if (wander_iterator != null) {
      let match_id_int = wander_iterator.next().value
      zoomTo(intToMatchId(match_id_int));
      wander();
    }
  }, wander_delay);
}
