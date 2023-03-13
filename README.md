# QuizPlanet

Challenge your knowledge with QuizPlanet.

![QuizPlanet Logo](qp01.png)

## Getting Started

### Requirements

- Ruby 3.2.1
- Postgresql

### Initial setup

Start postgresql server.

```bash
sudo service postgresql start
```

Copy the contents of `.env.template` file to a file named `.env` and replace the values with those consistent with your local development environment.

```bash
cp .env.template .env
```

An installation script is included with the repository that will automatically get the application setup.

```bash
bin/setup
```

## Development

Run the following to start the server.

```bash
bin/rails server
```

### Seeds

Seed the database using either `bin/rails db:seed` or during `bin/setup`.
