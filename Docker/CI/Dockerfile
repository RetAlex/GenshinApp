FROM tomcat:9-jdk11

ADD build/GI.war /usr/local/tomcat/webapps/ROOT.war
ADD build/server.xml /usr/local/tomcat/conf/server.xml
ADD build/docker-entrypoint.sh /usr/local/docker-entrypoint.sh

RUN chmod -R 777 /usr/local/docker-entrypoint.sh

ENTRYPOINT /usr/local/docker-entrypoint.sh