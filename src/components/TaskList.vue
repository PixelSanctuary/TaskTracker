<template>
  <div class="h-smallScreen sm:h-appScreen overflow-y-auto">
    <template v-if="taskList.length === 0">
      <section class="flex flex-col items-center mt-10">
        <h3 class="text-base text-gray font-medium">No Tasks to Display</h3>
        <p
          @click="toggleAddTaskForm"
          class="cursor-pointer font-light text-sm text-grayLight hover:text-primary underline"
        >
          Click to add a task.
        </p>
      </section>
    </template>
    <template v-else>
      <draggable
        :list="taskList"
        :disabled="!enabled"
        item-key="title"
        class="list-group flex flex-col space-y-5 container mx-auto p-3 sm:p-4"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="onDragEnd"
      >
        <template #item="{ element, index }">
          <TaskCard
            :TaskIndex="index"
            :Title="element?.title"
            :Description="element?.description"
            :isChecked="element?.isCompleted"
          />
        </template>
      </draggable>
    </template>
  </div>
</template>

<script>
import { toggleAddTaskForm } from "../store";
import draggable from "vuedraggable";
import TaskCard from "./TaskCard.vue";

export default {
  name: "TaskList",
  props: {
    taskList: Array,
  },
  components: {
    draggable,
    TaskCard,
  },
  setup() {
    return { toggleAddTaskForm };
  },
  data() {
    return {
      enabled: true,
      dragging: false,
    };
  },
  methods: {
    onDragEnd(event) {
      this.$emit("update:taskList", event.newList);
    },
    checkMove() {
      return true;
    },
  },
};
</script>
