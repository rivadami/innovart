import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CompanyComponent } from './pages/company/company.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'company',
        component: CompanyComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      }
    ]
  }
];
