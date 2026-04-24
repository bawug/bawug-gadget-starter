# bawug-gadget-starter

A minimal **MediaWiki gadget**: a user script packaged so that anyone on the wiki can enable it from `Special:Preferences` → *Gadgets*.

## Gadget vs. user script

User scripts (see `bawug-userscript-starter`) live in your personal `common.js` and only run for you.

Gadgets are the same kind of code — JavaScript and CSS — but stored in the **`MediaWiki:`** namespace and listed in `MediaWiki:Gadgets-definition`. Once defined, every logged-in editor can enable the gadget from their preferences. Some gadgets can even be configured to run by default for all readers.

Editing the `MediaWiki:` namespace requires *interface admin* (or *administrator*, depending on the wiki). For development, run a local MediaWiki or use the [Beta Cluster](https://en.wikipedia.beta.wmflabs.org).

## What this gadget does

Adds a colored banner at the top of every article saying "Hello from bawug-gadget-starter on **{Page Title}**." Skinned with a tiny bit of CSS so you can see both halves of the gadget system in one place.

## Files

| File                         | Wiki page                                     |
|------------------------------|-----------------------------------------------|
| `Gadget-HelloStarter.js`     | `MediaWiki:Gadget-HelloStarter.js`            |
| `Gadget-HelloStarter.css`    | `MediaWiki:Gadget-HelloStarter.css`           |
| `Gadget-HelloStarter.json`   | `MediaWiki:Gadget-HelloStarter`               |
| `Gadgets-definition.txt`     | append the line to `MediaWiki:Gadgets-definition` |

## Install (on a wiki where you have interface-admin rights)

1. Create `MediaWiki:Gadget-HelloStarter.js` with the contents of `Gadget-HelloStarter.js`.
2. Create `MediaWiki:Gadget-HelloStarter.css` with the contents of `Gadget-HelloStarter.css`.
3. Create `MediaWiki:Gadget-HelloStarter` with the contents of `Gadget-HelloStarter.json` — this is the gadget's i18n / metadata page.
4. Edit `MediaWiki:Gadgets-definition` and append the line from `Gadgets-definition.txt`. The format is:

   ```
   * GadgetName[options|resourceLoader|requires=...]|file1.js|file2.css
   ```

5. Visit `Special:Preferences` → *Gadgets*, tick **bawug-gadget-starter: hello banner**, save, then reload an article.

## Going further

- [Help:Gadgets](https://www.mediawiki.org/wiki/Help:Gadgets) — full options reference.
- [Extension:Gadgets](https://www.mediawiki.org/wiki/Extension:Gadgets) — how the system is implemented.
- For the next level, see [Gadgets 2.0 / GadgetDefinitionContent](https://www.mediawiki.org/wiki/Extension:Gadgets/Gadgets_2.0).
