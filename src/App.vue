<template>
  <div>
    <HeaderBar Title="Task Tracker"/>
    <TaskList :taskList="state.taskList"/>
    <TaskForm v-if="state.showAddTaskForm"/>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';
import { state } from './store';

export default {
  components: {
    HeaderBar,
    TaskList,
    TaskForm
  },
  setup() {
    return { state };
  },
};
</script>
