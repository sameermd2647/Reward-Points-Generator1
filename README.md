Receipt Processor

Project Description

The Receipt Processor is a web service that allows users to submit receipts and calculates reward points based on specific rules. The application is built using Node.js and Express.js, making it lightweight and easy to deploy. This project is designed to store receipt data in memory without database persistence.

How the Project Works

A user submits a receipt via a POST request.

The system generates a unique receipt ID and stores the receipt.

The user can later retrieve the points earned from that receipt using a GET request.

Steps to Create This Project Locally

Since you're building this project locally without cloning from GitHub, follow these steps:

1. Set Up Your Project Folder

Create a new folder named receipt-processor on your local computer.

Open a terminal and navigate to the folder:

'''sh
mkdir receipt-processor
cd receipt-processor

2. Initialize a Node.js Project

Run the following command to create a package.json file:

'''sh
npm init -y

3. Install Dependencies

Install Express.js and Body-parser:

'''sh
npm install express body-parser

4. Create Project Files

Create the following files inside the receipt-processor folder:

index.js → Main application entry file.

'''sh
routers/receiptRouter.js → Handles API requests.

'''sh
services/receiptService.js → Contains receipt processing logic.

You can manually create these files using a text editor like VS Code or use:

touch index.js routers/receiptRouter.js services/receiptService.js

5. Implement the Application

Open index.js and add the Express server setup.

Implement the receipt processing logic inside receiptService.js.

Define API routes inside receiptRouter.js.

6. Run the Application

To start the server, use:

node index.js

The server will run on port 5000 by default.

![image](https://github.com/user-attachments/assets/8743f87c-edef-4303-8af2-5110866dc542)

Key Features

Process Receipts: Submit a receipt and receive a unique ID.

Retrieve Points: Check how many points were earned from a receipt.

In-Memory Storage: Data is stored in memory and resets upon restart.

This project serves as a simple backend API for receipt processing, making it ideal for learning RESTful APIs, Express.js, and Node.js development.

License

This project is open-source and available under the MIT License.

