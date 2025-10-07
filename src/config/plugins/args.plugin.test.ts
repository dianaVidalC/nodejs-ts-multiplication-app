import { jest } from '@jest/globals';

const runCommnand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];
    const { yarg } = await import('./args.plugin');

    return yarg;
}

describe('Test args.plugin.ts', () => {
    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    })
    test('should return default values', async () => {
        //Preparar ambiente, comandos
        const argv = await runCommnand(['-b', '5']);

        // expect(argv).toEqual(expect.objectContaining({
        //     b: 5,
        //     l: 10,
        //     s: false,
        //     n: 'multiplication-table',
        //     d: 'outputs',
        // }))
        expect(argv.b).toBe(5);
        expect(argv.l).toBe(10);
        expect(argv.s).toBe(false);
        expect(argv.n).toBe('table');
        expect(argv.d).toBe('outputs');
    })
    test('should return configuration with custom values', async () => {
        const argv = await runCommnand(['-b', '10', '-l', '8', '-s', '-n', 'file', '-d', 'outputs']);

        expect(argv.b).toBe(10);
        expect(argv.l).toBe(8);
        expect(argv.s).toBe(true);
        expect(argv.n).toBe('file');
        expect(argv.d).toBe('outputs');
    })
})