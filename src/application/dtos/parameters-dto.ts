import {PulumiConfigDto} from './pulumi-config-dto';

export type ParametersDto = {
  stackName: string;
} & PulumiConfigDto;
