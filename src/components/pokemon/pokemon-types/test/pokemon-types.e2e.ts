import { newE2EPage } from '@stencil/core/testing';

describe('pokemon-types', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokemon-types></pokemon-types>');

    const element = await page.find('pokemon-types');
    expect(element).toHaveClass('hydrated');
  });
});
