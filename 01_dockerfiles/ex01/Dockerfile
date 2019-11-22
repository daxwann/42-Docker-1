FROM debian

WORKDIR /home/teamspeak

EXPOSE 9987/udp 30033 10011

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y wget bzip2 && \
    wget https://files.teamspeak-services.com/releases/server/3.10.2/teamspeak3-server_linux_amd64-3.10.2.tar.bz2 && \
    tar xfv teamspeak3-server_linux_amd64-3.10.2.tar.bz2 && \
    mv ./teamspeak3-server_linux_amd64/* . && \
    rm -rf teamspeak3-server_linux_amd64-3.10.2.tar.bz2 && \
    touch .ts3server_license_accepted

ENTRYPOINT sh ts3server_minimal_runscript.sh
