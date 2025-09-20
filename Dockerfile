FROM denoland/deno:2.3.7

WORKDIR /app

COPY app .

RUN deno cache main.ts

EXPOSE 9000

CMD ["deno", "run", "--allow-net", "main.ts"]
