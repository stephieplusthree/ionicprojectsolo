import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskService } from '../../providers/task-service/task-service';

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private taskService: TaskService) {
  }

  saveTask(value: { title: string }) {
    this.taskService.saveTask(value);
  }
}
