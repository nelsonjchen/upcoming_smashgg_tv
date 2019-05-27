# Frank and Son Smash.gg Bracket TV Tools and Toolkit

*Not for use on small 15 inch CRTs. Those are for the players.*

This is a script and/or toolkit to temporaily reformat the [smash.gg][smashgg]
bracket page (Example: https://smash.gg/tournament/frank-and-son-tournament-5/events/smash-ultimate-singles/brackets/591451/984236)
for big screen "Jumbotron" purposes.

To accomplish this, the brackets page is loaded, and then the Chrome Developer
Tools are popped out. The brackets page is full-sized to the Jumbotron and the
Developer Tools is left on the operator's display. The operator can smoothly
animate the scoreboard and focus on interesting portions of the bracket.

Additionally, branding can be installed behind or in front of the bracket. For
example, logo backgrounds may be inserted. These can be step and repeat patterns
or even animations. Further customization may be possible by overlaying CSS.

# Usage

## Compiling Setup

1. Clone repository
1. Ensure node is installed and run `npm install`.
1. `npm run build` to build the Typescript into Javascript
1. Copy the contents of `out/index.js` into the clipboard or a gist/pastebin, etc.

## Display Computer Setup

1. Ensure the computer and display setup meet the requirements:
    * 1920*1080 External Display for the public, most likely a TV or monitor
      * If it is a TV, ensure that the overscan settings are configured on the computer correctly so that the edges of the computer's screen aren't cut off by the TV.
      * 4K instructions unknown. Maybe just zoom 200% with browser?
    * Laptop Display can be anything.
    * Google Chrome is used.
    * Make sure you've disabled sleep stuff!

1. Go to a brackets page in Chrome such as one here:

    https://smash.gg/tournament/frank-and-son-tournament-4/events/smash-ultimate-singles/brackets/572815/959547

1. Right click somewhere and select *Inspect*.

1. If the Developer Tools are not undocked already, press (Ctrl Shift P) for PC or (Command Shift P) for Mac and type and select "Undock into separate window".

1. Move Developer Tools to Operator Window.

1. Full screen brackets page window to External Display. This is usually moving the brackets page window to the external display and pressing F11.

1. Select *Console* in the Developer Tools Window.

1. Paste and run the contents of `out/index.js` from the previous section of steps.

1. You will see a white screen. Run `m.A` to scroll to the "A" match in the bracket.

## Operator Usage

Specific commands for the bracket page will now be available in the Developer Tools console.

### Movement and settings

* `m.<matchID>` moves the view to the match in question.
  * Eg. `m.AG`  will move the view to the AG match.
  * Does not disable wander mode

#### Wander mode

Wander mode makes the board automatically wander against a list of preset matches in the bracket in a loop.

* `configureWanderList(<Array of Match IDs>)` will configure `wander()` to wander between nodes.
  * Eg. `configureWanderList(['A', 'AG', 'B'])` will wander from `A`, then `AG`, then `B`.
  * *Suggested Usage*: Configure Wander List to a series of matches along the third column going down evenly so all matches are shown.
* `wander_delay=<time in milliseconds>` sets the time in milliseconds before wander moves onto the next node. This defaults to `4000` milliseconds.
  * Eg. `wander_delay=6000` will set the delay to `6000` milliseconds
* `disableWander()` disables wander mode and deletes wander configuration
* `wander()` enables wander mode. **Only do this after `configureWanderList`!!**

# Development

Just notes.

* Run `npm run watch` and keep `index.js` open in another visble window or tab for easy copying to a developer console.
* Create a TV device in Chrome's Developer Tool with a 1920*1080 resolution.
* Ctrl/Cmd R refreshes a the page too from the Developer Tools.

# History

Made for [Frank and Son Collectible Show][frankandson] Smash Tournaments.

[smashgg]: https://smash.gg/
[frankandson]: https://www.frankandsonshow.net/
