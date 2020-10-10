import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'liredit',
        debug: !__prod__,
        type: "postgresql"
    });

    console.log("hello world");
}

main();