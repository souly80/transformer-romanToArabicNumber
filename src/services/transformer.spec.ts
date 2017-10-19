import {Transformer} from './transformer';
import {ITransformer} from './transformer.service';

describe('convert romans nummerals', () => {
  let transformer: ITransformer;
  beforeEach(() => {
    transformer = new Transformer();
  })
  it('should be null', () => {
    expect(transformer.romanToArabic(null)).toBeNull();
  });
  it('should be null', () => {
    expect(transformer.romanToArabic('')).toBeNull();
  });
  it('should return a number', () => {
    transformer.romanToArabic('X').subscribe(result => {
      expect(result).toEqual(10);
    });
    transformer.romanToArabic('LX').subscribe(result => {
      expect(result).toEqual(60);
    });
    transformer.romanToArabic('IVDCLX').subscribe(result => {
      expect(result).toEqual(654);
    });
  });
});
