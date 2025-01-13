# Video Player

Este é um projeto de um Player de vídeo desenvolvido com base no curso da **Rocketseat**. Ele utiliza diversas tecnologias modernas para criar uma aplicação funcional e bem estruturada.
![image](https://github.com/user-attachments/assets/cd2613be-fa04-4025-bd27-fab46339e057)


## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Redux**: Gerenciamento de estado global da aplicação.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **lucide-react**: Ícones simples e configuráveis para React.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Vitest**: Framework para testes unitários.
- **Vite**: Ferramenta de build e desenvolvimento ultrarrápida.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior).
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) para gerenciar pacotes.

## Instalação

Siga os passos abaixo para clonar e rodar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/jp-beltran/videoPlayer.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd videoPlayer
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou use yarn
   yarn
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Acesse a aplicação no navegador em [http://localhost:5173](http://localhost:5173).

## Estrutura do Projeto

```
.
├── src
│   ├── components
│   │   ├── Header.tsx       # Componente do cabeçalho
|   |   ├── Lesson.tsx       # Componente de Aulas
│   │   ├── Module.tsx       # Componente de módulos
│   │   └── Video.tsx        # Componente do player de vídeo
│   ├── lib
│   │   └── axios.ts         # Instância do Axios
│   ├── pages
│   │   └── Player.tsx       # Página principal do player
│   ├── store
│   │   ├── index.ts         # Configuração do Redux
│   │   └── slices
│   │       └── playerSlice.ts  # Lógica de estado para o player
│   ├── App.tsx              # Componente raiz
│   ├── main.tsx             # Ponto de entrada do React
│   └── index.css            # Estilos globais
└── package.json             # Configurações do projeto
```

## Principais Funcionalidades

- Player de vídeo com suporte a:
  - Controle de reprodução.
  - Mudança automática para a próxima lição ao término do vídeo.
- Navegação por módulos e lições.
- Estado global gerenciado com Redux.
- Loader exibido enquanto o curso está carregando.
- Consumo de API simulada usando o `json-server`.

## Como Executar a API Simulada

Este projeto usa o `json-server` para criar uma API REST fake.

1. Instale o `json-server` globalmente (caso ainda não tenha):

   ```bash
   npm install -g json-server
   ```

2. Crie o arquivo `db.json` na raiz do projeto:

   ```json
   {
     "modules": [
       {
         "id": 1,
         "title": "Módulo 1",
         "lessons": [
           { "id": "lesson1", "title": "Aula 1", "duration": "10:00" },
           { "id": "lesson2", "title": "Aula 2", "duration": "12:00" }
         ]
       }
     ]
   }
   ```

3. Inicie o `json-server`:

   ```bash
   json-server --watch db.json --port 3000
   ```

4. Certifique-se de que a aplicação está configurada para consumir os dados da API em `http://localhost:3000`.

## Scripts Disponíveis

- `npm run dev` ou `yarn dev`: Inicia o servidor de desenvolvimento.
- `npm run build` ou `yarn build`: Gera a versão de produção da aplicação.
- `npm run test` ou `yarn test`: Executa os testes com o Vitest.

## Estilização

O projeto utiliza **Tailwind CSS** para estilização. Você pode personalizar os estilos no arquivo `tailwind.config.js`.

## Testes

Os testes são escritos utilizando o **Vitest**. Para rodar os testes:

```bash
npm run test
# ou
yarn test
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
