/* eslint @typescript-eslint/no-empty-function: 0 */ // --> OFF
/* eslint @typescript-eslint/explicit-function-return-type: 0 */ // --> OFF

import { NgModule } from "@angular/core";
import { AngularEnvironmentService } from "./angular-environment.service";
import { AngularLoggingService } from "./angular-logging.service";
import { AngularPlatformService } from "./angular-platform.service";

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    AngularEnvironmentService,
    AngularLoggingService,
    AngularPlatformService,
  ],
})
export class ServicesModule {}
