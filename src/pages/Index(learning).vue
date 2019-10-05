<template>
  <q-page padding>
    <button @click="counter++">{{ counter }}</button>
    <label>
      <input
        type="text"
        v-model="message"
        @keyup.esc="clearMessage"
        @mouseleave="showAlert"
        v-autofocus
        :style="errorStyle"
        ref="messageInput"
      />
    </label>
    <button @click="showMessage = !showMessage">
      {{ showMessage ? "Hide" : "Show" }}
    </button>
    <h5 class="border-grey" v-if="message.length">{{ message }}</h5>
    <h6 v-else="">no message entered</h6>
    <button @click="clearMessage">
      clear message
    </button>
    <hr />

    <p>Uppercase message: {{ messageUppercase }}</p>
    <p>Lowercase message: {{ message | messageLowercase }}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "i 💚 VueJS",
      showMessage: true,
      counter: 0
    };
  },
  computed: {
    messageUppercase() {
      return this.message.toUpperCase();
    },
    errorStyle() {
      if (this.message.length > 20) {
        return {
          color: "red",
          background: "pink"
        };
      }
      return {};
    }
  },
  methods: {
    showAlert() {
      // alert(this.message);
    },
    clearMessage() {
      this.message = "";
    },
    handleKeyup(e) {
      if (e.keyCode === 27) {
        this.clearMessage();
      }
    }
  },
  // filters mostly used for formatting dates and stuff like that
  filters: {
    messageLowercase(val) {
      return val.toLowerCase();
    }
  },
  directives: {
    autofocus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
    // not good to use ref when there is reactive data
    console.log((this.$refs.messageInput.className = "bg-green"));
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("before destroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style>
.border-grey {
  border: 1px solid grey;
}
input.button {
}

.error {
  color: red;
  background: pink;
}
</style>
