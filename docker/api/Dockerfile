# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine AS build

WORKDIR /api

# copy csproj and restore as distinct layers
# COPY *.sln .
# COPY aspnetapp/*.csproj ./aspnetapp/
# RUN dotnet restore

COPY ./services/api ./

RUN dotnet tool install --global dotnet-ef
RUN dotnet add package Microsoft.EntityFrameworkCore
RUN dotnet add package Microsoft.EntityFrameworkCore.Analyzers
RUN dotnet add package Microsoft.EntityFrameworkCore.Design
RUN dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL

# Adds the Entity Framework CLI tools to our path.
ENV PATH="${PATH}:/root/.dotnet/tools"

CMD [ "dotnet", "watch", "--no-hot-reload" ]
