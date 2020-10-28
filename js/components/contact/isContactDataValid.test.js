import { Tester } from '../Tester.js';
import { isContactDataValid } from './isContactDataValid.js';
import { isTestsOn } from '../../isTestsOn.js';


if (isTestsOn() == true) {
    const test = new Tester('Services');

test.excepted(isContactDataValid({}), false);
test.excepted(isContactDataValid([]), false);
test.excepted(isContactDataValid(), false);
test.excepted(isContactDataValid(null), false);
test.excepted(isContactDataValid('aaaaa'), false);
test.excepted(isContactDataValid(true), false);
test.excepted(isContactDataValid(false), false);
test.excepted(isContactDataValid(123), false);
test.excepted(isContactDataValid('a'), false);
test.excepted(isContactDataValid('abcdgetftfewhejwfwkweehhjwkewew'), false);
test.excepted(isContactDataValid('--'), false);
test.excepted(isContactDataValid('12488asa'), false);
test.excepted(isContactDataValid('object'), false);
test.excepted(isContactDataValid('string'), false);
test.excepted(isContactDataValid('null'), false);
test.excepted(isContactDataValid(-548), false);
test.excepted(isContactDataValid({ title: 125 }), false);
test.excepted(isContactDataValid({ title: 'Some text' }), false);
test.excepted(isContactDataValid({ title: 'Random1254' }), false);
test.excepted(isContactDataValid({ title: '1254' }), false);
test.excepted(isContactDataValid({ title: 'Name125Text' }), false);
test.excepted(isContactDataValid({ title: ['arr'] }), false);
test.excepted(isContactDataValid({ title: '$$$$' }), false);
test.excepted(isContactDataValid('$$$$'), false);
test.excepted(isContactDataValid(`dexter`), false);
test.excepted(isContactDataValid(125, `Reality`), false);
test.excepted(isContactDataValid(`Reality`, 745), false);
test.excepted(isContactDataValid({ title: 'asdasonufhuashfdsihbdjfsd' }), false);
test.excepted(isContactDataValid({ title: 'a' }), false);

test.excepted(isContactDataValid({ title: 'aaa' }), true);
test.excepted(isContactDataValid({ title: 'Random' }), true);
test.excepted(isContactDataValid({ title: `Zoro` }), true);
test.excepted(isContactDataValid({ title: `Zoro` }), true);

test.runTest();
}