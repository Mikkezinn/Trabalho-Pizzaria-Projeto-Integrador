document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    function selecionarPizza(nomePizza) {
        alert(nomePizza + " foi selecionada!");
        
    }

    
    if(username === "test" && password === "1234"){
        window.location.href = "menu.html";
    
    } else {
        document.getElementById("error").textContent = "Usuário ou senha incorretos!";
        document.getElementById("error").style.display = "block"; 
    }
    document.getElementById("registerButton").addEventListener("click", function() {
        window.location.href = "registro.html"; 
    });
    localStorage.setitem('pizzaSelecionada', nomePizza);
});

