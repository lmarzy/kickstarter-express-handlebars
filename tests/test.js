import test from 'tape';
import titleCase from '../assets/js/titleCase';

const testCases = [
  {
    before: 'test one',
    after: 'Test One'
  },
  {
    before: 'testTwo',
    after: 'Testtwo'
  },
  {
    before: 123,
    after: 'Not a string'
  }
];

test( 'awesome test', function ( t ) {
  t.equal(titleCase(testCases[0].before), testCases[0].after);
  t.end();
});
