FROM node:11-alpine

ENV color="\e[32m" \
    reset_color="\e[0m"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

# Install dependency
RUN yarn

# Bundle app source
COPY . .

# Build project
RUN npm run build

EXPOSE 8080

CMD npm run serve
