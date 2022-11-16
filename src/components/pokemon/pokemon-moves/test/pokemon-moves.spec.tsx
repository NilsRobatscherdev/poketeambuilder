import { newSpecPage } from '@stencil/core/testing';
import { PokemonMoves } from '../pokemon-moves';

describe('pokemon-moves', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokemonMoves],
      html: `<pokemon-moves></pokemon-moves>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-moves>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-moves>
    `);
  });
});
