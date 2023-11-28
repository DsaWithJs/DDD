/**
 * The Problem
 */
namespace ss {
  type TodoItem = { taskId: number; task: string | number; done: boolean };

  let id: number = 0;
  let todoList: Array<TodoItem> = [];

  function printTodos(): void {
    console.log(todoList);
  }
  function addTodo(item: string): void {
    todoList.push({ taskId: id++, task: item, done: false });
  }
  function addTodoNumber(item: number): void {
    todoList.push({ taskId: id++, task: item, done: false });
  }

  addTodo("Learn TypeScript");
  addTodoNumber(22);
  printTodos();
}

/**
 * Using Generics to solve the problem
 */
namespace ss {
  type TodoItem<T> = { taskId: number; task: T; done: boolean };

  let id: number = 0;
  let todoList: Array<TodoItem<any>> = []; // Allow tasks of any type

  function addTodo<Type>(item: Type): void {
    todoList.push({ taskId: id++, task: item, done: false });
  }

  addTodo<string>("Learn TypeScript");
  addTodo<number>(22);
}
/**
 * avoiding any
 */
namespace ss {
  let id: number = 0;
  type TaskType = string | number; // Add other types as needed
  type TodoItem = { taskId: number; task: TaskType; done: boolean };

  let todoList: Array<TodoItem> = [];

  function addTodo<Type extends TaskType>(item: Type): void {
    todoList.push({ taskId: id++, task: item, done: false });
  }
  addTodo<string>("Learn TypeScript");
  addTodo<number>(22);
}
