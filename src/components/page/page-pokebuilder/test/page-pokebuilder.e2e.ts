import { newE2EPage } from '@stencil/core/testing';

describe('page-pokebuilder', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-pokebuilder></page-pokebuilder>');

    const element = await page.find('page-pokebuilder');
    expect(element).toHaveClass('hydrated');
  });
});
