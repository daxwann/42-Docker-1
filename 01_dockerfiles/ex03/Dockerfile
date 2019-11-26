FROM debian

RUN apt-get update && \
    apt-get -y upgrade && \
		apt-get -y install wget openssh-server ca-certificates postfix

RUN wget https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh && \
		chmod 777 script.deb.sh && ./script.deb.sh

RUN apt-get install -y gitlab-ce tzdata && \
    apt update && apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN echo "grafana['enable'] = false" >> /etc/gitlab/gitlab.rb

EXPOSE 443 80 22

ENTRYPOINT (/opt/gitlab/embedded/bin/runsvdir-start &) && sleep 1 && gitlab-ctl reconfigure && tail -f /dev/null
