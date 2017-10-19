
import {Observable} from 'rxjs/Observable';

export abstract class ITransformer {
  public abstract romanToArabic(romanNumber: string): Observable<number>;
}

