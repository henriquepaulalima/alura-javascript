const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

const mensagensErro = {
    nome: {
        valueMissing: 'O campo do nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio',
        typeMismatch: 'O email digitado não é valido'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio',
        patternMismatch: 'A senha deve conter entre 6 e 2 caracteres, deve conter pelo menos uma letra minúscula e uma letra maiúscula, um número e não deve conter símbolos.'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio',
        customError: 'Você deve ser maior que 18 para se cadastrar'
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraErro(tipoDeInput, input);
    }
}

function mostraErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensErro[tipoDeInput][erro];
        }
    })

    return mensagem;
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if (!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 para se cadastrar';
    }

    input.setCustomValidity(mensagem);
}

function maiorQue18(data) {
    const dataAtual = new Date();
    const data18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return data18 <= dataAtual;
}