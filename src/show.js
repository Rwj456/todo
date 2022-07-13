export const showName = {
  methods: {
    add(e){
      const todoObj = {id:nanoid(),name: e.target.value,done: false}
      console.log(todoObj);
    }
  },
}