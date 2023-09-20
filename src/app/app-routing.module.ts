import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { SingleArticleComponent } from "./single-article/single-article.component";
import { ArtComponent } from "./art/art.component";
import { ArticalComponent } from "./artical/artical.component";

const routes: Routes = [
   { path: "", component: ArticalComponent },
  {path: "article/:id", component: SingleArticleComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    
  ]
})
export class AppRoutingModule {}
