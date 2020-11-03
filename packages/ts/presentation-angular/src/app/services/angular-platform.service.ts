import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { Inject, Injectable, InjectionToken, PLATFORM_ID } from "@angular/core";
import { PlatformService } from "@clementohnz/presentation-common";

@Injectable()
export class AngularPlatformService implements PlatformService {
  constructor(
    @Inject(PLATFORM_ID) protected platformId: InjectionToken<Object>,
  ) {}

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}
