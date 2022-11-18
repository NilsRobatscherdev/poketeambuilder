import { newSpecPage } from '@stencil/core/testing';
import { PokebuilderDetail } from '../pokebuilder-detail';

describe('pokebuilder-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokebuilderDetail],
      html: `<pokebuilder-detail></pokebuilder-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <pokebuilder-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokebuilder-detail>
    `);
  });
});
