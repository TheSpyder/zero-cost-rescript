#!/usr/bin/env node
//@ts-check
const fs = require("fs");
const cp = require('child_process')
const { readdirSync } = fs;

const path = require("path");
const src = path.join(__dirname, "src");

console.time("bundle complete");
(async () => {
    const entryPoints = readdirSync(src)
        .filter(f => f.endsWith(`.mjs`))
        .map(f => path.join(src, f));

    // Start the esbuild child process
    const { startService } = require('esbuild');
    const service = await startService();
    try {
        // build all entry points
        await service.build({
            target: "es2020",
            bundle: true,
            minifySyntax: true,
            sourcemap: false,
            logLevel: "info",
            define: {
                ["process.env.NODE_ENV"]: "'production'"
            },
            entryPoints,
            outdir: src,
            outExtension: {
                ".js": ".bundle.js"
            }
        });
    } finally {
        service.stop();
        console.timeEnd("bundle complete");
    }
})()