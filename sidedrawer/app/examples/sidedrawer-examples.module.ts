import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { SideDrawerEventsComponent } from './events/events.component';
import { SideDrawerGettingStartedComponent } from './getting-started/getting-started.component';
import { SideDrawerPositionComponent } from './position/position.component';
import { SideDrawerTransitionsComponent } from './transitions/transitions.component';
import { SideDrawerShadowComponent } from '~/examples/shadow/shadow.component';

import { routes } from './sidedrawer-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        CommonDirectivesModule,
        NativeScriptUISideDrawerModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        SideDrawerEventsComponent,
        SideDrawerGettingStartedComponent,
        SideDrawerPositionComponent,
        SideDrawerShadowComponent,
        SideDrawerTransitionsComponent
    ]
})
export class SideDrawerExamplesModule { }