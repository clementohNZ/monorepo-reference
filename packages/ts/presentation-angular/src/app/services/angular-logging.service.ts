import { Injectable } from "@angular/core";
import { LoggingService } from "@clementohnz/presentation-common";

export enum LoggingColor {
  GREY = `#bababa`,
  BLUE = `#4fc1ff`,
  ORANGE = `#ffb04f`,
  RED = `#d8494a`,
}

export enum LoggingType {
  DEBUG = `COMPOSER - Debugging`,
  INFO = `COMPOSER - Information`,
  WARNING = `COMPOSER - Warning`,
  CRITICAL = `COMPOSER - Critical`,
}

@Injectable()
export class AngularLoggingService implements LoggingService {
  public debugLogger = AngularLoggingService.generateLogger(LoggingType.DEBUG);
  public infoLogger = AngularLoggingService.generateLogger(
    LoggingType.INFO,
    LoggingColor.BLUE,
  );
  public warningLogger = AngularLoggingService.generateLogger(
    LoggingType.WARNING,
    LoggingColor.ORANGE,
  );
  public errorLogger = AngularLoggingService.generateLogger(
    LoggingType.CRITICAL,
    LoggingColor.RED,
  );

  /**
   * Higher-order function used to generate loggers with their respective styles.
   *
   * @param type - the type of error. This does not need to match the methods available on DOM {@link Console}
   * @param color - {@link LoggingColor}
   */
  public static generateLogger(
    type: LoggingType,
    color: LoggingColor = LoggingColor.GREY,
  ): (...thingsToLog: any[]) => void {
    return console.log.bind(null, `%c${type}`, this.generateStyle(color));
  }

  /**
   * Generates style that wraps {@link LoggingType} in the console
   * @param color - {@link LoggingColor}
   */
  public static generateStyle(color: LoggingColor): string {
    // 10/10/2019 - issue inserting enum directly into return string. Have to place in variable first.
    const convertedColor = `${color}`;
    return `padding:0.2em 0.4em;border-radius:1.5em;background-color:${convertedColor};font-weight:600;color:#333`;
  }

  debug(...args: any[]): void {
    this.debugLogger(...args);
  }

  info(...args: any[]): void {
    this.infoLogger(...args);
  }

  warn(...args: any[]): void {
    this.warningLogger(...args);
  }

  error(...args: any[]): void {
    this.errorLogger(...args);
  }
}
