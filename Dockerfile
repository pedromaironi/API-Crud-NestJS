# Dockerfile

FROM mongo:latest
ENV MONGO_INITDB_ROOT_USERNAME pedromaironi
ENV MONGO_INITDB_ROOT_PASSWORD 2171983
COPY init-mongo.js /docker-entrypoint-initdb.d/