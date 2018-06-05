"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
function copyFile(inPath, outPath) {
    fs_1.writeFileSync(outPath, fs_1.readFileSync(inPath));
}
function build() {
    const rootDir = path_1.dirname(__dirname);
    const outputDir = __dirname;
    // Read package.json
    let packageContents = JSON.parse(fs_1.readFileSync(path_1.join(rootDir, `package.json`), 'utf8'));
    packageContents.version = packageContents.version.replace(/-dev/g, ''); // Remove "-dev" from the version number
    packageContents.private = false; // Make it publishable
    packageContents.main = packageContents.main.replace(/dist\//g, ''); // Reference this from the root of the publish directory
    packageContents.types = packageContents.types.replace(/dist\//g, ''); // Reference this from the root of the publish directory
    // Write it out to the publishing directory
    fs_1.writeFileSync(path_1.join(outputDir, `package.json`), JSON.stringify(packageContents, null, 2)); // NOTE: this file will have LF line endings
    // Copy some other files to publish into the publishing directory
    const filesToCopy = [
        '.npmignore',
        'README.md'
    ];
    for (const fileToCopy of filesToCopy) {
        copyFile(path_1.join(rootDir, fileToCopy), path_1.join(outputDir, fileToCopy));
    }
}
if (require.main === module) {
    build();
}
