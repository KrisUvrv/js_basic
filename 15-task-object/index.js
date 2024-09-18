const ToDoList = {
  tasks: [
    {
      title: 'Помыть посуду',
      priority: 1,
      id: 1,
    }
  ],

  addTask: function (title, priority) {
    this.tasks.push({
      title,
      priority,
      id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
    });
  },

  deleteTask: function (id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },

  updateTask: function (id, obj) {
    const foundTask = this.tasks.find(task => task.id === id);
    if (foundTask) {
      for (const key in obj) {
        foundTask[key] = obj[key];
      }
    }

    // this.tasks = this.tasks.map((task) => {
    //   if (task.id === id) {
    //     return {
    //       ...task,
    //       ...obj,
    //     }
    //   }
    //   return task;
    // })

  },

  sortTasks: function (orderBy = 'id', sort = 'asc') {
    this.tasks.sort((a, b) => {
        return sort === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]
      }
    );
  },

}

// ToDoList.addTask('first', 8);
// ToDoList.addTask('second', 3);
// ToDoList.addTask('third', 4);
// console.log(ToDoList.tasks);
//
// ToDoList.deleteTask(1);
// console.log(ToDoList.tasks);
//
// ToDoList.updateTask(2, {title: 'fourth', priority: 6});
// console.log(ToDoList.tasks);
//
// ToDoList.sortTasks('id', 'desc');
// console.log(ToDoList.tasks);
