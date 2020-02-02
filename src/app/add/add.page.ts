import { Component } from '@angular/core';
import { StorageService, Todo } from '../services/storage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage  {
  todo: Todo = {
    task: '',
    createdAt:  Date.now(),
    tag: ''
  };
  constructor(private todoService: StorageService, private nav: NavController) {
   }

   addItem(){
    this.todoService.addTodo(this.todo).then(()=>{
      this.nav.navigateBack('home')
    })
   }
  
 

  
}
