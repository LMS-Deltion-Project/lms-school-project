# Alpine version to get gain access to a repository that allows us to debug stuff from within the container, if necessary.
FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine AS build

WORKDIR /api

COPY ./services/api ./

# Installs Entity Framework, related CLI tools and the PostgreSQL driver.
RUN dotnet tool install --global dotnet-ef
RUN dotnet add package Microsoft.EntityFrameworkCore
RUN dotnet add package Microsoft.EntityFrameworkCore.Analyzers
RUN dotnet add package Microsoft.EntityFrameworkCore.Design
RUN dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
RUN dotnet restore

# Adds the Entity Framework CLI tools to our path.
ENV PATH="${PATH}:/root/.dotnet/tools"

# No hot-reload to get full coverage of our changes. Takes longer to build.
CMD [ "dotnet", "watch", "--no-hot-reload" ]
