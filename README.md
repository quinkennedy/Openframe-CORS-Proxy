# Openframe-CORS-Proxy

This is an [Openframe][1] _hardware_ extension which adds a CORS proxy to your openframe. The proxy will by started by Openframe and be accessible to your artworks via `https://localhost:8425/`

Because this extension uses a self-signed certificate, if accessing this proxy from a website artwork you will need to add the `--allow-insecure-localhost` chromium flag. You can do this by adding a _config_ property to your artwork like so: `"config":{"flags":"--allow-insecure-localhost"}`

This extension is a wrapper for [cors-anywhere][2]. Reference that module's documentation for usage details.

## installation

Install this extension by running `openframe -i openframe-cors-proxy` on your Openframe computer.

[1]: http://openframe.io/
[2]: https://www.npmjs.com/package/cors-anywhere
