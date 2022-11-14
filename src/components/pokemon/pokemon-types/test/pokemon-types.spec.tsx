import { newSpecPage } from '@stencil/core/testing';
import { PokemonTypes } from '../pokemon-types';

describe('pokemon-types', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokemonTypes],
      html: `<pokemon-types></pokemon-types>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-types>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-types>
    `);
  });
});
