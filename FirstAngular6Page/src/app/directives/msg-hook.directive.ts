import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[msg-hook]'
})
export class MsgHookDirective{
    constructor(public viewContainerRef: ViewContainerRef) { }
}