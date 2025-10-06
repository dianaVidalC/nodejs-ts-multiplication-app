import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /**}
         * repositorio donde se va guardar el archivo
         */
    ) { }

    execute({ fileContent, fileDestination = 'outputs', fileName='table' }: Options): boolean {
        try {
            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            console.log(`El archivo se ha guardado en ${fileDestination}/${fileName}.txt`);
            return true;

        } catch (error) {
            console.log('No se pudo guardar el archivo');
            return false;
        }

    }
}
