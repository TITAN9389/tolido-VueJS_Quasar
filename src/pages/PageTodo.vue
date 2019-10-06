<template>
  <q-page padding>
    <div>ToDo</div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "drink coffe",
          completed: false
        },
        {
          id: 2,
          name: "eat fruit",
          completed: false
        },
        {
          id: 3,
          name: "make food",
          completed: true
        }
      ]
    };
  }
};
</script>

<style></style>
