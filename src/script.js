// Array para armazenar os eventos na memória
const eventos = [];

// Seleção dos elementos do DOM
const formEvento = document.getElementById('form-evento');
const listaEventos = document.getElementById('lista-eventos');

// Função para renderizar a lista de eventos na tela
function renderizarEventos() {
    // Se não houver eventos, exibe mensagem padrão
    if (eventos.length === 0) {
        listaEventos.innerHTML = '<p>Nenhum evento cadastrado até o momento.</p>';
        return;
    }

    // Limpa a lista antes de reconstruir
    listaEventos.innerHTML = '';

    // Percorre o array de eventos e cria o HTML para cada um
    eventos.forEach(function(evento) {
        const card = document.createElement('div');
        card.className = 'evento-item';
        
        card.innerHTML = `
            <h3>📌 ${evento.nome}</h3>
            <p><strong>Descrição:</strong> ${evento.descricao}</p>
            <p><strong>Data:</strong> ${evento.data} às ${evento.horario}</p>
            <p><strong>Local:</strong> ${evento.local}</p>
            <p><strong>Responsável:</strong> ${evento.responsavel}</p>
            <p><strong>Vagas:</strong> ${evento.vagas}</p>
        `;

        listaEventos.appendChild(card);
    });
}

// Listener para o envio do formulário
formEvento.addEventListener('submit', function(event) {
    event.preventDefault();

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

    eventos.push(novoEvento);

    alert(`Evento "${novoEvento.nome}" cadastrado com sucesso!`);
    formEvento.reset();

    // Atualiza a exibição na tela
    renderizarEventos();
});