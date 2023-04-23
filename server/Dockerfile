FROM node:alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY ./ ./

# ENV MONGODB_URI=mongodb://localhost:27017/hotelmanagement
# ENV BASE_URL=http://localhost:4000
# ENV PORT=4000
# ENV IP=localhost

EXPOSE 4000

CMD ["npm", "start"]