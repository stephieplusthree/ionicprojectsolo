import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { getNonHydratedSegmentIfLinkAndUrlMatch } from 'ionic-angular/umd/navigation/url-serializer';

@Injectable()
export class TaskService {

  private tasks: Task[] = [];

  constructor(public storage: Storage) { }

  saveTask(task: Task) {
    task.createDate = Date.now();
    this.tasks.push(task);
    this.storage.set('tasks', this.tasks);
  }

  getAllTasks(){
    return this.storage.get('tasks').then{
      (tasks) => {
        this.tasks = tasks == null ? [] : tasks;
      }
    }
  }
}
