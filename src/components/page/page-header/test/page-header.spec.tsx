import { newSpecPage } from '@stencil/core/testing';
import { PageHeader } from '../page-header';

describe('page-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageHeader],
      html: `<page-header></page-header>`,
    });
    expect(page.root).toEqualHtml(`
      <page-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-header>
    `);
  });
});
