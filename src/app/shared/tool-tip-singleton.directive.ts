import { ToolTipDirective } from './tool-tip.directive';
import { ContentChildren, Directive, QueryList, AfterViewInit } from '@angular/core';
import { createSingleton } from 'tippy.js';

@Directive({
  selector: '[appToolTipSingleton]'
})
export class ToolTipSingletonDirective implements AfterViewInit {

  @ContentChildren(ToolTipDirective, { descendants: true})
  elementsWithTooltips: QueryList<ToolTipDirective>
  constructor() { }

  ngAfterViewInit(): void {
    
  }
}
