# INFERNO — Standalone Command Core

INFERNO is separated from JARVIS-WEB so its interface and command engine run independently. The JARVIS repository is not included, modified, or required as a page shell.

## Start

- Open the GitHub Pages site after Pages is enabled for this repository, or serve the repository root with a static web server.
- Select **IGNITE INFERNO** to open the cinematic HUD.
- Use **⚙ Settings** to configure an OpenRouter key and model.
- Use **🎙 Wake Word** to enable or disable voice recognition. The microphone button on the HUD also toggles the listener.
- Type a command in the bottom console and press **Execute**. Use `show capabilities` to list the registered capabilities.

## Capability routing and honest limits

The current capability engine registers the 200-feature Inferno catalogue from the original project. Commands are routed to local browser functionality first when a suitable local handler exists; reasoning, drafting, research, planning, and analysis can use the configured OpenRouter model. Browser navigation uses browser handoff, not privileged operating-system control.

Some capability names describe bridges or plans rather than self-contained device functions. Vision/OCR needs an image/vision integration; microphone access needs browser support and permission; calls, messages, uploads, and calendar integrations need their relevant service, authorization, and explicit confirmation. A static build does not mean every external integration has been tested on every device.

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
