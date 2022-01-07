// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: false,
  version: env.npm_package_version + '-dev',
  serverUrl: '/api',
  apiUrl: 'http://gateway.marvel.com/v1/public/',
  apiKey: '5ccd95b695b3df3434f525d99e50cb62',
  key: '?ts=16185334990410&apikey=f819f3621f81dde7edc382743d93d41c&hash=968c51ae154e70c54a0d0dd4fb5f405d',
  envName: 'DEV',
  settings: {
    appErrorPrefix: '[Desafio Heroes Error] ',
    appTitle: 'Desafio Angular Heroes',
    version: '0.0.0',
    charactersLimit: 50
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
