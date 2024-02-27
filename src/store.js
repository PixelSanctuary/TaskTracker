import { reactive } from 'vue';

const state = reactive({
  showAddTaskForm: false,
  taskList: [
    {
    title: "Wake Up Early",
    description: "Wake up early at 6 in the morning",
    isCompleted: true,
    priorityIndex: 0
  },
  {
    title: "Work out",
    description: "Hit the GYM burn calories and get into shape, take good protiew for muccle growth",
    isCompleted: false,
    priorityIndex: 1
  }
],
  selectedTask: null,
});

const toggleAddTaskForm = () => {
  state.showAddTaskForm = !state.showAddTaskForm;
};

const appendTask = (task) => {
  state.taskList.push(task);
};


const removeTaskAt = (taskIndex) => {
  state.taskList.splice(taskIndex, 1);
};

const setSelectedTask = (taskIndex) => {
  state.selectedTask = taskIndex;
};


const updateTaskAt = (taskIndex,updatedTask) => {
  state.taskList[taskIndex] = updatedTask;
};

export {
  state,
  toggleAddTaskForm,
  appendTask,
  removeTaskAt,
  setSelectedTask,
  updateTaskAt
};
