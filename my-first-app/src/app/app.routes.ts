import {HomeComponent} from "./home/home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LogOutComponent} from "./log-out/log-out.component";
import {Routes,RouterModule} from "@angular/router";

const R:Routes=[
    {path:'',component:HomeComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'LogOut',component:LogOutComponent}
];

export const w=RouterModule.forRoot(R);