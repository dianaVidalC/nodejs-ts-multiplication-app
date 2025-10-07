import { yarg } from "./config/plugins/args.plugin.js";
import { ServerApp } from "./presentation/server-app.js";

// console.log(process.argv);
// console.log(yarg.b);

(async() => {
    await main();
    // console.log('Main function executed');
})();

async function main() {
    // console.log('Main function');
    const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination} = yarg;
    ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}