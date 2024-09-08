# IP Address Tracker

## 📖 Description

The **IP Address Tracker** is a web application that allows users to track the location of any IP address around the world. By utilizing the [IPify API](https://geo.ipify.org), the app retrieves precise information such as the IP’s geographical location, Internet Service Provider (ISP), timezone, and displays the location on an interactive map powered by **Leaflet.js**.

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

## 📝 License
Distributed under the MIT License. See LICENSE for more information.

## 🧑‍💻 Contact
Lafaiete Pedro – lafaietepedro3@gmail.com

Project Link: https://github.com/Lafaietepedro/Ip-Adress-Tracker
