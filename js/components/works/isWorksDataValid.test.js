import { Tester } from '../../Tester.js';
import { isWorksDataValid } from './isWorksDataValid.js';
import { isTestsOn } from '../../isTestsOn.js';

if (isTestsOn() == true) {
    const test = new Tester('Works');

    test.excepted(isWorksDataValid({}), false);
    test.excepted(isWorksDataValid([]), false);
    test.excepted(isWorksDataValid(), false);
    test.excepted(isWorksDataValid(null), false);
    test.excepted(isWorksDataValid('aaaaa'), false);
    test.excepted(isWorksDataValid(true), false);
    test.excepted(isWorksDataValid(false), false);
    test.excepted(isWorksDataValid(123), false);
    test.excepted(isWorksDataValid('a'), false);
    test.excepted(isWorksDataValid('abcdgetftfewhejwfwkweehhjwkewew'), false);
    test.excepted(isWorksDataValid('--'), false);
    test.excepted(isWorksDataValid('12488asa'), false);
    test.excepted(isWorksDataValid('object'), false);
    test.excepted(isWorksDataValid('string'), false);
    test.excepted(isWorksDataValid('null'), false);
    test.excepted(isWorksDataValid(-548), false);
    test.excepted(isWorksDataValid({ textPrinted: 125 }), false);
    test.excepted(isWorksDataValid({ textPrinted: 'Random1254' }), false);
    test.excepted(isWorksDataValid({ textPrinted: '1254' }), false);
    test.excepted(isWorksDataValid({ textPrinted: 'Name125Text' }), false);
    test.excepted(isWorksDataValid({ textPrinted: ['arr'] }), false);
    test.excepted(isWorksDataValid({ textPrinted: '$$$$' }), false);
    test.excepted(isWorksDataValid('$$$$'), false);
    test.excepted(isWorksDataValid(`dexter`), false);
    test.excepted(isWorksDataValid(125, `Reality`), false);
    test.excepted(isWorksDataValid(`Reality`, 745), false);
    test.excepted(isWorksDataValid({ textPrinted: 'asdasonufhuashfdsihbdjfsd' }), false);
    test.excepted(isWorksDataValid({ textPrinted: 'a' }), false);

    test.excepted(isWorksDataValid({ textPrinted: 'aaa' }), true);
    test.excepted(isWorksDataValid({ textPrinted: 'Random' }), true);
    test.excepted(isWorksDataValid({ textPrinted: `Zoro` }), true);
    test.excepted(isWorksDataValid({ textPrinted: `Zoro` }), true);
    test.excepted(isWorksDataValid({ textPrinted: 'Some text' }), true);

    test.runTest();
}