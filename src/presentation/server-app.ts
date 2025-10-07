//Orquesta como va funcionar la aplicación de entrada

import { CreateTable } from "../domain/use-cases/create-table.use-case.js";
import { SaveFile } from "../domain/use-cases/save-file.use-case.js";

export interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileDestination: string;
    fileName: string;
}

export class ServerApp {
    static run({ base, limit, showTable, fileName, fileDestination }: RunOptions) {
        console.log('Server running...');
        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            fileDestination,
            fileName,
        });
        if (showTable) {
            // console.log('====================');
            // console.log(`Tabla del ${base}`);
            // console.log('====================');
            console.log(table);
        }
        (wasCreated) ? console.log('File created successfully') : console.log('Error creating file');
    }
}