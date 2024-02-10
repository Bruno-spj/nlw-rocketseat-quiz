// perguntas e opções de Respostas

const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "let variavel = 10",
            "variable x = 10",
            "var y = 10",
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara o valor e o tipo",
            "Compara apenas o valor",
            "Compara apenas o tipo",
        ],
        correta: 0
    },
    {
        pergunta: "Como se refere a um elemento HTML usando seu ID em JavaScript?",
        respostas: [
            "getElementByTag",
            "selectElementByID",
            "getElementById",
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'addEventListener' faz em JavaScript?",
        respostas: [
            "Adiciona um evento a um elemento HTML",
            "Remove um evento de um elemento HTML",
            "Altera um evento em um elemento HTML",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "Verifica se uma variável está definida",
            "Retorna o tipo de uma variável",
            "Compara dois tipos de variáveis",
        ],
        correta: 1
    },
    {
        pergunta: "Como você comentaria uma única linha de código em JavaScript?",
        respostas: [
            "// Comentário aqui",
            "<!-- Comentário aqui -->",
            "/* Comentário aqui */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'parseInt' em JavaScript?",
        respostas: [
            "Converte uma string para número inteiro",
            "Converte um número inteiro para string",
            "Arredonda um número decimal para o inteiro mais próximo",
        ],
        correta: 0
    },
    {
        pergunta: "O que significa a sigla DOM em JavaScript?",
        respostas: [
            "Document Object Model",
            "Data Object Model",
            "Dynamic Object Model",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a finalidade do operador '++' em JavaScript?",
        respostas: [
            "Incrementar um valor",
            "Decrementar um valor",
            "Multiplicar um valor",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'slice' em uma string JavaScript?",
        respostas: [
            "Divide a string em substrings",
            "Remove espaços em branco no início e no final da string",
            "Extrai uma parte da string",
        ],
        correta: 2
    },
];

// Exemplo de como acessar a primeira pergunta e suas opções
console.log(perguntas[0].pergunta);
console.log(perguntas[0].respostas);
console.log("Resposta correta: " + perguntas[0].respostas[perguntas[0].correta]);

const quiz = document.querySelector('#quiz')

const template = document.querySelector('template')

const corretas = new Set()

const totalDePerguntas = perguntas.length

const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas




//loop ou laço de repetição
for(let item of perguntas){
    const quizItem =template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)


        dt.querySelector('input').onchange = (event) => {
          const estaCorreta =  event.target.value == item.correta

          corretas.delete(item)
          if(estaCorreta){
            corretas.add(item)
          }

          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }







        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()



// Coloca a pergunta na tela
quiz.appendChild(quizItem)


}
