export class RomanSymbols {
  public static get symbols(): Map<string, number> {
    const map = new Map<string, number>();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    map.set('_V_', 5000);
    map.set('_X_', 10000);
    map.set('_L', 50000);
    map.set('_C_', 100000);
    map.set('_D_', 500000);
    map.set('_M_', 1000000);
    return map;
  }
}
