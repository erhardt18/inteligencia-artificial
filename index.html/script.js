const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está navegando pela internet quando encontra um aplicativo que usa Inteligência Artificial para criar músicas personalizadas com base no seu humor. Qual a sua reação inicial?",
        alternativas: [
            "Isso é incrível! Quero experimentar agora mesmo.",
            "Isso é estranho... Como a IA pode saber o meu humor?"
        ]
    },
    {
        enunciado: "Após explorar o aplicativo, você percebe que ele oferece a opção de criar músicas para diferentes ocasiões, como festas ou momentos de relaxamento. Sua professora de música propõe um desafio para a turma: usar esse aplicativo para compor uma música para a próxima aula de música. O que você faz?",
        alternativas: [
            "Usa o aplicativo para criar a música, aproveitando a criatividade da IA para facilitar o processo.",
            "Decide compor a música manualmente, acreditando que sua própria criatividade é mais importante do que o uso da IA."
        ]
    },
    {
        enunciado: "Durante a apresentação das músicas criadas pelos alunos, um colega questiona se a música criada pela IA pode ser considerada arte verdadeira. Como você responde?",
        alternativas: [
            "Defende que a IA pode ser uma ferramenta poderosa para criar arte, mas que a arte verdadeira vem do coração e da experiência humana.",
            "Acho que a IA pode criar arte de forma autêntica, assim como qualquer outra forma de criação artística."
        ]
    },
    {
        enunciado: "Após a aula, você decide usar o aplicativo para criar uma trilha sonora personalizada para um projeto de vídeo que está fazendo. Como você faz isso?",
        alternativas: [
            "Usa o aplicativo para gerar a música, ajustando a melodia conforme o tema do vídeo.",
            "Componho a música manualmente, pois quero garantir que a música tenha o tom e a emoção que eu imagino para o projeto."
        ]
    },
    {
        enunciado: "Você tem um trabalho de história sobre a Revolução Industrial, mas está com pouco tempo para pesquisar. Seu colega sugere usar a IA para gerar um resumo do tema. O que você faz?",
        alternativas: [
            "Aceita a sugestão e utiliza a IA para gerar o resumo, fazendo apenas alguns ajustes para adicionar suas próprias ideias.",
            "Prefere pesquisar o conteúdo sozinho, para garantir que o trabalho tenha uma análise mais profunda e pessoal."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
