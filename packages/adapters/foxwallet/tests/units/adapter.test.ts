import { FoxWalletAdapter } from '../../src/index.js';

window.open = jest.fn();
beforeEach(function () {
    jest.useFakeTimers();
    global.document = window.document;
    global.navigator = window.navigator;
    window.tronLink = undefined;
    window.tron = undefined;
});
describe('FoxWalletAdapter', function () {
    describe('#adapter()', function () {
        test('constructor', () => {
            const adapter = new FoxWalletAdapter();
            expect(adapter.name).toEqual('FoxWallet');
            expect(adapter).toHaveProperty('icon');
            expect(adapter).toHaveProperty('url');
            expect(adapter).toHaveProperty('readyState');
            expect(adapter).toHaveProperty('address');
            expect(adapter).toHaveProperty('connecting');
            expect(adapter).toHaveProperty('connected');

            expect(adapter).toHaveProperty('connect');
            expect(adapter).toHaveProperty('disconnect');
            expect(adapter).toHaveProperty('signMessage');
            expect(adapter).toHaveProperty('signTransaction');

            expect(adapter).toHaveProperty('on');
            expect(adapter).toHaveProperty('off');
        });
    });
});