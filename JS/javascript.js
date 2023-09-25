//Alternando entre os formularios

document.addEventListener('DOMContentLoaded', function(){
    

    const toggleBtn = document.getElementById('toggleBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    //Adicionando o evento no botão que permite a alternancia entre os formularios

    toggleBtn.addEventListener('click', function(){

        if(loginForm.style.display === 'block'){
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            toggleBtn.textContent = 'Já tem uma conta ? Faça login';
        }else {

            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            toggleBtn.textContent = 'Criar uma nova conta';
        }
    });
});