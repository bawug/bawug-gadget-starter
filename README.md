# bawug-gadget-starter

A minimal **MediaWiki gadget**: a user script packaged so that anyone on the wiki can enable it from `Special:Preferences` → *Gadgets*.

## Gadget vs. user script

User scripts (see [`bawug-userscript-starter`](https://github.com/bawug/bawug-userscript-starter/)) live in your personal `common.js` and only run for you.

Gadgets are the same kind of code — JavaScript and CSS — but stored in the **`MediaWiki:`** namespace and listed in `MediaWiki:Gadgets-definition`. Once defined, every logged-in editor can enable the gadget from their preferences. Some gadgets can even be configured to run by default for all readers. **NOTE**: This is the `MediaWiki:` namespace, even on English Wikipedia.

Editing the `MediaWiki:` namespace requires *interface admin*. For development, run a local MediaWiki or use the [Beta Cluster](https://en.wikipedia.beta.wmflabs.org).

## Why choose a gadget over a user script?

1. **Reach.** A user script only reaches users who have manually pasted it (or a one line loader for it) into their own `common.js`. A gadget can be made available wiki-wide as an opt-in checkbox in Preferences, or even default-on for everyone, so it can change the experience without each adopter touching their JS.
2. **Anonymous readers.** User scripts only load for logged-in users, since they live under your `User:` page. A gadget can be configured to load for logged-out readers too, which matters because drive-by traffic far outpaces logged-in traffic on Wikipedia.
3. **CSS.** A user script is JavaScript-only. You can inject styles from JS, but you can't ship a stylesheet. Gadgets package `.css` files as first-class assets alongside their JS.
4. **Discoverability.** Gadgets appear in `Special:Preferences` with a name and description, so anyone browsing settings can find and enable them. User scripts only exist if someone tells you about them and you copy code into your `common.js` by hand.
5. **Packaging.** Gadgets are first-class ResourceLoader modules, with all the metadata that implies: declared dependencies, multi-file bundles, skin and platform targets (`targets=desktop,mobile`), namespace restrictions, rights gating (`rights=patrol`), and package modules with a `main` entry point. Anything beyond a single self-contained file pushes a user script toward awkward workarounds.
6. **Performance.** Gadgets load through the same ResourceLoader pipeline as MediaWiki core — cached, minified, and batched into the page's startup modules. User scripts run later in the page lifecycle and aren't optimized the same way.
7. **Review and trust.** Promotion to a gadget goes through interface-admin gating, and on most projects a community proposal step. That's friction by design: code that runs in every reader's browser deserves a higher review bar than code only you have installed.

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

- [Extension:Gadgets](https://www.mediawiki.org/wiki/Extension:Gadgets) — full options reference and how the system is implemented.
- For the next level, see [Gadgets 2.0 / GadgetDefinitionContent](https://www.mediawiki.org/wiki/Extension:Gadgets/Gadgets_2.0).
