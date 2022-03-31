import {Injectable} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {TitleType} from "./title-type.model";

@Injectable({
  providedIn: 'root'
})
export class NgxTitleService {

  private baseTitle: string = '';

  constructor(
    private titleService: Title
  ) {
  }

  public setBaseTitle() {
    this.baseTitle = this.titleService.getTitle();
  }

  public setTitleForActivePage() {
    this.titleService.setTitle(this.baseTitle)
  }

  public setTitleForNotActivePage(type: string, customText: string) {
    if (type == TitleType.custom) {
      this.titleService.setTitle(`${customText} ${this.baseTitle}`)
      return;
    }

    Object.keys(TitleType).forEach((value) => {
      if (type === value) {
        // @ts-ignore
        const text: string = TitleType[value].valueOf()
        this.titleService.setTitle(`${text} ${this.baseTitle}`)
      }
    })
  }
}
