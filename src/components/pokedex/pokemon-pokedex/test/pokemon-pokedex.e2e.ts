import { newE2EPage } from '@stencil/core/testing';

describe('pokemon-pokedex', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokemon-pokedex></pokemon-pokedex>');

    const element = await page.find('pokemon-pokedex');
    expect(element).toHaveClass('hydrated');
  });
});
