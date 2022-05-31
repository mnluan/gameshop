var input = document.getElementById("searchbar");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var x = document.getElementById("searchbar").value;
      alert("value " + x + "!")
    }
    console.log(x);
  });