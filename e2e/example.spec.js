import {element, by} from 'detox';

describe('Example Test', () => {
  it('has no coffee', async () => {
    await expect(element(by.text('Pizza'))).toBeVisible();
  });
});
