import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbCollapseModule, NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {PublicComponent} from './screens/public/public.component';
import {LoginComponent} from './screens/public/login/login.component';
import {SignupComponent} from './screens/public/signup/signup.component';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from "@angular/common/http";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {DynamicTableComponent} from './components/dynamic-table/dynamic-table.component';
import {FooterComponent} from './components/footer/footer.component';
import {LandingComponent} from './screens/public/landing/landing.component';
import {RouterModule, Routes} from "@angular/router";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";

const routes: Routes = [{path: '', redirectTo: '/public/landing', pathMatch: 'full'}, {
    path: 'public',
    redirectTo: '/public/landing',
    pathMatch: 'full'
}, {
    path: 'public',
    component: PublicComponent,
    children: [{path: 'login', component: LoginComponent}, {
        path: 'signup',
        component: SignupComponent
    }, {path: 'landing', component: LandingComponent}

    ]
}]

@NgModule({
    declarations: [AppComponent, PublicComponent, LoginComponent, SignupComponent, DynamicTableComponent, FooterComponent, LandingComponent],
    imports: [NgbCollapseModule, NgbDropdownModule, JwBootstrapSwitchNg2Module, FormsModule, ReactiveFormsModule, HttpClientModule, NgxDatatableModule, ToastrModule.forRoot(), BrowserModule.withServerTransition({appId: 'serverApp'}), ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production, registrationStrategy: 'registerWhenStable:30000'
    }), NgbModule, RouterModule.forRoot(routes), AngularMultiSelectModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
