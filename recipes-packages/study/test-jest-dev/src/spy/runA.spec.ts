import { run1, run2, run3 } from './runA';
import * as Func from './moduleFunction';

describe('함수 spy 테스트', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('return0 는 1', () => {
        jest.spyOn(Func, 'return0').mockReturnValue(1);
        expect(run1()).toBe(1);
    });
    it('return0 는 0', () => {
        expect(run1()).toBe(0);
    });
});

describe('값 spy 테스트', () => {
    beforeEach(() => {
        jest.resetModules();
    });
    it('spy 사용 const 0는 0, require', () => {
        jest.doMock('./moduleConst', () => ({ constNum: 1, constStr: 'str' }));
        const { run2: r2, run3: r3 } = require('./runA');
        expect(r2()).toBe(1);
        expect(r3()).toBe('str');
    });
    it.skip('spy 사용 const 0는 0', () => {
        jest.doMock('./moduleConst', () => ({ constNum: 1, constStr: 'str' }));
        expect(run2()).toBe(1);
        expect(run3()).toBe('str');
    });
    it('const 0는 0', () => {
        expect(run2()).toBe(0);
        expect(run3()).toBe('');
    });
});
