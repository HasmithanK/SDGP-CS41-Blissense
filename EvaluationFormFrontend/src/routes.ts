import { Routes } from '@angular/router';
import { FormListComponent } from './app/form-list/form-list.component';
import { SelectedFormComponent } from './app/selected-form/selected-form.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { DisorderPredictionComponent } from './app/disorder-prediction/disorder-prediction.component';
import { PredictionResultsComponent } from './app/prediction-results/prediction-results.component';

const routeConfig: Routes = [
    {
        path:'', // By default will open this component;
        component: HomePageComponent,
        title: 'Blissense'
    },
    {
        path: 'forms',
        component: FormListComponent,
        title: 'Forms Page',
    },
    {
        path: 'forms/selectedform', // Since accessed via forms component
        component: SelectedFormComponent,
        title: 'Evaluation Form page'
    },
    {
        path: 'predictdisorder',
        component: DisorderPredictionComponent,
        title: 'Predict Disorder'
    },
    {
        path: 'predictedresults',
        component: PredictionResultsComponent,
        title: 'Prediction Results'
    }
];

export default routeConfig;