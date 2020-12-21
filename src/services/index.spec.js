// importamos la funcion que vamos a testear
import { Cadastrar } from './index';

describe('myFunction', () => {
  it('should be a function', () => {
    expect(typeof Cadastrar).toBe('function');
  });
});
