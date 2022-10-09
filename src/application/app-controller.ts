import {ParametersDto} from './dtos/parameters-dto';

export class AppController {
  public main(): void {
    const {name} = this.parameters;

    console.log(name);
  }

  constructor(private readonly parameters: ParametersDto) {}
}
