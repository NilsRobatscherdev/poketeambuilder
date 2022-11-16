import { newE2EPage } from '@stencil/core/testing';

describe('pokemon-moves', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokemon-moves></pokemon-moves>');

    const element = await page.find('pokemon-moves');
    expect(element).toHaveClass('hydrated');
  });
});
