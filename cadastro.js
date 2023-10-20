function validadorDeEmail()
{
    const email = document.getElementById('email').value
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (formatoEmail.test(email))
    {
        return true
    } 
    else 
    {
        alert('O formato do e-mail é inválido!')
        return false
    }
}

function validadorDeNome()
{
    const nome = document.getElementById('nome').value

    if (nome.trim() === '')
    {
        alert('Digite um nome, por favor')
        return false
    }

    const regex = /^[a-zA-Z ]*$/;
    if (!regex.test(nome)) {
        alert('O nome não pode conter caracteres especiais ou números.');
        return false;
    }
    
    return true
}

function validarFormulario()
{
    if (validadorDeEmail() && validadorDeNome())
    {
        alert("Cadastro realizado com sucesso")
    }
}