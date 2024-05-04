import { type JSX } from '@stencil/core';

export { Components, JSX } from './components';
export type ComponentTagNames = keyof JSX.IntrinsicElements;
export type GetComponentProperties<ComponentTag extends ComponentTagNames> = JSX.IntrinsicElements[ComponentTag];

//import '@stencil-community/router';
