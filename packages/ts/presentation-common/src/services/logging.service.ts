export abstract class LoggingService {
  abstract debug(...args: any[]): void;
  abstract info(...args: any[]): void;
  abstract warn(...args: any[]): void;
  abstract error(...args: any[]): void;
}
