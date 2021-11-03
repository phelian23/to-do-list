import Task from '../tasks.js';

jest.mock('../addRemove');

describe('Add or Remove item', () => {
  test('Add an item to list', () => {
    expect(Task.addTask('something').length).toBe(1);
  });
});