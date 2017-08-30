import { Routes } from '@angular/router';
import{DashboardComponent} from './dashboard/dashboard.component'
import{SidebarComponent} from './sidebar/sidebar.component'
import{TopbarComponent} from './topbar/topbar.component'
import{UserComponent} from './user/user.component'


export const Approutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
]