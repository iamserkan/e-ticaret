// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig: {
  apiKey: "AIzaSyAiSFlRK2vltSC9NsKCjDOvvDdspiYuBDk",
  authDomain: "project-d59c2.firebaseapp.com",
  projectId: "project-d59c2",
  storageBucket: "project-d59c2.appspot.com",
  messagingSenderId: "520631047158",
  appId: "1:520631047158:web:db2410ba71dc124c96add7",
  measurementId: "G-HHN30X4EM7"
  }
};
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
