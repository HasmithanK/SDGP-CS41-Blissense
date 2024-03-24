FROM maven:3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/Login-Register-0.0.1-SNAPSHOT.jar Login-Register.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "Login-Register.jar"]