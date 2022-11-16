import { newSpecPage } from '@stencil/core/testing';
import { PokemonAbility } from '../pokemon-ability';

describe('pokemon-ability', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokemonAbility],
      html: `<pokemon-ability></pokemon-ability>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-ability>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-ability>
    `);
  });
});
