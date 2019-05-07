import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { TaskService } from '../../providers/task-service/task-service';
import { Task } from '../../models/task.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  formGroup: FormGroup;
  task: Task;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  constructor(public navCtrl: NavController, private taskService: TaskService) { 
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
    })
  }

  saveTask(task: Task) {
    this.taskService.saveTask(task);
    this.navCtrl.pop();
  }
}
