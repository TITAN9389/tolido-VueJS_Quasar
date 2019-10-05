<template>
  <q-page padding>
    <ul>
      <Task v-for="task in tasks" :key="task.id" :task="task">
        {{ task.name }}
      </Task>
    </ul>
  </q-page>
</template>

<script>
import Task from "./../components/Task";

export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "drink coffee",
          dueDate: "2019/05/12",
          dueTime: "18:30"
        },
        {
          id: 2,
          name: "get bananas",
          dueDate: "2019/06/10",
          dueTime: "12:30"
        },
        {
          id: 3,
          name: "play LoL",
          dueDate: "2019/10/04",
          dueTime: "10:00"
        }
      ]
    };
  },
  methods: {
    deleteTask(idx) {
      this.tasks.splice(idx, 1);
    }
  },
  components: {
    Task
  }
};
</script>

<style></style>
