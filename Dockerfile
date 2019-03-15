FROM node:10
COPY package.json yarn.lock ./
RUN npm install -g yarn
RUN yarn install
COPY index.js ./
CMD ["node", "./index.js"]