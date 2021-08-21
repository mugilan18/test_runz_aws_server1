fetch("http://localhost:5000/users")
  .then((result) => result.json())
  .then((data) => console.log(data));
