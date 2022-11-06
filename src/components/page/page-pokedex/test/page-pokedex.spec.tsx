import { newSpecPage } from '@stencil/core/testing';
import { PagePokedex } from '../page-pokedex';

describe('page-pokedex', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PagePokedex],
      html: `<page-pokedex></page-pokedex>`,
    });
    expect(page.root).toEqualHtml(`
      <page-pokedex>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-pokedex>
    `);
  });
});
