FROM openjdk:21-alpine

WORKDIR /app

ARG JAR_FILE=build/libs/muzip-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} muzip.jar

ENTRYPOINT ["java", "-jar", "muzip.jar"]