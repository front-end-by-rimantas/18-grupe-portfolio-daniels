import { Tester } from '../Tester.js';
import { isServicesDataValid } from './isServicesDataValid.js';

const test = new Tester('Services');

test.excepted(isServicesDataValid({}), false);
test.excepted(isServicesDataValid([]), false);
test.excepted(isServicesDataValid(), false);
test.excepted(isServicesDataValid(null), false);
test.excepted(isServicesDataValid('aaaaa'), false);
test.excepted(isServicesDataValid(true), false);
test.excepted(isServicesDataValid(false), false);
test.excepted(isServicesDataValid(123), false);
test.excepted(isServicesDataValid('a'), false);
test.excepted(isServicesDataValid('abcdgetftfewhejwfwkweehhjwkewew'), false);
test.excepted(isServicesDataValid('--'), false);
test.excepted(isServicesDataValid('12488asa'), false);
test.excepted(isServicesDataValid('object'), false);
test.excepted(isServicesDataValid('string'), false);
test.excepted(isServicesDataValid('null'), false);
test.excepted(isServicesDataValid(-548), false);
test.excepted(isServicesDataValid({ title: 125 }), false);
test.excepted(isServicesDataValid({ title: 'Some text' }), false);
test.excepted(isServicesDataValid({ title: 'Random1254' }), false);
test.excepted(isServicesDataValid({ title: '1254' }), false);
test.excepted(isServicesDataValid({ title: 'Name125Text' }), false);
test.excepted(isServicesDataValid({ title: ['arr'] }), false);
test.excepted(isServicesDataValid({ title: '$$$$' }), false);
test.excepted(isServicesDataValid('$$$$'), false);
test.excepted(isServicesDataValid(`dexter`), false);
test.excepted(isServicesDataValid(125, `Reality`), false);
test.excepted(isServicesDataValid(`Reality`, 745), false);
test.excepted(isServicesDataValid({ title: 'asdasonufhuashfdsihbdjfsd' }), false);
test.excepted(isServicesDataValid({ title: 'a' }), false);

test.excepted(isServicesDataValid({ title: 'aaa' }), true);
test.excepted(isServicesDataValid({ title: 'Random' }), true);
test.excepted(isServicesDataValid({ title: `Zoro` }), true);
test.excepted(isServicesDataValid({ title: `Zoro` }), true);

test.runTest();