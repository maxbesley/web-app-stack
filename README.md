# Simple Web App Stack


## Tech Stack and Requirements

- [TypeScript](https://typescriptlang.org)
- [Deno](https://deno.com)
- [Caddy](https://caddyserver.com)
- [Docker Compose](https://docs.docker.com/compose)
- [GitHub Actions](https://github.com/features/actions)

## Running locally


## Deployment

1. Provision a VPS and install Docker Compose on it

2. In the GitHub repo go to `Settings -> Secrets and variables -> Actions`
   and create four repository secrets for the [SSH GitHub Action](https://github.com/appleboy/ssh-action)

3. On the VPS place your Cloudflare Origin CA certificate and private key in
   `/etc/ssl/certs/certificate.pem` and `/etc/ssl/private/key.pem`, repectively

4. If needed change the domain name used in the Caddyfile

5. Manually run the 'Build Docker image and push to registry' and
   'Deploy Docker Compose to a VPS' workflows


## License

This code is made available under the [MIT License](https://opensource.org/licenses/MIT).
