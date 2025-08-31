# Rastreador de Endereços IP

## 📖 Descrição

O **Rastreador de Endereços IP** é uma aplicação web que permite aos usuários rastrear a localização de qualquer endereço IP ao redor do mundo. Utilizando a [API IPify](https://geo.ipify.org), o aplicativo recupera informações precisas como a localização geográfica do IP, Provedor de Serviços de Internet (ISP), fuso horário, e exibe a localização em um mapa interativo alimentado pelo **Leaflet.js**.

Esta ferramenta pode ser útil para desenvolvedores, administradores de rede, ou qualquer pessoa curiosa para entender mais sobre a origem de um endereço IP específico.

---

## 🌟 Funcionalidades

- **Funcionalidade de Busca**: Pesquise por qualquer endereço IP válido ou domínio.
- **Mapa Interativo**: Visualize a localização do IP em um mapa interativo.
- **Informações Detalhadas**: Exibe informações do IP como país, cidade, ISP, fuso horário e coordenadas (latitude e longitude).
- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops.

---

## 🛠 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Para lidar com requisições de API e buscar dados do IP.
- **API IPify**: Fornece dados detalhados sobre o endereço IP consultado.
- **Leaflet.js**: Biblioteca de mapa interativo para exibir a localização do IP.
- **Vite**: Ferramenta de build que fornece desenvolvimento rápido e builds de produção otimizados.
- **CSS**: Para design e estilização da aplicação.

---

## 🚀 Demonstração ao Vivo

Confira a demonstração ao vivo do projeto [aqui](https://ip-adress-tracker-three.vercel.app).

---

## 🖥️ Como Começar

Para obter uma cópia local funcionando, siga estes passos simples.

### Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina local:

- **Node.js**: Baixe e instale a partir daqui](https://nodejs.org).
- **npm**: Gerenciador de pacotes do Node, que geralmente é instalado junto com o Node.js.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Lafaietepedro/Ip-Adress-Tracker.git

2. Navegue até o diretório do projeto:
   ```bash
    cd Ip-Adress-Tracker

3. Instale as dependências:
    ```bash
    npm install

4. Inicie o servidor de desenvolvimento:
     ```bash
     npm run dev

## Uso
1. Após iniciar o servidor de desenvolvimento, abra seu navegador e visite http://localhost:3000.
2. Digite qualquer endereço IP válido ou nome de domínio na barra de pesquisa.
3. A aplicação exibirá informações detalhadas sobre o endereço IP, incluindo sua localização no mapa.

## 🗺️ Integração com a API IPify

Este projeto utiliza a API IPify para recuperar informações relacionadas ao IP. Para usar a API, siga estes passos:
1. Cadastre-se no IPify e obtenha sua chave de API.
2. Crie um arquivo .env no diretório raiz do projeto.
3. Adicione a seguinte linha ao seu arquivo .env, substituindo SUA_CHAVE_API pela sua chave de API real:

    ```bash
    VITE_IPIFY_API_KEY=SUA_CHAVE_API
    
## 📁 Estrutura do Projeto
    ```bash
      Ip-Adress-Tracker/
      ├── public/                  # Ativos públicos e index.html
      ├── src/                     # Arquivos fonte da aplicação
      │   ├── assets/              # Imagens e outros ativos estáticos
      │   ├── components/          # Componentes React reutilizáveis
      │   ├── services/            # Serviço de API Axios
      │   ├── App.jsx              # Componente principal do app
      │   ├── main.jsx             # Ponto de entrada do React
      │   └── styles/              # Folhas de estilo CSS
      ├── .env                     # Variáveis de ambiente
      ├── package.json             # Dependências e scripts do projeto
      ├── vite.config.js           # Configuração do Vite
      └── README.md                # Documentação do projeto

## 📊 Melhorias Futuras
- Pesquisa de Domínio: Habilitar a aplicação para pesquisar domínios além de endereços IP.
- Localização do Usuário: Recuperar e exibir automaticamente o endereço IP e localização do próprio usuário ao carregar a página.
- UI Aprimorada: Melhorar o design da interface para melhor estética e usabilidade.
- Cache: Implementar cache para otimizar pesquisas repetidas do mesmo endereço IP.

## 🤝 Contribuindo
Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será muito apreciada.

1. Faça um fork do projeto.
2. Crie sua branch de funcionalidade: git checkout -b feature/FuncionalidadeIncrivel.
3. Faça commit das suas alterações: git commit -m 'Adicione alguma FuncionalidadeIncrivel'.
4. Faça push para a branch: git push origin feature/FuncionalidadeIncrivel.
5. Abra um pull request.

## 🧑‍💻 Contato
Lafaiete Pedro – lafaietepedro3@gmail.com

Link do Projeto: https://ip-adress-tracker-three.vercel.app

---

---

# IP Address Tracker

## 📖 Description

The **IP Address Tracker** is a web application that allows users to track the location of any IP address around the world. By utilizing the [IPify API](https://geo.ipify.org), the app retrieves precise information such as the IP's geographical location, Internet Service Provider (ISP), timezone, and displays the location on an interactive map powered by **Leaflet.js**.

This tool can be useful for developers, network administrators, or anyone curious to understand more about a particular IP address's origin.

---

## 🌟 Features

- **Search Functionality**: Search for any valid IP address or domain.
- **Interactive Map**: View the IP location on an interactive map.
- **Detailed Information**: Displays IP information like country, city, ISP, timezone, and coordinates (latitude & longitude).
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop devices.

---

## 🛠 Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: To handle API requests and fetch IP data.
- **IPify API**: Provides detailed data about the queried IP address.
- **Leaflet.js**: Interactive map library for displaying the IP location.
- **Vite**: Build tool that provides fast development and optimized production builds.
- **CSS**: For designing and styling the application.

---

## 🚀 Live Demo

Check out the live demo of the project [here]([https://your-demo-link.com](https://ip-adress-tracker-three.vercel.app)).

---

## 🖥️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed on your local machine:

- **Node.js**: Download and install it from [here](https://nodejs.org).
- **npm**: Node package manager, which is typically installed alongside Node.js.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Lafaietepedro/Ip-Adress-Tracker.git

2. Navigate to the project directory:
   ```bash
    cd Ip-Adress-Tracker

3. Install dependencies:
    ```bash
    npm install

4. Start the development server:
     ```bash
     npm run dev

## Usage
1. After starting the development server, open your browser and visit http://localhost:3000.
2. Enter any valid IP address or domain name in the search bar.
3. The application will display detailed information about the IP address, including its location on the map.

## 🗺️ IPify API Integration

This project utilizes the IPify API to retrieve IP-related information. To use the API, follow these steps:
1. Sign up at IPify and obtain your API key.
2. Create a .env file in the root directory of the project.
3. Add the following line to your .env file, replacing YOUR_API_KEY with your actual API key:

    ```bash
    VITE_IPIFY_API_KEY=YOUR_API_KEY
    
## 📁 Project Structure
    ```bash
      Ip-Adress-Tracker/
      ├── public/                  # Public assets and index.html
      ├── src/                     # Source files for the application
      │   ├── assets/              # Images and other static assets
      │   ├── components/          # Reusable React components
      │   ├── services/            # Axios API service
      │   ├── App.jsx              # Main app component
      │   ├── main.jsx             # Entry point for React
      │   └── styles/              # CSS stylesheets
      ├── .env                     # Environment variables
      ├── package.json             # Project dependencies and scripts
      ├── vite.config.js           # Vite configuration
      └── README.md                # Project documentation

## 📊 Future Improvements
- Domain Search: Enable the application to search for domains as well as IP addresses.
- User Location: Automatically retrieve and display the user's own IP address and location upon loading the page.
- Enhanced UI: Improve the UI/UX design for better aesthetics and usability.
- Caching: Implement caching to optimize repeated searches for the same IP address.

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the project.
2. Create your feature branch: git checkout -b feature/AmazingFeature.
3. Commit your changes: git commit -m 'Add some AmazingFeature'.
4. Push to the branch: git push origin feature/AmazingFeature.
5. Open a pull request.

## 🧑‍💻 Contact
Lafaiete Pedro – lafaietepedro3@gmail.com

Project Link: https://ip-adress-tracker-three.vercel.app
