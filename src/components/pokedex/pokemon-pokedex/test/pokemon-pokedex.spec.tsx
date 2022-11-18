import { newSpecPage } from '@stencil/core/testing';
import { PokemonPokedex } from '../pokemon-pokedex';

describe('pokemon-pokedex', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokemonPokedex],
      html: `<pokemon-pokedex></pokemon-pokedex>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-pokedex>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-pokedex>
    `);
  });
});
