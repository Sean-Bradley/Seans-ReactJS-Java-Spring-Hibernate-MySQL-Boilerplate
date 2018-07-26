FROM maven:3.5-jdk-8

#FROM java:8
#VOLUME /java
#ADD target/javaSpringRestAPI-0.0.1-SNAPSHOT.jar app.jar
#RUN ls
#RUN bash -c 'mvn package'
#touch /app.jar'
#ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/javaSpringRestAPI-0.0.1-SNAPSHOT.jar"]

#FROM tomcat:8.0.20-jre8
#RUN mkdir /usr/local/tomcat/webapps/myapp
#ADD target/javaSpringRestAPI-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/myapp/myapp.war
#ADD ./target/javaSpringRestAPI-0.0.1-SNAPSHOT.war $CATALINA_HOME/webapps/ROOT.war
#ADD tomcat-users.xml $CATALINA_HOME/conf
#ADD manager.xml $CATALINA_HOME/conf