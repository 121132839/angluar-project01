import { Component, Input } from '@angular/core';

import { AdComponent } from './Ad.component'

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `,
  styleUrls: ['./ad-directive.component.css']
})
export class HeroJobAdComponent implements AdComponent {
  @Input()
  data: any;
}