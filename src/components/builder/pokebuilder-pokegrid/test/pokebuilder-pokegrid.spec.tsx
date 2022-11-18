import { newSpecPage } from '@stencil/core/testing';
import { PokebuilderPokegrid } from '../pokebuilder-pokegrid';

describe('pokebuilder-pokegrid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokebuilderPokegrid],
      html: `<pokebuilder-pokegrid></pokebuilder-pokegrid>`,
    });
    expect(page.root).toEqualHtml(`
      <pokebuilder-pokegrid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokebuilder-pokegrid>
    `);
  });
});
