import { newE2EPage } from '@stencil/core/testing';

describe('pokemon-ability', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokemon-ability></pokemon-ability>');

    const element = await page.find('pokemon-ability');
    expect(element).toHaveClass('hydrated');
  });
});
