<template>
  <li>
    <div><slot></slot></div>
    <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
    <button @click="deleteTask(task.id)">X</button>
  </li>
</template>

<script>
export default {
  props: ["task"]
};
</script>
