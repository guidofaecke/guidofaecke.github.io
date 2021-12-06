/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
    try {
        console.log("Building started...");
        await execa("npm", ["run", "build"]);
        // Understand if it's dist or build folder
        const folderName = fs.existsSync("dist") ? "dist" : "build";
        await execa("git", ["add", "-f", folderName]);
        await execa("git", ["commit", "-m", "gh-pages"]);
        console.log("Pushing to gh-pages...");
        await execa("git", ["subtree", "push", "--prefix", folderName, "origin", "gh-pages"]);
        console.log("Successfully deployed, check your settings");
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
        process.exit(1);
    }
})();