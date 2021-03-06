import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'disease', loadChildren: './disease/disease.module#DiseasePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'hospital', loadChildren: './hospital/hospital.module#HospitalPageModule' },
  { path: 'doctors', loadChildren: './doctors/doctors.module#DoctorsPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
