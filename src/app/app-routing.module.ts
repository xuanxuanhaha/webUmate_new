import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
import {TeamComponent} from './team/team.component';
import {ContactComponent} from './contact/contact.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'our_service', component: ServiceComponent},
  {path: 'team', component: TeamComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
