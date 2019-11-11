# Base image
FROM node:11

# Setting the directory in the container we're working in
WORKDIR /web

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source into project
COPY . .

# Running the server
CMD [ "npm", "start" ]
