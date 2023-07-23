FROM node:20-alpine

COPY npm_install.sh /home/node/npm_install.sh
RUN chmod a+x /home/node/npm_install.sh

WORKDIR /app

CMD /home/node/npm_install.sh \
  && \
  npm run dev
