import { newE2EPage } from '@stencil/core/testing';

describe('pokebuilder-pokegrid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokebuilder-pokegrid></pokebuilder-pokegrid>');

    const element = await page.find('pokebuilder-pokegrid');
    expect(element).toHaveClass('hydrated');
  });
});
