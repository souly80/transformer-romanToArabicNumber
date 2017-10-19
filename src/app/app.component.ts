import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Transformer} from '../services/transformer';
import {Validator} from '../services/validator';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public errerText: string;
  public title: string;
  @ViewChild('inputBox')
  inputBoox: ElementRef;
  public arabicNumber: string;
  public  valid: boolean;
  constructor(private transformer: Transformer, private validator: Validator) {
    this.valid = true;
    this.errerText = 'only roman letters are allowed!';
    this.title = 'services roman numerals to arabic number';
  }

  ngOnInit(): void {
    const source = Observable.fromEvent(this.inputBoox.nativeElement, 'keyup')
      .map((event: any) => event.target.value)
      // .debounceTime(1000)
      // .distinctUntilChanged()
      .subscribe((romanNumber: string) => this.convert(romanNumber));
  }

  private convert(romanNumber: string): void {
    this.valid = true;
    if (!romanNumber) {
      this.clearResult();
      return;
    }
    if (!this.validator.validateRomanNumber(romanNumber)) {
      this.valid = false;
      this.clearResult();
    } else {
      this.transformer.romanToArabic(romanNumber)
         .subscribe((result: number) => this.arabicNumber = result.toString());
    }
  }

  private clearResult(): void {
    this.arabicNumber = '';
  }
}
