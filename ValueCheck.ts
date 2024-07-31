export default class ValueCheck {
    private h2: number = 12.5;
    private h1: number = 10;
  
    private width: number = 10;
    private slope: number = 0.25;
  }
  
  // note
  // 1. slope = (h2 - h1) / width
  // 2. h2 is always bigger than h1
  
  // update ValueCheck properties
  // run callback when each value updates
  