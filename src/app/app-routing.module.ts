
import { RouterModule, Routes } from '@angular/router'

import { HighlightComponent } from './highlight/highlight.component'
import { IndexComponent } from './index/index.component'
import { PipeComponent } from './pipe/pipe.component'
import { ParentTochildrenComponent } from './parent-tochildren/parent-tochildren.component'

const appRouters: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'highlight', component: HighlightComponent },
  { path: 'pipetest', component: PipeComponent },
  { path: 'pandc', component: ParentTochildrenComponent}];

export const AppRouting = RouterModule.forRoot(appRouters);
export class AppRoutingModule{}
