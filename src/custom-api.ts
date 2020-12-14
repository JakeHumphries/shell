import { PiralPlugin } from 'piral-core';

export interface CustomPiletApiType {
  foo(): string;
}

// eslint-disable-next-line quotes
declare module 'piral-core/lib/types/custom' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PiletCustomApi extends CustomPiletApiType {}
}

const createCustomApi = (): PiralPlugin<CustomPiletApiType> => () => ({
  foo() {
    return `hello`;
  },
});

export default createCustomApi;
