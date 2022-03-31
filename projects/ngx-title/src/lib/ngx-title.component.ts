import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import {NgxTitleService} from "./ngx-title.service";
import {TitleType} from "./title-type.model";

@Component({
  selector: 'ngx-title',
  template: ``,
  styles: []
})
export class NgxTitleComponent implements OnInit {

  @Input() type: string = TitleType.sleepy;
  @Input() customText: string = '';

  constructor(
    private ngxTitleService: NgxTitleService
  ) {
  }

  ngOnInit(): void {
    this.ngxTitleService.setBaseTitle();
  }

  @HostListener('document:visibilitychange', ['$event'])
  public visibilityChange(): void {
    this.checkVisibilityChange()
  }

  private checkVisibilityChange(): void {
    const isPageActive: boolean = !document.hidden;
    if (isPageActive) {
      this.ngxTitleService.setTitleForActivePage();
    } else {
      this.ngxTitleService.setTitleForNotActivePage(this.type, this.customText);
    }
  }
}
