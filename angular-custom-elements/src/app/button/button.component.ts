import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="handleClick()">{{label}}</button>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent  {
  @Input()
  label = 'A button';
  @Output()
  readonly action = new EventEmitter<number>();

  private numberOfClicks = 0;

  handleClick(): void {
    this.numberOfClicks++;
    this.action.emit(this.numberOfClicks);
  }
}
