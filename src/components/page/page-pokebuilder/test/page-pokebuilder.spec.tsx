import { newSpecPage } from '@stencil/core/testing';
import { PagePokebuilder } from '../page-pokebuilder';

describe('page-pokebuilder', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PagePokebuilder],
      html: `<page-pokebuilder></page-pokebuilder>`,
    });
    expect(page.root).toEqualHtml(`
      <page-pokebuilder>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-pokebuilder>
    `);
  });
});
