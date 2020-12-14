import { PiralPlugin } from 'piral-core';

export interface CustomPiletApiType {
  /**
   * Gets the currently valid access token, if any.
   */
  foo(): string;
}

// eslint-disable-next-line quotes
declare module 'piral-core/lib/types/custom' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PiletCustomApi extends CustomPiletApiType {}
}

/**
 * Creates new Pilet API extensions for the integration of OAuth 2.0.
 */
// function createTestAuthApi(): PiralPlugin<TestAuthApiType> {
//   return context =>
//   // context.on('before-fetch', client.extendHeaders);

//     ({
//       foo() {
//         return `hello!`;
//       },
//     });
// }

const createTestAuthApi = (): PiralPlugin<CustomPiletApiType> => () => ({
  foo() {
    return `hello`;
  },
});

export default createTestAuthApi;
