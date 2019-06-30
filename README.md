# Frank and Son Smash.gg Upcoming Matches TV Tools and Toolkit

*Not for use on small 15 inch CRTs. Those are for the players.*

This is a script and/or toolkit to temporaily reformat the Smash.gg
Upcoming/Ongoing Matches interface for jumbotron purposes

Additionally, branding is installed behind or in front of the bracket. For
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
    * Make sure you've disabled sleep/screensaver stuff!

1. Login to smash.gg. The page is only accessible to logged-in users.

1. Go to the match dashboard page.

1. Right click somewhere and select *Inspect*.

1. If the Developer Tools are not undocked already, press (Ctrl Shift P) for PC or (Command Shift P) for Mac and type and select "Undock into separate window".

1. Move Developer Tools to Operator Window.

1. Full screen brackets page window to External Display. This is usually moving the brackets page window to the external display and pressing F11.

1. Select *Console* in the Developer Tools Window.

1. Paste and run the contents of `out/index.js` from the previous section of steps.

1. You will see a white screen. Run `m.A` to scroll to the "A" match in the bracket.

## Operator Usage

Specific commands for the page will now be available in the Developer Tools console.

# Development

Just notes.

* Run `npm run watch` and keep `index.js` open in another visble window or tab for easy copying to a developer console.
* Create a TV device in Chrome's Developer Tool with a 1920*1080 resolution.
* Ctrl/Cmd R refreshes a the page too from the Developer Tools.

# History

Made for [Frank and Son Collectible Show][frankandson] Smash Tournaments.

[smashgg]: https://smash.gg/
[frankandson]: https://www.frankandsonshow.net/
