import { newSpecPage } from '@stencil/core/testing';
import { BattleConditions } from '../battle-conditions';

describe('battle-conditions', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BattleConditions],
      html: `<battle-conditions></battle-conditions>`,
    });
    expect(page.root).toEqualHtml(`
      <battle-conditions>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </battle-conditions>
    `);
  });
});
