import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { AppRouting } from './app-routing.module';
import { HighlightComponent } from './highlight/highlight.component';

import { HighLightDirective } from './highlight/highlight.directive';
import { PipeComponent } from './pipe/pipe.component';
import { MypipePipe } from './mypipe.pipe';
import { ParentTochildrenComponent } from './parent-tochildren/parent-tochildren.component';


import { AdService } from './ad-directive/ad.service'
import { AppDirectiveComponent } from './ad-directive/ad-directive.comonent'
import { AdDirectiveComponent } from './ad-directive/ad-banner.component';
import { AdDirectiveDirective } from './ad-directive.directive'
import { HeroProfileComponent } from './ad-directive/hero-profile.component'
import { HeroJobAdComponent } from "./ad-directive/hero-job-ad.component";



/**
 * 
 * angular的思想，我这样揣摩一下
 * 类似java依赖
 * 自己定义模块，
 * 业务注入到模块类中
 * 模块类注册到总模块中使用
 * 
 * 内部很多细节还不太清楚
 * 装饰器就是Java里的注解（这样数其实也不严谨）
 * 装饰器应该说是对类、属性、方法的装饰
 * 
 */
@NgModule({
  //这里是引入组件的
  declarations: [
    AppComponent,
    UserComponent,
    IndexComponent,
    HighlightComponent,
    HighLightDirective,
    PipeComponent,
    MypipePipe,
    ParentTochildrenComponent,

    AdDirectiveComponent,
    AdDirectiveDirective,
    AppDirectiveComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  //这里是引入模块的
  imports: [
    BrowserModule,
    AppRouting,
    ReactiveFormsModule
  ],
  providers: [AdService],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  //手动加载angular模板 
  //只有主模块才能设置 bootstrap
  bootstrap: [AppComponent],

})
export class AppModule { }
