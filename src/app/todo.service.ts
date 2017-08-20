import { Injectable } from '@angular/core';
import {Init } from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() { 
    super(); //in order to call Init class constructor 
    console.log("TodoService initialized");
    this.load();

  }

  getTodos()
  {
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;

  }

}
