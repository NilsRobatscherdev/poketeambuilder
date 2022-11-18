import { newE2EPage } from '@stencil/core/testing';

describe('pokebuilder-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokebuilder-detail></pokebuilder-detail>');

    const element = await page.find('pokebuilder-detail');
    expect(element).toHaveClass('hydrated');
  });
});
