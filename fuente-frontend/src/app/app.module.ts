import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ShopComponent} from "./shop/shop.component";
import { SlideshowModule } from '../../public_api';
import {FaqComponent}  from "./help/faq.component";
import {FaqModule}  from "./help/faq.module";


const appRoutes: Routes = [
    {
        path      : '',
        component: HomeComponent
    },
    {
        path      : 'about',
        component: AboutComponent
    },
    {
        path      : 'contact-us',
        component: ContactUsComponent
    },
    {
        path      : 'shop',
        component: ShopComponent
    },
    {
        path      : 'help',
        component: FaqComponent
    }

];

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ContactUsComponent,
        ShopComponent,
    ],
    imports     : [
        SlideshowModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, {useHash: false}),
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        FaqModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
