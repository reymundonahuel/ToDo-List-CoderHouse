import { Component, OnInit } from '@angular/core';
import {  StorageService, Todo } from '../services/storage.service';
import {  ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
today = Date.now();
todos: Todo[];

constructor(private storageService: StorageService, private Toast: ToastController) {
  
 }
 ngOnInit(){
  this.storageService.getTodos().subscribe(res => {
    this.todos = res;
  });
 }

 remove(item) {
  this.storageService.removeTodo(item.id);
}



}
