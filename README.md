# Visual Finance - A Stock Tracking Tool with Visualization
[Visual Finance Website](https://visualfinance.pro)

## Introduction

Welcome to Visual Finance! This project provides you with a stock tracking tool enriched with data visualization capabilities. Whether you're an investor or simply interested in monitoring financial markets, our platform is designed to help you gain insights into stock trends.

## Technologies Used

This project leverages a stack of modern technologies:

- **Front-end**: Built with **React** for the user interface.
- **UI Components**: Utilized **Material-UI (MUI)** for designing UI components.
- **Data Fetching**: Made HTTP requests using **Axios**.
- **Back-end**: Powered by **Java** and **Spring Boot**.
- **Database**: Data is stored and managed using **PostgreSQL**.
- **State Management**: Utilized **Redux** for state management.

## Features

- **Stock Tracking**: Monitor the latest stock prices, trends, and historical data for your favorite companies.
- **Interactive Visualization**: Explore stock data through interactive charts and visualizations.
- **Top 100 Crypto Tracking**: Grab the real-time changes in crypto prices, supply, and other metrics in one click.
- **Personal Portfolio**: Create and manage your stock portfolio to track your investments.
- **User Accounts & Authentication**: Create your user account to personalize your stock tracking experience.
- **News & Insights**: Stay updated with the latest financial news and insights.
- **User Community**: Engage with a community of investors and share your stock analysis.

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local directory:
# Install front-end dependencies
```bash
git clone https://github.com/carlinchoi/visual-finance.git
```
2. Navigate to the project's root directory and install the required dependencies for the front-end (React) and back-end (Java/Spring Boot):
```bash
   cd frontend
   npm install
```
3. Navigate to the `java/database` folder and run the command to create the database and tables:
```bash
./create.sh
```
4. Edit the `application.properties` file in the `java/src/main/resources` folder with your database credentials.

5. Run the following command in the `java` folder of the project to start the back-end server:
```bash
mvn spring-boot:run
```
6. Navigate to the `frontend` folder and run the following command to start the front-end server:
```bash
npm start
```
7. Open your browser and go to `http://localhost:8080` to access the web application.

## Demo

You can experience a live demo of this project by visiting the [Visual Finance Website](https://visualfinance.pro).

## License

This project is licensed under the MIT License. For more details, please refer to the [LICENSE](LICENSE) file.

We hope you enjoy using our platform and consider contributing to the welfare of animals in need. Feel free to explore, adopt, and share your stories with the community!
