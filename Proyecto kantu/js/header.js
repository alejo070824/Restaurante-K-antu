document.getElementById("header").innerHTML = fetch('./components/header.html')
    .then(response => response.text())
    .then(data => document.getElementById("header").innerHTML = data);