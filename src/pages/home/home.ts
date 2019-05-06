import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddTaskPage } from '../add-task/add-task';
import { TaskService } from '../../providers/task-service/task-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks: { title: string }[] = [];

  constructor(public navCtrl: NavController, private taskService: TaskService) {
  }

  ionViewWillEnter() {
    this.tasks = this.getAllTasks();
  }

  addTask(){
    this.navCtrl.push(AddTaskPage);
  }

  getAllTasks() {
    return this.taskService.getAllTasks();
  }
}
