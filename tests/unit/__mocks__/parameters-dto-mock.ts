import {faker} from '@faker-js/faker';

import {ParametersDto} from '../../../src/application/dtos/parameters-dto';

export const ParametersDtoMock: ParametersDto = {
  stackName: faker.datatype.string(),
  name: faker.datatype.string(),
};
