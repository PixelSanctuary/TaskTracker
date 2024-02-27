import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { reactive } from 'vue'; 

import { appendTask, removeTaskAt, setSelectedTask, toggleAddTaskForm, updateTaskAt } from './store';

const provideStore = () => {
  const state = reactive({
    showAddTaskForm: false,
    taskList: [],
    selectedTask: null,
  });

  return {
    state,
    toggleAddTaskForm,
    appendTask,
    removeTaskAt,
    setSelectedTask,
    updateTaskAt,
  };
};

const app = createApp(App);
app.provide('store', provideStore());
app.mount('#app');
