# TBC x USAID

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Web browser (e.g., Chrome, Firefox)

### Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/lukabuts/TBC_x_USAID.git

   ```

2. Open the project directory:

```bash
  cd TBC_x_USAID
```

3. Open the `index.html` file in your preferred web browser.

# Technologies Used

This project leverages a combination of technologies to create a dynamic and visually appealing web application. The primary technologies include:

## 1. HTML (Hypertext Markup Language)

HTML is the standard markup language for creating web pages. Here's why HTML is an essential part of the project:

- **Structure:** HTML provides the structure for web pages, defining the content elements such as headings, paragraphs, images, and links.

- **Accessibility:** HTML offers built-in accessibility features, ensuring that content is accessible to users with disabilities and compliant with web accessibility standards.

- **Semantic Markup:** HTML5 introduces semantic elements like `<header>`, `<nav>`, `<section>`, `<article>`, and `<footer>`, which improve the structure and readability of the code while enhancing search engine optimization (SEO).

## 2. SCSS (Sass)

SCSS, or Syntactically Awesome Stylesheets, is a preprocessor scripting language that is interpreted or compiled into CSS. Here are some reasons why SCSS was chosen for styling:

- **Modularity:** SCSS allows for better organization and modularity in stylesheets through features like variables, mixins, and nested rules, leading to more maintainable and scalable code.

- **Variables and Mixins:** SCSS provides the ability to use variables and mixins, making it easier to manage and update common styles across the project.

- **Nested Syntax:** SCSS allows the use of nested syntax, which mirrors the HTML structure, enhancing readability and reducing repetition.

## 3. CSS (Cascading Style Sheets)

CSS is the standard styling language for web development. In this project, CSS is utilized for both standalone styles and styles generated from SCSS. Here's why CSS is an integral part:

- **Compatibility:** CSS is supported by all major web browsers, ensuring consistent styling across different platforms.

- **Flexibility:** While SCSS adds powerful features, direct CSS is also employed for simplicity and direct styling when necessary.

## 4. JavaScript (JS)

JavaScript is a versatile scripting language that adds interactivity and dynamic behavior to web pages. The project uses JavaScript for various functionalities. Here are the key reasons:

- **Interactivity:** JavaScript enables the creation of interactive elements on the webpage, enhancing the user experience.

- **DOM Manipulation:** JavaScript allows for dynamic manipulation of the Document Object Model (DOM), enabling real-time updates and responses to user actions.

- **Asynchronous Operations:** JavaScript supports asynchronous operations, such as fetching data from external sources, improving the overall performance and responsiveness of the application.

# Project Structure

The project follows a well-organized structure to maintain clarity and modularity. Below is an overview of the key folders and files:

## Folders and Files:

- **`src/data/`:** Contains JSON files (`data1.json`, `data2.json`, etc.) that store data used in the project.

- **`src/images/`:** Stores images used in the project (`image1.jpg`, `image2.png`, etc.).

- **`src/js/`:** Holds JavaScript files (`header.js`, `courses.js`, `partners.js`, `faq.js`, etc.) responsible for different functionalities.

- **`src/styles/`:** Manages styles for the project.

  - **`src/styles/css/`:** Compiled CSS files reside here (`styles.css`, etc.).

  - **`src/styles/scss/`:** Organized into subfolders.

    - **`components/`:** Contains individual SCSS files for styling components.

    - **`main/`:** Houses the main SCSS file (`style.scss`), acting as the entry point for styling.

    - **`module/`:** Stores SCSS files related to modules like resets, mixins, and variables.

- **`src/index.html`:** The main HTML file that serves as the entry point for the web application.

Feel free to explore the contents of each folder to understand the modular and organized structure of the project. This structure enhances maintainability and scalability while making it easier to locate and manage different aspects of the project.
