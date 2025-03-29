import { calculateReturn } from '../calculateReturn/calculateReturn';

describe('calculateReturn', () => {
  test('calculates a positive return correctly', () => {
    expect(calculateReturn(150, 100)).toBe(50);
  });

  test('calculates a negative return correctly', () => {
    expect(calculateReturn(80, 100)).toBe(-20);
  });

  test('returns 0 when lastPrice and closePrice are equal', () => {
    expect(calculateReturn(100, 100)).toBe(0);
  });

  test('handles closePrice of 0 gracefully', () => {
    expect(calculateReturn(100, 0)).toBe(Infinity);
  });

  test('handles lastPrice of 0 correctly', () => {
    expect(calculateReturn(0, 100)).toBe(-100);
  });
});
