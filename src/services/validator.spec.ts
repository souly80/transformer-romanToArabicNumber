import {Transformer} from './transformer';
import {Validator} from './validator';

describe('validate romans nummerals', () => {
  let validator: Validator;
  beforeEach(() => {
    validator = new Validator();
  })
  it('Input null -> should be false', () => {
    expect(validator.validateRomanNumber(null)).toBe(false);
  });
  it('Input empty -> should be false', () => {
    expect(validator.validateRomanNumber('')).toBe(false);
  });
  it('Input X -> should be true', () => {
    expect(validator.validateRomanNumber('X')).toBe(true);
  });
  it('Input IX -> should be true', () => {
    expect(validator.validateRomanNumber('X')).toBe(true);
  });

  it('Input Xx -> should be false', () => {
    expect(validator.validateRomanNumber('Xx')).toBe(false);
  });
});
