FROM openjdk:21

WORKDIR /app

ARG JAR_FILE=muzipback/build/libs/muzip-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} muzip.jar

ENTRYPOINT ["java", "-jar", "muzip.jar"]