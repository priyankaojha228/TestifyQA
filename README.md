# 🧪 TestifyQA - Bug Tracking and QA Automation Project

TestifyQA is a **comprehensive bug tracking and quality assurance (QA) platform** that streamlines the process of tracking, managing, and resolving software bugs. This project demonstrates strong **testing automation** skills, **bug tracking methodologies**, and practical use of **modern testing tools** like **Cypress**, **Postman**, and **Jest** for building a robust QA system.

---

## 🚀 **Project Overview**

TestifyQA is a **full-stack web application** that provides a centralized platform for tracking bugs during the software development lifecycle. It showcases:

- **Bug Tracking Dashboard** to manage and visualize bugs.
- **Automated API and UI Testing** using **Cypress** and **Jest**.
- **Real-time Bug Reporting** with a dynamic table to display bug statuses.
- **Role-Based User Management** for assigning bugs to different team members.
- **RESTful APIs** for CRUD operations on bug data.
- **Modern Frontend Design** using **React.js**.
- **Backend API** built with **Node.js** and **Express**.
- **MongoDB Database** for storing bug reports.

---

## 🎯 **Key Features**

- ✅ Bug Tracking Dashboard with status updates.
- ✅ RESTful API integration for bug management.
- ✅ Automated testing using **Cypress**, **Jest**, and **Postman**.
- ✅ Priority and status-based bug filtering.
- ✅ Error handling and user-friendly messages.
- ✅ Fully responsive and modern UI.
- ✅ Secure API endpoints.

---

## 🎯 **Core Functionalities**

| **Feature**              | **Description**                                    |
|--------------------------|----------------------------------------------------|
| 🐛 **Bug Dashboard**      | View all bugs with their statuses and priorities.  |
| 📋 **Bug List**           | View detailed bug reports.                        |
| ✅ **Automated API Tests** | Ensure backend API is working as expected.        |
| 💻 **UI Tests (Cypress)** | Ensure frontend UI is user-friendly and functional. |
| 🔐 **User Authentication** | Role-based access to the bug tracker.             |

---

## 📚 **Tech Stack**

| **Category**     | **Technology**                  |
|------------------|---------------------------------|
| Frontend         | React.js                        |
| Backend          | Node.js, Express.js             |
| Database         | MongoDB                         |
| Testing Tools    | Cypress, Jest, Postman          |
| API Testing      | Postman, REST Assured           |
| Automation Tools | Selenium (future scope)         |
| UI Design        | CSS, HTML, Bootstrap            |

---

## 🎨 **Screenshots**

Below are the key screenshots of the **TestifyQA** platform to give a visual representation of the project.

### 📌 **Bug Tracker Dashboard**
The main dashboard displays all the bugs, their statuses, priorities, and assignees.

![image](https://github.com/user-attachments/assets/b1f68920-11c2-4298-b13a-a3c9fd99f2df)


---

### 📌 **Bug List**
A detailed view of the reported bugs with essential information like the bug title, status, and assigned personnel.

![image](https://github.com/user-attachments/assets/de2d92bd-7e57-43eb-93e6-b62b644fcf46)


---

## 🧪 **Testing Approach**

The **TestifyQA** project focuses heavily on **automated testing** to ensure the quality and reliability of the application. Below are the testing tools and strategies used:

### 1️⃣ **Unit Testing (Jest)**
- Written for backend routes to ensure API endpoints are working correctly.
- Validates user creation, login, and bug CRUD operations.

### 2️⃣ **End-to-End Testing (Cypress)**
- Automated tests for the **frontend UI** to ensure a smooth user experience.
- Covers critical workflows like **dashboard rendering**, **bug creation**, and **navigation**.

### 3️⃣ **API Testing (Postman)**
- Postman collections for testing the **RESTful APIs**.
- Validates CRUD operations for bug management.

### 🧪 **Example Cypress Test Case**

```javascript
describe('Dashboard Tests', () => {
  it('should display the Bug Tracker title', () => {
    cy.visit('/');
    cy.contains('Welcome to the Bug Tracker Dashboard');
  });

  it('should navigate to the Bug List page', () => {
    cy.visit('/');
    cy.get('a').contains('View Bug List').click();
    cy.url().should('include', '/bugs');
    cy.contains('Bug List');
  });
});
