import { newSpecPage } from '@stencil/core/testing';
import { PokemonDetail } from '../pokemon-detail';

describe('pokemon-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokemonDetail],
      html: `<pokemon-detail></pokemon-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-detail>
    `);
  });
});
