<template>
  <section
    class="absolute flex items-center justify-center w-screen h-smallScreen sm:h-appScreen bg-black bg-opacity-50 top-14 sm:top-16 z-40 p-3"
  >
    <div
      class="flex flex-col items-center justify-center rounded-lg border border-secondary bg-white p-10 max-h-[75%] min-h-[35%] min-w-[35%] overflow-auto"
    >
      <h1 class="uppercae text-lg font-semibold text-gray">{{ Heading }}</h1>
      <p class="text-base text-center font-light text-grayLight mt-3">{{ Question }}</p>
      <section class="flex justify-center mt-5 space-x-2">
        <button
          @click="confirmDelete"
          class="border border-primary bg-primary text-white rounded-lg py-1 px-3"
        >
          Yes
        </button>
        <button
          @click="closeModal"
          class="border border-secondary bg-white text-secondary rounded-lg py-1 px-3"
        >
          No
        </button>
      </section>
    </div>
  </section>
</template>

<script>
import { svgIcons } from "../helpers/constants/Svg";

export default {
  name: "ConfirmationBox",
  props: {
    Heading: String,
    Question: String,
  },
  data() {
    const selectedTask = this.state?.taskList[this.state?.selectedTask] || null;
    return {
      svgIcons: svgIcons,
      title: selectedTask?.title || "",
      description: selectedTask?.description || "",
    };
  },
  methods: {
    confirmDelete() {
      this.$emit("confirm");
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
