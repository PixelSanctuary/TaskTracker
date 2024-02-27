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
    riorityIndex: 1
  },
  {
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi ut leo dictum lacinia. Duis nec libero malesuada metus aliquam euismod. Duis a ex blandit, volutpat felis nec, porta odio. Integer leo odio, placerat quis nulla vel, ultrices sodales nulla. Aliquam consequat elit vel libero consectetur, sed placerat libero maximus. Mauris non quam sit amet elit varius porta ac non erat. Suspendisse consequat finibus placerat",
    isCompleted: false,
    priorityIndex: 3
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
