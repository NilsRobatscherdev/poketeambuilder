import { newSpecPage } from '@stencil/core/testing';
import { PokemonAttributes } from '../pokemon-attributes';

describe('pokemon-attributes', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokemonAttributes],
      html: `<pokemon-attributes></pokemon-attributes>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-attributes>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-attributes>
    `);
  });
});
