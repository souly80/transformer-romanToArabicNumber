
import {Injectable} from '@angular/core';
import {RomanSymbols} from './romanSymbols';

@Injectable()
export  class Validator {
  public validateRomanNumber(input: string): boolean {
    if (!input) {
      return false;
    }
    const romanNumbers = input.split('');
    return romanNumbers
      .map((rn: string) => RomanSymbols.symbols.get(rn) !== undefined)
      .reduce((a, b) => a && b);
  }
}
