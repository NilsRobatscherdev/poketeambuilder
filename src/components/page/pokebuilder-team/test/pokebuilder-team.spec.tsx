import { newSpecPage } from '@stencil/core/testing';
import { PokebuilderTeam } from '../pokebuilder-team';

describe('pokebuilder-team', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokebuilderTeam],
      html: `<pokebuilder-team></pokebuilder-team>`,
    });
    expect(page.root).toEqualHtml(`
      <pokebuilder-team>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokebuilder-team>
    `);
  });
});
