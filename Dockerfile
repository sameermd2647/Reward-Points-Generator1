# Use an official Node.js runtime as a base image
FROM node:20.10.0

# Set the working directory in the container
WORKDIR /user/Desktop/RECEIPT_PROCESSOR

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port on which your app will run
EXPOSE 5000

# Define the command to run your application
CMD ["npm", "start"]
