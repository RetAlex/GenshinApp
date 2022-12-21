sed -i "s/%%APPLICATION_PORT%%/${PORT}/" /usr/local/tomcat/conf/server.xml

echo "Using port ${PORT} in server.xml"

sh /usr/local/tomcat/bin/catalina.sh run