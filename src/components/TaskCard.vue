<template>
  <section>
    <div class="flex items-center text-gray border border-lightSilver">
      <span
        class="cursor-grab w-6 h-10 flex items-center justify-center"
        v-html="svgIcons?.dragIcon"
      ></span>
      <fieldset
        class="h-10 w-10 cursor-pointer flex items-center justify-center border-x border-lightSilver"
      >
        <input class="cursor-pointer" :checked="isChecked" type="checkbox" />
      </fieldset>
      <h3 class="capitalize font-medium text-base sm:text-lg px-3 truncate">
        {{ Title }}
      </h3>
      <div
        class="sub-menu flex items-center justify-center ml-auto space-x-3 mr-3"
      >
        <span
          @click="handleEdit(TaskIndex)"
          class="cursor-pointer h-5 w-5 flex justify-center items-center border rounded border-islamicGreen text-islamicGreen"
          v-html="svgIcons?.editIcon"
        ></span>
        <span
          @click="handleDelet(TaskIndex)"
          class="cursor-pointer h-5 w-5 flex justify-center items-center border rounded border-apple text-apple"
          v-html="svgIcons?.binIcon"
        ></span>
      </div>
    </div>
    <p
      class="truncateOn3 font-light text-grayLight text-sm sm:text-base rounded-b border-t-0 border border-lightSilver py-1 px-3 ml-16"
    >
      {{ Description }}
    </p>
    <section
      v-if="showConfirmationBox"
      class="absolute top-0 left-0 w-screen h-screen"
    >
      <ConfirmationBox
        Heading="Confirm Delete"
        Question="This task will be removed permenatly, Are you sure?"
        @confirm="removeTaskAt(selectedIndex)"
        @close="closeConfirmBox"
      />
    </section>
  </section>
</template>

<script>
import { removeTaskAt, setSelectedTask, toggleAddTaskForm } from "../store";
import ConfirmationBox from "./ConfirmationBox.vue";
import { svgIcons } from "../helpers/constants/Svg";
export default {
  name: "TaskCard",
  props: {
    TaskIndex: Number,
    Title: String,
    Description: String,
    isChecked: Boolean,
  },
  components: {
    ConfirmationBox,
  },
  setup() {
    return { removeTaskAt, setSelectedTask, toggleAddTaskForm };
  },
  data() {
    return {
      svgIcons: svgIcons,
      showConfirmationBox: false,
      selectedIndex: null,
    };
  },
  methods: {
    handleEdit(index) {
      this.setSelectedTask(index);
      this.toggleAddTaskForm();
    },
    handleDelet(index) {
      this.selectedIndex = index;
      this.showConfirmationBox = true;
    },
    closeConfirmBox() {
      this.showConfirmationBox = false;
      this.selectedIndex = null;
    },
  },
};
</script>
