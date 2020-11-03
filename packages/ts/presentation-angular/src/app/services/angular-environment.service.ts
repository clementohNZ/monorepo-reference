import { Injectable } from "@angular/core";
import { EnvironmentService } from "@clementohnz/presentation-common";
import { environment } from "../../environments/environment";

@Injectable()
export class AngularEnvironmentService implements EnvironmentService {
  isProduction(): boolean {
    return environment.production;
  }

  getEnvironmentName(): string {
    return environment.name;
  }
}
