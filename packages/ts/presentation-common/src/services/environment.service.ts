export abstract class EnvironmentService {
  abstract isProduction(): boolean;
  abstract getEnvironmentName(): string;
}
