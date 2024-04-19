function fetchTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map(
        (todoIteam, index) =>
          (document.querySelector(".todoApp_conents-box").innerHTML += `
        <div class="todo">
          <div class="todo-tittle">${todoIteam.title}</div>
          <input type="checkbox" ${
            todoIteam.completed == true ? "checked" : "unchecked"
          }/>
        </div>
       `)
      );
    });
}

// completed
