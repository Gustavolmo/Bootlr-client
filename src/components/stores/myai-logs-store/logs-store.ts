import { createStore } from '@stencil/store';
import { apiUrl } from '../../../http-definitions/endpoints';

export const logsStore = createStore({
  logNewVisitor: async () => {
    const URL = apiUrl().bootlrLogVisitor;
    await fetch(URL);
  },

  logProductClick: async () => {
    const URL = apiUrl().bootlrLogProductClick;
    await fetch(URL);
  },
});

export const { state: logState } = logsStore;
