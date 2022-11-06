import { newE2EPage } from '@stencil/core/testing';

describe('page-pokedex', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-pokedex></page-pokedex>');

    const element = await page.find('page-pokedex');
    expect(element).toHaveClass('hydrated');
  });
});
