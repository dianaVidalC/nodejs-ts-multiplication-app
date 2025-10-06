//Orquesta como va funcionar la aplicación de entrada

import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base        : number;
    limit       : number;
    showTable   : boolean;
    name        : string;
    destination : string;
}

export class ServerApp {
    static run({base, limit, showTable, name, destination }: RunOptions) {
        console.log('Server running...');
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            fileDestination: destination,
            fileName: name,
        });
        if (showTable) {
            // console.log('====================');
            // console.log(`Tabla del ${base}`);
            // console.log('====================');
            console.log(table);
        }
        if (wasCreated) {
            console.log('File created successfully');
        } else {
            console.log('Error creating file');
        }
    }
}