import * as pulumi from '@pulumi/pulumi';

import {AppController} from './app-controller';
import {ParametersDto} from './dtos/parameters-dto';
import {PulumiConfigDto} from './dtos/pulumi-config-dto';

export class AppFactory {
  static make(): AppController {
    const config = new pulumi.Config().requireObject<PulumiConfigDto>(
      'parameters'
    );

    const stackName = `MY-PROJECT-${config.name}`;

    const parameters: ParametersDto = {...config, stackName};

    const app = new AppController(parameters);

    return app;
  }
}
