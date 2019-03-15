FROM node:10
COPY package.json yarn.lock ./
RUN yarn install
COPY index.js ./
CMD ["node", "./index.js"]