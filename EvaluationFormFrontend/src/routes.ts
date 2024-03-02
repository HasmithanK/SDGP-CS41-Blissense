import { Routes } from '@angular/router';
import { FormListComponent } from './app/form-list/form-list.component';
import { SelectedFormComponent } from './app/selected-form/selected-form.component';
import { HomePageComponent } from './app/home-page/home-page.component';

const routeConfig: Routes = [
    {
        path:'',
        component: HomePageComponent,
        title: 'Home Page'
    },
    {
        path: 'forms', // By default will open this component;
        component: FormListComponent,
        title: 'Forms Page',
    },
    {
        path: 'forms/selectedform', // Since accessed via forms component
        component: SelectedFormComponent,
        title: 'Evaluation Form page'
    }
];

export default routeConfig;