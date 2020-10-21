import { Tester } from '../../Tester.js';
import { isHomeDataValid } from './isHomeDataValid.js';
import { isTestsOn } from '../../isTestsOn.js';

if (isTestsOn() == true) {
    const test = new Tester('Header');

    test.excepted(isHomeDataValid({}), false);
    test.excepted(isHomeDataValid([]), false);
    test.excepted(isHomeDataValid(), false);
    test.excepted(isHomeDataValid(null), false);
    test.excepted(isHomeDataValid('aaaaa'), false);
    test.excepted(isHomeDataValid(true), false);
    test.excepted(isHomeDataValid(false), false);
    test.excepted(isHomeDataValid(123), false);
    test.excepted(isHomeDataValid('a'), false);
    test.excepted(isHomeDataValid('abcdgetftfewhejwfwkweehhjwkewew'), false);
    test.excepted(isHomeDataValid('--'), false);
    test.excepted(isHomeDataValid('12488asa'), false);
    test.excepted(isHomeDataValid('object'), false);
    test.excepted(isHomeDataValid('string'), false);
    test.excepted(isHomeDataValid('null'), false);
    test.excepted(isHomeDataValid(-548), false);
    test.excepted(isHomeDataValid({ textPrinted: 125 }), false);
    test.excepted(isHomeDataValid({ textPrinted: 'Random1254' }), false);
    test.excepted(isHomeDataValid({ textPrinted: '1254' }), false);
    test.excepted(isHomeDataValid({ textPrinted: 'Name125Text' }), false);
    test.excepted(isHomeDataValid({ textPrinted: ['arr'] }), false);
    test.excepted(isHomeDataValid({ textPrinted: '$$$$' }), false);
    test.excepted(isHomeDataValid('$$$$'), false);
    test.excepted(isHomeDataValid(`dexter`), false);
    test.excepted(isHomeDataValid(125, `Reality`), false);
    test.excepted(isHomeDataValid(`Reality`, 745), false);
    test.excepted(isHomeDataValid({ textPrinted: 'asdasonufhuashfdsihbdjfsd' }), false);
    test.excepted(isHomeDataValid({ textPrinted: 'a' }), false);

    test.excepted(isHomeDataValid({ textPrinted: 'aaa' }), true);
    test.excepted(isHomeDataValid({ textPrinted: 'Random' }), true);
    test.excepted(isHomeDataValid({ textPrinted: `Zoro` }), true);
    test.excepted(isHomeDataValid({ textPrinted: `Zoro` }), true);
    test.excepted(isHomeDataValid({ textPrinted: 'Some text' }), true);

    test.runTest();
}