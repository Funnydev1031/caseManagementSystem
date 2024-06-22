
# Case Status Management Application

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

This project is a web application for managing the statuses of various cases. Built with React and Create React App, it provides a user-friendly interface to track, update, and manage cases efficiently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Funnydev1031/caseManagementSystem.git
   cd caseManagementSystem
   ```

2. **Install dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

Once the application is running, you can perform the following tasks:

- **Update Case Status:** Change the status of a case to reflect its current state.
- **Batch Update:** Change the status of multiple cases to reflect its current state.
- **Filter Cases:** View cases based on their status or other attributes.
- **Delete Case:** Remove cases that are no longer needed.
- **Search Cases:** Search All available cases.
- **Custome Columns:** Customize Table columns based on what you need.

## Features

- **Dynamic Status Updates:** Easily change the status of a case and see updates in real-time.
- **User-Friendly Interface:** Intuitive design for easy navigation and case management.
- **Search and Filter:** Quickly find cases using search and filter options.
- **Responsive Design:** Accessible on both desktop and mobile devices.

## Project Structure

The project's structure is as follows:

```
case-status-management/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── sider
│   │   ├── table
│   │   └── ...
│   ├── modules/
│   │   ├── cases
│   │   ├── layout
│   │   └── ...
│   ├── utils/
│   │   ├── queryString.js
│   │   └── ...
│   ├── lib/
│   │   ├── apiClient.js
│   │   └── ...
│   ├── hooks/
│   │   ├── useFetch.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

- **`public/`**: Static assets and entry HTML file.
- **`src/`**: Main source code including components, modules, hooks, utilities, and library integrations.
  - **`components/`**: Reusable components like table and sider.
    - **`Table.js`**: Component for displaying case data in a tabular format.
    - **`Sider.js`**: Component for the sidebar navigation.
  - **`modules/`**: Different module views for various parts of the application.
    - **`CaseModule.js`**: Module for managing cases.
  - **`hooks/`**: Custom hooks for reusable logic across components.
    - **`useFetch.js`**: Hook for data fetching logic.
  - **`utils/`**: Utility functions for common operations.
    - **`queryString.js`**: Utility to format query strings.
  - **`lib/`**: Library code and third-party integrations.
    - **`apiClient.js`**: API client for making HTTP requests.
  - **`App.js`**: Main application component.
  - **`index.js`**: Entry point for React.


## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production.
- **`npm run eject`**: Ejects the app to allow for customization of the build configuration.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Create React App**: Tool to set up a new React project with a default configuration.
- **React Router**: Library for routing in React applications.
- **Axios**: Promise-based HTTP client for making API requests.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

Please adhere to the [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Created by Toby. For questions or issues, please reach out via [toby.william.allen@outlook.com](mailto:toby.william.allen@outlook.com).


