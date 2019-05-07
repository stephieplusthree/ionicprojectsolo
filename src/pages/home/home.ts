import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddTaskPage } from '../add-task/add-task';
import { TaskService } from '../../providers/task-service/task-service';
import { Task } from '../../models/task.model';
import { ViewTaskPage } from '../view-task/view-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private tasks: Promise<Task[]>;
  private task: Task;

  constructor(public navCtrl: NavController, private taskService: TaskService) {
  }

  ionViewWillEnter() {
    this.tasks = this.getAllTasks();
  }

  addTask(){
    this.navCtrl.push(AddTaskPage);
  }

  getTask(createDate: number) {
    this.taskService.getTask(createDate).then((t) => {
      this.task = t;
      this.navCtrl.push(ViewTaskPage, { task: this.task })
    })
  }

  getAllTasks() {
    return this.taskService.getAllTasks();
  }
}
