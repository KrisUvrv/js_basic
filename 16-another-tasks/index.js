'use strict';

const ToDoList = {
  tasks: [],
  isValidData(data) {
    if (!data) {
      console.log('Данные не переданы');
      return false;
    }
    if (typeof data !== 'object') {
      console.log('Переданные данные не являются объектом');
      return false;
    }
    return true;
  },
  getTaskById(taskId) {
    const task = this.tasks?.find(({ id }) => id === taskId) ?? null;
    if (!task) {
      console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`);
    }
    return task;
  },
  addTask(data) {
    const isValid = this.isValidData(data);
    if (!isValid) {
      return this;
    }
    if (!this.tasks) {
      this.tasks = [];
    }
    if (!this.lastId) {
      this.lastId = 0;
    }

    this.tasks.push({ ...data, id: ++this.lastId, createdAt: Date.now(), updatedAt: null });
    return this;
  },
  deleteTask: function (id) {
    const task = this.getTaskById(id);
    if (task) {
      console.log(`Задача с id ${id} успешно удалена.`)
      this.tasks = this.tasks.filter((el) => el.id !== id);
    }
    return this;
  },

  updateTask(id, newData) {
    const isValid = this.isValidData(newData);
    if (!isValid) {
      return this;
    }
    const task = this.getTaskById(id);

    if (task) {
      console.log(`Задача с id ${id} успешно обновлена.`)
      Object.assign(task, { ...newData, updatedAt: Date.now() });
    }
    return this;
  },

  sortTasks: function (desc = false, sortBy = 'id') {
    const ALLOW_KEYS = [...new Set(this.tasks.map(Object.keys).flat())];

    if (!ALLOW_KEYS.includes(sortBy)) {
      console.log(`Нет такого ключа, доступные ключи: [${ALLOW_KEYS.join(', ')}]`);
      return;
    }

    this.tasks.sort(({ [sortBy]: a }, { [sortBy]: b }) => (desc ? b - a : a - b));
  },
};
//
// const task = {
//   name: 'first',
//   description: 'asdsdf',
//   order: 8,
// };
//
// const task2 = {
//   title: 'second',
//   priority: 3,
// };
//
// const task3 = {
//   title: 'third',
//   priority: 4,
// };

const newTask = {
  tasks: [],
}


newTask.isValidData = ToDoList.isValidData.bind(newTask);
newTask.addTask = ToDoList.addTask.bind(newTask);
newTask.getTaskById = ToDoList.getTaskById.bind(newTask);
newTask.deleteTask = ToDoList.deleteTask.bind(newTask);
newTask.updateTask = ToDoList.updateTask.bind(newTask);
newTask.sortTasks = ToDoList.sortTasks.bind(newTask);


// newTask.addTask(task);
// newTask.addTask(task2);
// newTask.addTask(task3);
// newTask.deleteTask(2);
//
//
// console.log(newTask.tasks)
