import { newE2EPage } from '@stencil/core/testing';

describe('pokemon-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokemon-detail></pokemon-detail>');

    const element = await page.find('pokemon-detail');
    expect(element).toHaveClass('hydrated');
  });
});
