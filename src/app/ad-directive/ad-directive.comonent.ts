import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
    selector: 'addirectiveC',
    template: `
    <div>
      <app-ad-directive [ads]="ads"></app-ad-directive>
    </div>
  `
})
export class AppDirectiveComponent implements OnInit {
    ads: AdItem[];

    constructor(private adService: AdService) { }

    ngOnInit() {
        this.ads = this.adService.getAds();
    }
}
