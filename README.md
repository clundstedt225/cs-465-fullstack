# cs-465-fullstack
SNHU fullstack development with M.E.A.N

- Architecture
  
For this project, I employed HTML and JavaScript through Express and Angular for my frontend architecture. On the customer-facing side, I crafted HTML documents with JavaScript to present data served by Express. Following the MVC architecture, pages loaded sequentially as users requested them. On the admin-facing side, I utilized Angular and created multiple components that were dynamically loaded within the same HTML document. These components were preloaded, ensuring a seamless experience for administrators. Instead of fetching new pages, the necessary code was already on the client side, ready to be executed. For the backend, I leveraged MongoDB—a NoSQL database that integrates well with Node.js. Its document storage in BSON format facilitates smooth conversion to JSON.

- Functionality
  
In this project, I harnessed JSON for data storage and display. JSON is commonly used for transmitting data to and from servers, providing a user-friendly object format. JavaScript, a widely used language, allowed me to manipulate webpage behavior. As previously mentioned, MongoDB stores data in BSON, a binary JSON format. By pulling data via the MongoDB driver and reformatting it to JSON, we bridged the gap between backend and frontend. I particularly appreciated using Handlebars for programmatic data display; its simplicity contributed to efficient code. Additionally, in Angular, I employed an ngFor directive within a template, making it easy to display query data with minimal code. Angular’s component efficiency allowed us to reuse child components as templates, enhancing overall development.

- Testing & Security

In our project, we prioritized security by encrypting passwords and using hashes on the admin side. This prevented raw passwords from being transmitted to and from the database. Additionally, we created well-defined database interfaces to prevent attacks like SQL injection. By thoroughly checking user and admin permissions before allowing specific actions via the API, we ensured granular access control.

- Reflection on Full Stack Development
  
Full stack development can be overwhelming due to the multitude of frameworks and stacks available. However, our course provided a valuable learning experience by focusing on a single stack throughout an entire project. This dedication allowed us to delve deep into Node.js, MongoDB, and Express, gaining a comprehensive understanding of how these components work together to create a flexible development environment.
