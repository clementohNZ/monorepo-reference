import { ErrorHandler, Injectable } from "@angular/core";
import * as Sentry from "@sentry/browser";
import { Severity } from "@sentry/browser";
import { Event, EventHint } from "@sentry/types/dist/event";
import { AngularEnvironmentService } from "../../services/angular-environment.service";
import { AngularLoggingService } from "../../services/angular-logging.service";

/**
 * Inits Sentry browser SDK with proper environment configuration
 * In case you want to push messages for development purposes,
 * ensure manually that dsn is pointed properly and environment is `development`
 * @param environmentService to bring specific environment data
 */
export const initSentry = (environmentService: AngularEnvironmentService) => {
  return (): void => {
    const dsn = environmentService.isProduction()
      ? `https://48f99cea317a4f9d9c015be25e9943f2@sentry.io/1308464`
      : ``;
    Sentry.init({
      dsn,
      environment: environmentService.getEnvironmentName(),
      maxValueLength: 9999,
      /**
       * Sentry sometimes mark an event as a 'Non-Error exception'
       * and groups all of those errors together. This Makes debugging
       * hard because unique errors are grouped under a non-unifying parent.
       *
       * This workaround found on:
       * https://github.com/getsentry/sentry-react-native/issues/391 attempts
       * to alleviate most occurrences of this issue by bubbling up the actual
       * exception.
       */
      beforeSend(
        event: Event,
        hint?: EventHint,
      ): PromiseLike<Event | null> | Event | null {
        if (
          event.message &&
          event.message.startsWith(`Non-Error exception captured`) &&
          hint &&
          hint.originalException instanceof Error
        ) {
          Sentry.withScope((scope) => {
            scope.setUser({ email: this.getUserEmail() });
            scope.setExtra(`nonErrorException`, true);
            Sentry.captureException(hint.originalException);
          });
          return null;
        }
        return event;
      },
    });
    console.log(
      `Sentry initialized with environment:` +
        environmentService.getEnvironmentName(),
    );
  };
};

/**
 * This class gives us custom error handling in Angular.
 *
 * It currently logs errors in a formatted way and only sends
 * data to Sentry in a production environment to:
 *  1. reduce noise locally
 *  2. reduce Sentry API calls that factor affect plan costs
 *
 * The sentry instance will also send the environment where the
 * error was logged to make it easier to:
 *  1. debug specific environment
 *  2. setup alerting for specific environments only so there are no false
 *     alarms
 */
@Injectable()
export class SentryErrorLogger implements ErrorHandler {
  constructor(
    private environmentService: AngularEnvironmentService,
    private logger: AngularLoggingService,
  ) {}

  /**
   * Sends logs to Logger & Sentry (level: error)
   * @param error object
   */
  handleError(error: any): void {
    this.logger.error(error);
    if (this.environmentService.isProduction()) {
      Sentry.captureException(error.originalError || error);
    }
  }

  /**
   * Sends logs to Logger & Sentry (level: warning)
   * @param warning message
   */
  handleWarning(warning: any): void {
    this.logger.warn(warning);
    if (this.environmentService.isProduction()) {
      Sentry.captureMessage(warning, Severity.Warning);
    }
  }
}
