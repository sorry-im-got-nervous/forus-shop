<!-- components/Diary.vue -->
<template>
  <div>
    <h1>Мой ежедневник</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Добавить задачу">
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <template v-if="task.isEditing">
          <input v-model="task.text" @keyup.enter="finishEdit(task)" />
          <button @click="finishEdit(task)">Сохранить</button>
        </template>
        <template v-else>
          {{ task.text }}
          <button @click="editTask(task)">Редактировать</button>
          <button @click="deleteTask(task.id)">Удалить</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
      nextTaskId: 0
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ id: this.nextTaskId++, text: this.newTask, isEditing: false });
        this.newTask = ''; // Очистить поле ввода после добавления задачи
      }
    },
    editTask(task) {
      task.isEditing = true; // Включить режим редактирования
    },
    finishEdit(task) {
      if (task.text.trim() === '') {
        this.deleteTask(task.id); // Удалить задачу, если поле текста пустое
      } else {
        task.isEditing = false; // Выключить режим редактирования
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id); // Удалить задачу
    }
  }
};
</script>

<style scoped>
  /* Стили */
</style>