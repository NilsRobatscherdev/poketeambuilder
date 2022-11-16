import { newE2EPage } from '@stencil/core/testing';

describe('pokemon-attributes', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokemon-attributes></pokemon-attributes>');

    const element = await page.find('pokemon-attributes');
    expect(element).toHaveClass('hydrated');
  });
});
