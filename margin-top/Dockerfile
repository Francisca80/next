# Stage 1: Build the application
FROM node:23-alpine AS builder

# Install dependencies only when needed
RUN apk add --no-cache libc6-compat

# Set the working directory inside the container
WORKDIR /app

# Copy package files
COPY package*.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Set environment variables to prevent database connections during build
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=src/payload.config.ts
ENV PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
ENV PAYLOAD_SECRET=temp_secret_for_build_only
ENV MONGODB_URI=mongodb://localhost:27017/dummy

# Build the Next.js app
RUN npm run build

# Stage 2: Set up the production environment
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Set environment variables for runtime
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder --chown=nextjs:nodejs /app/package*.json ./
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/server.js ./server.js
COPY --from=builder --chown=nextjs:nodejs /app/payload.config.ts ./payload.config.ts

# Switch to non-root user
USER nextjs

# Expose the port
EXPOSE 3000

# Start the custom server
CMD ["node", "server.js"]
