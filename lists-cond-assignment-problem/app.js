const app = Vue.createApp({
    data() {
      return { 
        enteredTaskValue: '',
        tasks: [],
        tasksVis: true,
      };
    },
    methods: { 
      addTask() { 
        this.tasks.push(this.enteredTaskValue);
        },
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
      toggleTasks() {
        this.tasksVis = !this.tasksVis;
      }
    },
  });
  
  app.mount('#assignment');
  