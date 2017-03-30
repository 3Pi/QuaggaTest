"use strict";

import { platformBrowserDynamic  }    from '@angular/platform-browser-dynamic';

import {AppModule} from './ng_components/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, []);
