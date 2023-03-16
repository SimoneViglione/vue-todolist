const { createApp } = Vue

  createApp({
    data() {
      return {
        tasklist: [
          {
            text: 'pulire cucina',
            done: 'false'
          },
          {
            text: 'fare spesa',
            done: 'false'
          },
          {
            text: 'finire vue-todolist',
            done: 'false'
          },
        ],
      }
    }
  }).mount('#app')