FROM node:20-alpine

WORKDIR /app

COPY backend/package.json ./package.json
RUN npm install --omit=dev

COPY backend/index.js ./index.js

ENV PORT=5000
EXPOSE 5000

CMD ["npm", "start"]
