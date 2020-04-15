import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { ROUTES_ENUM } from "./constants/routing.constants";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { DetailsComponent } from './components/details/details.component';
import { KidsBookClubComponent } from './components/kids-book-club/kids-book-club.component';
import { MailListComponent } from './components/mail-list/mail-list.component';

const routes: Routes = [
  // main
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.Login, component: LoginComponent },
  { path: ROUTES_ENUM.Profile, component: ProfileComponent },
  { path: ROUTES_ENUM.Admin, component: AdminComponent },
  // projects
  { path: ROUTES_ENUM.KidsBookClub, component: KidsBookClubComponent },
  { path: ROUTES_ENUM.Details, component: DetailsComponent },
  { path: ROUTES_ENUM.Mail, component: MailListComponent },
  { path: ROUTES_ENUM.BookList, component: BookListComponent },
  { path: ROUTES_ENUM.BookDetails + "/:id", component: BookDetailsComponent },
  // default
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
