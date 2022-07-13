<template>
  <div>
    <ul class="todo-main">
      <ListItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" :delTodo="delTodo" />
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  name: "MyList",
  components: {
    ListItem
  },
  props: {
    todos: Array,
    delTodo: Function
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
