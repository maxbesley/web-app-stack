# Simple Web App Stack

This codebase provides the skeleton for a full stack web
application, including a reverse proxy, SSL certificate
solution, and automatic CI/CD triggered by git activity.

> **NOTE:**
> The solution here *does* introduce downtime.
> This is because the command `docker compose up` does
> not natively support zero-downtime deployments.
> To solve this issue we could use the `docker stack deploy`
> command, or use [Dokku](https://dokku.com) for a
> solution that is more robust and managed.


## Tech Stack and Requirements

- [TypeScript](https://typescriptlang.org)
- [Deno](https://deno.com)
- [Caddy](https://caddyserver.com)
- [Docker Compose](https://docs.docker.com/compose)
- [GitHub Actions](https://github.com/features/actions)


## Running locally

To locally work on and test the website run:

```
cd app
deno task dev
```


## Deployment Guide

1. Provision a VPS and install **Docker Compose** on it.

2. In the GitHub repo go to `Settings -> Secrets and variables -> Actions` and create the four
   required repository secrets for the [SSH GitHub Action](https://github.com/appleboy/ssh-action).

3. On the VPS place your Cloudflare Origin CA certificate and private key in the
   files `/etc/ssl/certs/certificate.pem` and `/etc/ssl/private/key.pem`, respectively.

4. If needed, change the domain name used in the **Caddyfile** to a different domain name.

5. Manually run the "*Build Docker image and push to registry*" and
   "*Deploy Docker Compose to a VPS*" workflows through GitHub's website.

6. Verify that the deployment worked using [curl](https://curl.se) and a web browser.


## License

This code is made available under the [MIT License](https://opensource.org/licenses/MIT).
