import { Tester } from '../Tester.js';
import { isHeaderDateValid } from './isHeaderDataValid.js';

const test = new Tester('Header');

test.excepted(isHeaderDateValid({}), false);
test.excepted(isHeaderDateValid([]), false);
test.excepted(isHeaderDateValid(), false);
test.excepted(isHeaderDateValid(null), false);
test.excepted(isHeaderDateValid('aaaaa'), false);
test.excepted(isHeaderDateValid(true), false);
test.excepted(isHeaderDateValid(false), false);
test.excepted(isHeaderDateValid(123), false);
test.excepted(isHeaderDateValid('a'), false);
test.excepted(isHeaderDateValid('abcdgetftfewhejwfwkweehhjwkewew'), false);
test.excepted(isHeaderDateValid('--'), false);
test.excepted(isHeaderDateValid('12488asa'), false);
test.excepted(isHeaderDateValid('object'), false);
test.excepted(isHeaderDateValid('string'), false);
test.excepted(isHeaderDateValid('null'), false);
test.excepted(isHeaderDateValid(-548), false);
test.excepted(isHeaderDateValid({ menuTitle: 125 }), false);
test.excepted(isHeaderDateValid({ menuTitle: 'Some text' }), false);
test.excepted(isHeaderDateValid({ menuTitle: 'Random1254' }), false);
test.excepted(isHeaderDateValid({ menuTitle: '1254' }), false);
test.excepted(isHeaderDateValid({ menuTitle: 'Name125Text' }), false);
test.excepted(isHeaderDateValid({ menuTitle: ['arr'] }), false);
test.excepted(isHeaderDateValid({ menuTitle: '$$$$' }), false);
test.excepted(isHeaderDateValid('$$$$'), false);
test.excepted(isHeaderDateValid(`dexter`), false);
test.excepted(isHeaderDateValid(125, `Reality`), false);
test.excepted(isHeaderDateValid(`Reality`, 745), false);
test.excepted(isHeaderDateValid({ menuTitle: 'asdasonufhuashfdsihbdjfsd' }), false);
test.excepted(isHeaderDateValid({ menuTitle: 'a' }), false);

test.excepted(isHeaderDateValid({ menuTitle: 'aaa' }), true);
test.excepted(isHeaderDateValid({ menuTitle: 'Random' }), true);
test.excepted(isHeaderDateValid({ menuTitle: `Zoro` }), true);
test.excepted(isHeaderDateValid({ menuTitle: `Zoro` }), true);

test.runTest();