import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);
// console.log(yarg.b);

(async() => {
    await main();
    // console.log('Main function executed');
})();

async function main() {
    // console.log('Main function');
    const { b:base, l:limit, s:showTable, n:name, d:destination} = yarg;
    ServerApp.run({ base, limit, showTable, name, destination });
}