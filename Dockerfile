FROM node:10.15.0 as builder

# Create working directory
RUN mkdir -p /root/src/app
WORKDIR /root/src/app
ENV PATH /root/src/app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json
COPY . .

# Fetch dependencies, run script optimize images, build
RUN yarn
RUN npm run build

# Copy files to machine
FROM nginx:1.15

WORKDIR /root/src/app

COPY --from=builder /root/src/app/dist/fptu-sdk.js /usr/share/nginx/html/fptu-sdk.js

EXPOSE 80

# This is docker build command: 
# docker build -t fptu-sdk .

# This is docker run command:
# docker run -d --name fptu-sdk -p 3000:80 fptu-sdk:latest