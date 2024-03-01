const perguntas = [
    {
      pergunta: "Qual é a saída do seguinte código JavaScript?\n\nconsole.log(2 + '2');",
      respostas:[
        "22",
        "4",
        "Erro",
      ],
      correta:0
    },
    {
      pergunta: "Qual é a forma correta de verificar se uma variável é do tipo número em JavaScript?",
      respostas:[
        "typeof myVar === 'number'",
        "myVar.type === 'number'",
        "myVar instanceof Number",
      ],
      correta:0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas:[
        "pop()",
        "remove()",
        "delete()",
      ],
      correta:0
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas:[
        "Operador de adição",
        "Operador de concatenação de strings",
        "Operador lógico 'E' (AND)",
      ],
      correta:2
    },
    {
      pergunta: "O que a função 'parseInt()' faz em JavaScript?",
      respostas:[
        "Retorna a parte inteira de um número",
        "Converte uma string em um número inteiro",
        "Arredonda um número para o inteiro mais próximo",
      ],
      correta:1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
     
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      //coloca as resposta na tela
      quizItem.querySelector('dl').appendChild(dt)
    }
  //remove a resposta do html
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }