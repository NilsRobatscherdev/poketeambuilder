import { newSpecPage } from '@stencil/core/testing';
import { BerriesCard } from '../berries-card';

describe('berries-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BerriesCard],
      html: `<berries-card></berries-card>`,
    });
    expect(page.root).toEqualHtml(`
      <berries-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </berries-card>
    `);
  });
});
