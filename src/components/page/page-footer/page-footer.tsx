import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-footer',
  styleUrl: 'page-footer.scss',
  shadow: true,
})
export class PageFooter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
