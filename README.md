## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

## Library
```bash

```

## docker install

```bash
docker run --name=backend-mysql --hostname=43f2d005b17a --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=GOSU_VERSION=1.16 --env=MYSQL_MAJOR=innovation --env=MYSQL_VERSION=8.3.0-1.el8 --env=MYSQL_SHELL_VERSION=8.3.0-1.el8 --volume=/var/lib/mysql --restart=no --runtime=runc -e MYSQL_ROOT_PASSWORD=root -d mysql
```

or

```bash
docker-compose up -d
```
