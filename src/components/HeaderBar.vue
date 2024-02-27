<template>
  <div
    class="container flex items-center justify-between mx-auto border-b-2 border-secondary p-3 sm:p-4 z-50"
  >
    <h1 class="uppercase text-2xl text-primary font-semibold">{{ Title }}</h1>
    <section class="menu flex items-center justify-between">
      <div
        @click="toggleForm"
        class="cursor-pointer rounded-full h-6 w-6 flex items-center justify-center border"
        :class="
          state.showAddTaskForm
            ? 'border-errorRed text-errorRed bg-white rotate-45'
            : 'text-white bg-primary'
        "
      >
        <span v-html="svgIcons?.addIcon"></span>
      </div>
    </section>
  </div>
</template>

<script>
import { state, toggleAddTaskForm, setSelectedTask } from "../store";
import { svgIcons } from "../helpers/constants/Svg";

export default {
  name: "HeaderBar",
  props: {
    Title: String,
  },
  setup() {
    return { state, toggleAddTaskForm, setSelectedTask };
  },
  data() {
    return {
      svgIcons: svgIcons,
    };
  },
  methods: {
    toggleForm() {
      this.setSelectedTask(null);
      this.toggleAddTaskForm();
    },
  },
};
</script>
