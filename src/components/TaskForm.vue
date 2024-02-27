<template>
  <section
    class="absolute flex items-center justify-center w-screen h-smallScreen sm:h-appScreen bg-black bg-opacity-50 top-14 sm:top-16 z-40 p-3"
  >
    <form
      class="rounded-lg border border-secondary bg-white p-10 space-y-5 max-h-[75%] overflow-auto"
      @submit.prevent="addTask"
    >
      <fieldset class="flex items-center">
        <input
          class="py-1 px-3 border border-secondary rounded"
          placeholder="Enter Task Title"
          type="text"
          id="title"
          v-model="title"
          required
        />
      </fieldset>
      <fieldset class="flex items-center">
        <textarea
          class="py-1 px-3 border border-secondary rounded"
          placeholder="Enter Task Description"
          id="description"
          v-model="description"
          required
        ></textarea>
      </fieldset>
      <section class="flex justify-center space-x-5">
        <button
          class="border border-primary bg-primary text-white rounded-lg py-1 px-3"
          type="submit"
        >
          {{ isTaskSelected ? "Add Task" : "Save" }}
        </button>
        <button
          @click="closeForm"
          class="border border-secondary bg-white text-secondary rounded-lg py-1 px-3"
          type="submit"
        >
          Cancle
        </button>
      </section>
    </form>
  </section>
</template>

<script>
import {
  state,
  setSelectedTask,
  toggleAddTaskForm,
  appendTask,
  updateTaskAt,
} from "../store";
import { svgIcons } from "../helpers/constants/Svg";

export default {
  name: "TaskForm",
  setup() {
    return {
      state,
      toggleAddTaskForm,
      setSelectedTask,
      appendTask,
      updateTaskAt,
    };
  },
  data() {
    const selectedTask = this.state?.taskList[this.state?.selectedTask] || null;
    return {
      svgIcons: svgIcons,
      title: selectedTask?.title || "",
      description: selectedTask?.description || "",
      isChecked: selectedTask?.isCompleted || false,
      isTaskSelected: selectedTask === null,
    };
  },
  methods: {
    addTask() {
      const newTask = {
        title: this.title,
        description: this.description,
        isCompleted: this.isChecked,
        priorityIndex: this.state?.taskList?.length,
      };
      if (this.title && this.description) {
        if (!this.isTaskSelected) {
          this.updateTaskAt(this.state?.selectedTask, newTask);
          this.closeForm();
        } else {
          this.appendTask(newTask);
        }
        this.title = this.description = "";
      }
    },
    closeForm() {
      this.setSelectedTask(null);
      this.toggleAddTaskForm();
    },
  },
};
</script>
