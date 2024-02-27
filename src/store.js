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
  },
  {  
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nec libero at pretium. Suspendisse potenti. Sed congue bibendum bibendum. Morbi ornare dolor quis magna semper hendrerit. Duis malesuada bibendum lacus eu efficitur. Nulla ac viverra elit. Aenean maximus elit condimentum dolor sollicitudin malesuada. Nam et ornare metus. Mauris sit amet accumsan justo. Curabitur vel vulputate neque. Praesent vehicula leo nulla, eget ornare massa ultricies eu. Sed diam purus, lacinia facilisis ornare vitae, feugiat nec sem. Sed velit justo, luctus ac facilisis vel, elementum sed quam. Nulla at ullamcorper ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis euismod eleifend eros, et interdum lectus ornare vitae.",
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
