import {  Component } from '@angular/core';

interface Person{
    name:string;
    age:number;
}
//这是类的装饰器
@Component(
    {
        selector:`user`,
        template:`<h1>user Component</h1><p>{{value}}</p><button (click)="hello('hi')">sayhello</button>`
    }
)
/**
 * angular的构造函数的参数应该是用来注入服务的（这里是我的一个猜想，保留）
 * 
 */
export class UserComponent {
    value = "全栈之巅";
    hello(params:string) {
        alert(params+''+this.value);
    }
}