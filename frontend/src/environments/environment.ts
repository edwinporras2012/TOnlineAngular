// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Consumos:
  API_BACKEND_PRODUCT: "http://localhost:3000/api/products",
  API_BACKEND_PRODUCT_CATEGORY: "http://localhost:3000/api/catg-product",
  API_BACKEND_CATEGORY: "http://localhost:3000/api/categories/",
  ALL_CATEGORIES: 'http://localhost:4200/products',
  API_BACKEND_USER: "http://localhost:3000/api/users",
  
  //Assets:
  ASSETS_IMG: "http://localhost:4200/assets/category/",
  firebaseConfig: {
    apiKey: "AIzaSyDH3wi5sf4vtto7KAi1ryvGvmkENpV6lnA",
    authDomain: "ecommerce-d0c2a.firebaseapp.com",
    projectId: "ecommerce-d0c2a",
    storageBucket: "ecommerce-d0c2a.appspot.com",
    messagingSenderId: "791255899908",
    appId: "1:791255899908:web:668b67aa04d27cbd487a51",
    measurementId: "G-8N28MENKFH"
  },  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
