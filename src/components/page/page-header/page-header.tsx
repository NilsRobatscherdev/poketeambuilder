import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-header',
  styleUrl: 'page-header.scss',
  shadow: true,
})
export class PageHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
