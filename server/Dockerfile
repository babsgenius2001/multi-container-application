# It will pull the node:18-alpine image from Docker Hub and use it as the parent image for the Node.js application container.
FROM node:18-alpine

# This command will install nodemon for monitoring the Express server
RUN npm install -g nodemon

# It will set the working directory `app` for the Docker container
WORKDIR /app

# It will copy all dependencies files from the package.json file to the container working directory
COPY package.json .

#It will install all the libraries and dependencies in the container working directory
RUN npm install

#It will copy all the files and source code to the working directory
COPY . .

#It will expose the Node.js application container on Docker
EXPOSE 4000

#It will start and run the Docker application container
CMD ["npm", "run", "dev"]