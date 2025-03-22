document.getElementById("btnEntrar").addEventListener("click", function() {
    window.location.href = "outra_pagina.html"; // Substitua pelo link da página desejada
});

function onSignIn(response) {
    console.log("Login bem-sucedido!", response);

    const credential = response.credential;
    const decodedToken = parseJwt(credential);

    console.log("Usuário:", decodedToken);

    alert(`Bem-vindo, ${decodedToken.name}!`);
    
    // Aqui você pode redirecionar o usuário ou armazenar as informações
}

// Função de callback chamada quando o Google Sign-In for completado
function onSignIn(googleUser) {
    // Obter as informações do usuário autenticado
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;

    console.log('ID Token: ' + id_token);
    console.log('Nome: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());

    // Aqui você pode fazer o login no seu sistema, enviando o id_token para o servidor, por exemplo
}
