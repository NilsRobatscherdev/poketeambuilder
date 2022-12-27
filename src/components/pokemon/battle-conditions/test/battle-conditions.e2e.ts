import { newE2EPage } from '@stencil/core/testing';

describe('battle-conditions', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<battle-conditions></battle-conditions>');

    const element = await page.find('battle-conditions');
    expect(element).toHaveClass('hydrated');
  });
});
