import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
export interface User{
  mail:string,
  password:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user = {} as User
  constructor(public auth: AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }

 async login(user: User){
  try{
    const result = await this.auth.auth.signInWithEmailAndPassword(user.mail, user.password);
    console.log(result);
    if (result) {
     this.router.navigateByUrl('home')
   }else{
   }
 }catch(e){
   console.error(e);
 }
}

}
