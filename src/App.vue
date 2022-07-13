<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <UserHeader :addTodo="addTodo" />
        <MyList :todos="todos" :delTodo="delTodo" />
        <UserFooter
          :todos="todos"
          :selectAll="selectAll"
          :clearSel="clearSel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from "./components/UserHeader.vue";
import MyList from "./components/MyList.vue";
import UserFooter from "./components/UserFooter.vue";

export default {
  name: "App",
  components: {
    UserHeader,
    MyList,
    UserFooter,
  },
  data() {
    return {
      todos: [
        { id: "001", name: "打篮球", done: true },
        { id: "002", name: "打代码", done: false },
        { id: "003", name: "游泳", done: true },
      ],
    };
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    delTodo(id) {
      this.todos = this.todos.filter((res) => {
        return res.id !== id;
      });
    },
    selectAll(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    clearSel() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
};
</script>

<style>
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
