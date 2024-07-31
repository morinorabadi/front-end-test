design an form for getting four inputs

1. height1
2. height2
3. width
4. slope

notes

1. height2 is always bigger than height1
2. slope = (height2 - height1) / width

tasks

1. style ro component with given UI/UX
2. create and update ValueCheck class properties
3. check each value with given formula
4. run update callback on each value change

```typescript
// how ts ValueCheck class lock like
export default class ValueCheck {
  private height2: number = 12.5;
  private height1: number = 10;

  private width: number = 10;
  private slope: number = 0.25;
}
```

```javascript
// how js ValueCheck class lock like
export default class ValueCheck {
  constructor() {
    this.height2 = 12.5;
    this.height1 = 10;

    this.width = 10;
    this.slope = 0.25;
  }
}
```
