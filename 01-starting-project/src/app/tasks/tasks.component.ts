import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  [x: string]: any;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;

  // /* Making the instance of Tasks here */
  // private tasksService = new TasksService();

  /* Dependency Injection Using Angular */
  // private tasksService: TasksService;

  // constructor(tasksService: TasksService) {
  //   this.tasksService = tasksService;
  // }

  constructor(private tasksService: TasksService) {
    // this.tasksService = new TasksService();
  }

  get selectedUserTasks() {
    return this.tasksService.getTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   this.tasksService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
