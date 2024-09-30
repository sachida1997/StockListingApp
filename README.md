# Stock Listing Application

Welcome to the Stock Listing Application - a microservices-based architecture designed to provide a scalable and robust solution for managing user profiles, authentication, stock listing, and Wishlisting.

## Microservices

### 1. API Gateway

The API Gateway serves as the entry point for all external requests. It efficiently routes incoming requests to the appropriate microservices and handles load balancing, ensuring optimal performance.

### 2. Config Server

The Config Server centralizes configuration management for all microservices. It allows for dynamic configuration updates without requiring service restarts, providing flexibility and scalability.

### 3. Eureka Server

Eureka Server implements service discovery and registration. It enables microservices to discover and communicate with each other seamlessly, fostering a highly dynamic and scalable environment.

### 4. Userprofile Service

Userprofile Service is responsible for managing user profiles. It acts as a Kafka producer, pushing user registration data to a Kafka topic, facilitating asynchronous communication with the Authentication Service.

### 5. Authentication Service

Authentication Service acts as a Kafka consumer, consuming user registration data from the Kafka topic. It securely stores user authentication details in a MySQL database, ensuring data integrity and confidentiality.

### 6. Stocklisting Service

Stocklisting Service fetches stock information from a third-party API (such as https://api.twelvedata.com/stocks) based on country names. It provides real-time stock data, ensuring users have access to the latest market information.

### 7. Wishlist Service

Wishlist Service allows users to save their favorite stocks into a MySQL database for future reference. It ensures data persistence and enables users to manage their preferred stocks conveniently.

## Technical Details

### Kafka Integration

Userprofile Service and Authentication Service leverage Kafka for seamless communication. User registration data is efficiently transmitted via Kafka topics, providing a decoupled and fault-tolerant architecture.

### Third-Party API Integration

Stocklisting Service integrates with a third-party API (e.g., Twelve Data) to fetch stock information by country name. This asynchronous data retrieval ensures up-to-date and accurate stock details.

### Database Management

MySQL databases are used for persistent data storage, ensuring reliability and data consistency across microservices. Proper indexing and schema design are implemented for optimal performance.

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/stock-listing-app.git
    ```

2. **Build and Run Microservices:**

    Follow the README instructions in each microservice's directory to build and run the services.

3. **Configure Application Properties:**

    Update the application.properties or application.yml files in each microservice's src/main/resources directory with the appropriate configurations, including Kafka server details, database connection strings, and third-party API keys.

4. **Start Microservices:**

    Start each microservice in the correct order (Eureka Server, Config Server, API Gateway, Userprofile Service, Authentication Service, Stocklisting Service, and Wishlist Service).

5. **Explore Endpoints:**

    Use the provided API documentation to explore available endpoints and interact with the microservices.

## Contributing

Thank you for considering contributing to the Stock Listing Application! Follow the guidelines in CONTRIBUTING.md to help us enhance and grow this project.

## Issues and Bug Reports

If you encounter any issues or want to report a bug, please open an issue on the GitHub repository. Provide detailed information about the problem, including steps to reproduce and your system configuration.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

---

**Happy Coding!**
