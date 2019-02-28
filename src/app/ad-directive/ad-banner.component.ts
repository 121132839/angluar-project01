import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { AdItem } from './ad-item';
import { AdComponent } from './Ad.component'
import { AdDirectiveDirective } from '../ad-directive.directive'

@Component({
  selector: 'app-ad-directive',
  template: `
  <div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template ad-host></ng-template>
  </div>
  `,
  styleUrls: ['./ad-directive.component.css']
})
export class AdDirectiveComponent implements OnInit, OnDestroy {
  @Input()
  ads: AdItem[];

  currentIndex = -1;

  @ViewChild(AdDirectiveDirective)
  adHost: AdDirectiveDirective;

  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }
  ngOnDestroy() {

  }


  loadComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
