# Use the official Playwright image matching your package version
FROM mcr.microsoft.com/playwright:v1.64.1-noble

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files and install packages
COPY package*.json ./
RUN npm ci

# Copy the rest of your test project files
COPY . .

# Default command to run your tests
CMD ["npx", "playwright", "test"]







# Match the tag to your exact @playwright/test version in package.json
#FROM ://microsoft.com

# Set the working directory inside the container
#WORKDIR /app

# Copy package files first to cache dependency installation
#COPY package.json package-lock.json ./
#RUN npm ci

# Copy your TypeScript config, tests, and source files
#COPY . .

# Run all Playwright tests by default
#CMD ["npx", "playwright", "test"]
