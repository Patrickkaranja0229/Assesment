$(document).ready(function() {
    $.ajax(
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function(todos) {
        fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(console.log);
        fetch('https://dummyjson.com/todos/1')
        .then(res => res.json())
        .then(console.log);
        fetch('https://dummyjson.com/todos/random')
        .then(res => res.json())
        .then(console.log);           
        });
      }
    );

  