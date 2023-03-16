const { createApp } = Vue

  createApp({
    data() {
      return {
        tasklist: [
          {
            text: 'Fare spesa',
            done: false
          },
          {
            text: 'Finire vue-todolist',
            done: true
          },
          {
            text: 'Pulire cucina',
            done: false
          },
        ],
      }
    },
    methods: {
      toggleDone(index) {
        this.tasklist[index].done = !this.tasklist[index].done
      },
      eliminaTask(index) {
        this.tasklist.splice(index, 1)
      },
      aggiungiTask() {
        if (this.newTask.trim() !== '') { 
          this.tasklist.push({
            text: this.newTask,
            done: false
          })
          this.newTask = '' 
        }
      }
    }
  }).mount('#app')