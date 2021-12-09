/* eslint-disable no-console */
// import {execa} from 'execa';
const execa = require('execa');
const fs = require("fs");

(async () => {
    try {
        console.log("Building started...");
        await execa("npm", ["run", "build"]);
        // Understand if it's dist or build folder
        const folderName = fs.existsSync("dist") ? "dist" : "build";
        console.log("Adding " + folderName + "to repository...")
        await execa("git", ["add", "-f", folderName]);
        console.log("Committing gh-pages...")
        await execa("git", ["commit", "-m", "gh-pages"]);
        console.log("Pushing to gh-pages...");
        await execa("git", ["subtree", "push", "--prefix", folderName, "origin", "gh-pages"]);
        console.log("Removing " + folderName + "from repository...");
        await execa("git", ["rm", "-r", folderName]);
        console.log("Committing without dist...")
        await execa("git", ["commit", "-m", "remove_dist"]);
        console.log("Pushing repository...")
        await execa("git", ["push", "origin", "main"]);
        console.log("Successfully deployed, check your settings");
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
        process.exit(1);
    }
})();
