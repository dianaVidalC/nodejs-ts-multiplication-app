import { CreateTable } from "./create-table.use-case"; 

describe("CreateTableUseCase", () => {
    test("should create table with default values", () => {
        const createTable = new CreateTable();
        const table = createTable.execute({ base: 3 });
        const rows = table.split('\n').length;

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain("3 x 1 = 3");
        expect(table).toContain("3 x 5 = 15");
        expect(rows).toBe(10); // Verificar que se generaron 10 filas
    });
    test("should create table with custom values", () => {
        const options = { base: 3, limit: 20 };
        const createTable = new CreateTable(); //Sujeto de prueba
        const table = createTable.execute(options);
        const rows = table.split('\n').length;

        expect(rows).toBe(options.limit); // Verificar que se generaron 20 filas
        expect(table).toContain("3 x 1 = 3");
        expect(table).toContain("3 x 10 = 30");
        expect(table).toContain("3 x 20 = 60");
    });
});