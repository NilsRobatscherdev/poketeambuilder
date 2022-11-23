import { newE2EPage } from '@stencil/core/testing';

describe('pokebuilder-team', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokebuilder-team></pokebuilder-team>');

    const element = await page.find('pokebuilder-team');
    expect(element).toHaveClass('hydrated');
  });
});
