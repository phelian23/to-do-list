import Task from '../tasks.js';
import add from '../__mocks__/addRemove.js';

jest.mock('../__mocks__/addRemove');

describe('Add or Remove item', () => {
  test('Add an item to list', () => {
    expect(()=>add('something').length).toBe(1);
  });
});