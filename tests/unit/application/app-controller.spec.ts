import {AppController} from '../../../src/application/app-controller';
import {ParametersDtoMock} from '../__mocks__/parameters-dto-mock';

describe('Given controller', () => {
  let controller: AppController;

  beforeEach(() => {
    controller = new AppController(ParametersDtoMock);
  });

  it('Should ...', () => {
    const result = controller.main();

    expect(result).toBeUndefined();
  });
});
