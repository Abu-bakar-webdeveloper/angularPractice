import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { ApihttpclientComponent } from './components/apihttpclient/apihttpclient.component';
import { ViewchildrenComponent } from './components/viewchildren/viewchildren.component';

export const routes: Routes = [
    {
        path: 'databinding',
        component: DatabindingComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent
    },
    {
        path: 'form',
        component: FormsComponent
    },
    {
        path: 'reactiveform',
        component: ReactiveformComponent
    },
    {
        path: 'api',
        component: ApihttpclientComponent
    },
    {
        path: 'viewchildren',
        component: ViewchildrenComponent
    }
];
