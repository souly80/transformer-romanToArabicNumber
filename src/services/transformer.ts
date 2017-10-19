import {ITransformer} from './transformer.service';
import {Injectable} from '@angular/core';
import {RomanSymbols} from './romanSymbols';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Transformer implements ITransformer {

  public romanToArabic(input: string): Observable<number> {
    if (!input) {
      return null;
    }
    const romanNumbers = input.split('');
    const arabicNumbers = romanNumbers.map((rn: string) => RomanSymbols.symbols.get(rn));
    let result = arabicNumbers[arabicNumbers.length - 1];
    for (let i = 0; i < arabicNumbers.length; i++) {
      const numberB = arabicNumbers[arabicNumbers.length - 1 - i];
      let numberA = 0;
      let operator: Operator = Operator.Added;
      if (arabicNumbers.length - 2 - i >= 0) {
        numberA = arabicNumbers[arabicNumbers.length - 2 - i];
        operator = this.getOperator(numberA, numberB);
      }
      switch (operator) {
        case Operator.Added: {
          result += numberA;
          break;
        }
        case Operator.Subtracted: {
          result -= numberA;
          break;
        }
      }
    }
    return Observable.create(observer => {
      observer.next(result);
      observer.complete();
    });
  }

  private getOperator(numberA: number, numberB: number): Operator {
    if (numberA >= numberB) {
      return Operator.Added;
    } else {
      return Operator.Subtracted;
    }
  }

}

export enum Operator {
  Added,
  Subtracted
}
