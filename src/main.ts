import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setConsumerData, ConsumerData } from '@bento/bento-ng';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
/**
 * Consumer Data to be provided by the Bento NG consumer
 *
 * Please provide the Asset ID for your TR Product Group.
 * Your Asset ID can be found at: https://assets.int.thomsonreuters.com/Products
 *
 * */
 const consumerData: ConsumerData = {
  assetId: 123456 // Your six digit Asset ID
};
/**
 * Call the function to push up the data
 **/
setConsumerData(consumerData);
document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
});
