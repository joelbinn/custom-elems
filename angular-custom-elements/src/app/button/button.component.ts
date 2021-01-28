import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

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
  label: string = 'A button';
  @Output()
  readonly action = new EventEmitter<number>();

  private numberOfClicks = 0;

  handleClick() {
    this.numberOfClicks++;
    this.action.emit(this.numberOfClicks);
  }
}
