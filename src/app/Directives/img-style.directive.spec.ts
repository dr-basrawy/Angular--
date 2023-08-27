import { elementAt } from 'rxjs';
import { ImgStyleDirective } from './img-style.directive';
import { ElementRef } from '@angular/core';

describe('ImgStyleDirective', () => {
  it('should create an instance', () => {
    const directive = new ImgStyleDirective();
    expect(directive).toBeTruthy();
  });
});
