export abstract class PlatformService {
  abstract isBrowser(): boolean;
  abstract isServer(): boolean;
}
