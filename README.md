# INFERNO — Standalone Command Core

INFERNO is separated from JARVIS-WEB so its interface and command engine run independently. The JARVIS repository is not included, modified, or required as a page shell.

## Start

- Open the GitHub Pages site after Pages is enabled for this repository, or serve the repository root with a static web server.
- Select **IGNITE INFERNO** to open the cinematic HUD.
- Use **⚙ Settings** to configure an OpenRouter key and model.
- Use **🎙 Wake Word** to enable or disable voice recognition. The microphone button on the HUD also toggles the listener.
- Type a command in the bottom console and press **Execute**. Use `show capabilities` to list the registered capabilities.

## Capability routing and task execution

INFERNO exposes a 200-entry capability catalogue and includes browser-side execution handlers for supported website handoffs and web search, local arithmetic, local date/time, reading the current page, scrolling, back navigation, browser-local notes, clipboard copy (when permitted), execution history, and in-page reminders. Settings also provides explicit microphone/camera/location/notification permission requests, optional service configuration fields, and a local contact vault with device contact selection where supported, CSV import/export, local saving, and a call handoff that opens the device dialer for the user to confirm. Commands outside the local handlers are passed to the existing capability router and configured OpenRouter model.

Try commands such as `open GitHub`, `search for orbital mechanics`, `calculate (12 + 8) * 3`, `what time is it`, `save note: inspect the reactor`, `list notes`, `read this page`, `scroll to bottom`, `copy mission ready`, `set reminder in 2 minutes to check telemetry`, and `show execution log`.

**Important reality check:** the catalogue is not proof that all 200 tasks are independently integrated and flawless. A static browser app cannot silently control a phone/PC, make calls, send messages, upload files, inspect arbitrary camera images, or access private accounts without the corresponding API/module, permissions, and sometimes explicit confirmation. Those tasks are routed to available integrations or AI assistance and should report blockers rather than claim success. Browser reminders require the page to remain open. For secure production use, move the OpenRouter key behind a server-side proxy; a browser-stored key is accessible to scripts running on this origin.

## OpenRouter setup

1. Open **Settings** and paste your OpenRouter API key.
2. Choose a model supported by your account; `openrouter/free` is the default selection.
3. Save and test a reasoning command such as `Explain why satellites stay in orbit`.

The key is stored in this browser's local storage on the INFERNO site. It is not committed to this repository. Treat browser-stored keys as accessible to scripts running on this same origin; for a public production deployment, use a server-side proxy instead. A key from JARVIS-WEB's origin is not automatically shared with INFERNO because browser storage is isolated by origin.

## Wake word

The browser may require a secure context (HTTPS or localhost) and microphone permission. Say **“Inferno”**, **“Hey Inferno”**, or **“Hello Inferno”**, then speak a command; you can also say the wake phrase and command together. Recognition availability varies by browser/device. If unavailable, use the text console.

## Files

- `index.html` — standalone launch screen and HUD controls
- `inferno-core.js` — cinematic Inferno HUD, voice, and command handoff
- `inferno-capabilities.js` — capability registry, settings, diagnostics, and AI routing
- `LICENSE` — MIT license carried over from the existing project

## Status

Capabilities are considered operational only to the extent their local implementation or configured service is available. Check the diagnostics panel and browser console if a specific command fails.
