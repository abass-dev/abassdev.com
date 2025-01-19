# Use Node 20 Alpine as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Install git and other necessary tools
RUN apk add --no-cache openssh

RUN ln -s /usr/lib/libssl.so.3 /lib/libssl.so.3
# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set ownership and permissions
RUN chown -R appuser:appgroup /app

# Copy package.json and package-lock.json (if available)
COPY --chown=appuser:appgroup package*.json ./

# Install dependencies as root
RUN npm install --legacy-peer-deps

# Create .next directory with correct permissions
RUN mkdir -p .next && chown -R appuser:appgroup .next && chmod -R 755 .next

# Copy the rest of the application code
COPY --chown=appuser:appgroup . .

# Build the Next.js application as root
# RUN npm run build

# Change ownership of all files to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
