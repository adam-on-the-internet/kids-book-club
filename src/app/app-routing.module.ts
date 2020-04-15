import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { ROUTES_ENUM } from "./constants/routing.constants";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { DetailsComponent } from "./components/details/details.component";
import { JoinComponent } from "./components/join/join.component";

const routes: Routes = [
  // main
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.Login, component: LoginComponent },
  { path: ROUTES_ENUM.Profile, component: ProfileComponent },
  { path: ROUTES_ENUM.Admin, component: AdminComponent },
  // projects
  { path: ROUTES_ENUM.Rules, component: DetailsComponent },
  { path: ROUTES_ENUM.Join, component: JoinComponent },
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
