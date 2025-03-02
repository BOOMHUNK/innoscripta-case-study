FROM node:16-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the project files
COPY . .

# Set environment variables to override .env values
ENV VITE_NEWS_API_BASE_URL="https://eventregistry.org/api/v1"
ENV VITE_NEWS_API_KEY="a85611ba-364f-4d29-8181-83923f6721f0"
# we can use the one below if we hit the limit on the top one
# ENV VITE_NEWS_API_KEY="2c3f16a1-5196-40b9-ab3b-4036223e1938"

ENV VITE_NEWS_API_ORG_BASE_URL="https://newsapi.org/v2"
ENV VITE_NEWS_API_ORG_KEY="0182423da7f4464a8a7240fc492a2b24"
# we can use the one below if we hit the limit on the top one
# ENV VITE_NEWS_API_ORG_KEY="e3c0800b8a244f0fbbd63e5e988d3274"

ENV VITE_GUARDIAN_BASE_URL="https://content.guardianapis.com"
# ENV VITE_GUARDIAN_KEY="test"
# In case of prefering to test with a legit key use the one below for "the guardian"
ENV VITE_GUARDIAN_KEY="3d45b88b-68c6-4a0e-aabd-8ff0ac2e6f17"


# Feature Flags to enable/disable API sources at build time 
ENV VITE_FF_USE_NEWS_API="true"
ENV VITE_FF_USE_NEWS_API_ORG="true"
ENV VITE_FF_USE_GUARDIAN_API="true"

ENV PORT=3000

# Build the production version of the app
RUN npm run build

# Expose Vite's preview port (default is 4173 but we changed it to 3000)
EXPOSE 3000

# Run Vite's production preview server
CMD ["npm", "run", "preview", "--", "--host"]
