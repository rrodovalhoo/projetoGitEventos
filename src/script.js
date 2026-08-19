// Array para armazenar os eventos na memória
const eventos = [];

// Seleção do formulário e da lista
const formEvento = document.getElementById('form-evento');

// Listener para o envio do formulário
formEvento.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura dos valores dos campos
    const novoEvento = {
        id: Date.now(),
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('descricao').value,
        data: document.getElementById('data').value,
        horario: document.getElementById('horario').value,
        local: document.getElementById('local').value,
        responsavel: document.getElementById('responsavel').value,
        vagas: document.getElementById('vagas').value
    };

    // Adiciona ao array
    eventos.push(novoEvento);

    // Mensagem de confirmação e limpeza do formulário
    alert(`Evento "${novoEvento.nome}" cadastrado com sucesso!`);
    formEvento.reset();

    console.log("Eventos cadastrados:", eventos);
});