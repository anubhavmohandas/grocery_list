import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface TaskItem {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: TaskItem[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) { 
      this.tasks.push({name:this.newTask, completed:false});
      this.newTask = '';
    };
  }
  ctcb(task: TaskItem){
      task.completed = !task.completed;
    }
  
  ctcc(task: TaskItem){
    task.completed = !task.completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}