const title = document.getElementById("title");
const message = document.querySelector(".message");

title.textContent = "Welcome to Exercise 02";
message.textContent = "DOM updated successfully!";

title.style.color = "blue";
title.style.fontSize = "40px";

message.classList.add("active");
