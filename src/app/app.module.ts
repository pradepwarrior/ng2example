import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ExampleModuleComponent } from './example-module/example-module.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

//adding for routes
import { Approutes } from './app.routes';
import{ RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
   // ExampleModuleComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approutes) //adding for routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
