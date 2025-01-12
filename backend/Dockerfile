FROM node:18-alpine

WORKDIR /app

# Add netcat and bash for scripts
RUN apk add --no-cache netcat-openbsd bash

COPY package*.json ./
RUN npm install

# Copy scripts first and set permissions
COPY ./scripts/docker-healthcheck.sh /usr/local/bin/docker-healthcheck
COPY ./scripts/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-healthcheck \
    && chmod +x /usr/local/bin/docker-entrypoint

# Copy rest of the application
COPY . .

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD docker-healthcheck

ENTRYPOINT ["/usr/local/bin/docker-entrypoint"]
CMD ["npm", "run", "dev"]
