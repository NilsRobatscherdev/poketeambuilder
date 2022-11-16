import { newE2EPage } from '@stencil/core/testing';

describe('berries-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<berries-card></berries-card>');

    const element = await page.find('berries-card');
    expect(element).toHaveClass('hydrated');
  });
});
