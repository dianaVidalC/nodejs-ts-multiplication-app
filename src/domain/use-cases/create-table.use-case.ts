export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor(
                /**
         * DI (Dependency Injection)
         * - Inyección de dependencias
         * - Principio de diseño que permite separar las responsabilidades de las clases
         * - Permite cambiar las implementaciones de las dependencias sin afectar la clase que las utiliza
         * - Facilita la creación de pruebas unitarias
         */
    ) {}

    execute({ base, limit=5 }: CreateTableOptions ){
        let outputMessage: string = '';
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base * i}\n`;
        }
        return outputMessage;
    }

}