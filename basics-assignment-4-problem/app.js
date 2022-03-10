const app = Vue.createApp({
    data() {
      return {
        text: "",
        visCheck: "",
        inputbgColor: "",
      };
    },
    computed: {
        paraClasses() {
            return {
              user1: this.text === 'user1',
              user2: this.text === 'user2',
              visible: this.visCheck,
              hidden: !this.visCheck
            };
          },
    },
    methods: {
        toggleVis() {
            this.visCheck = !this.visCheck;
          },
    }
  });
  app.mount('#assignment');