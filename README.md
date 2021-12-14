# Start a mysql server instance

[Reference](https://hub.docker.com/_/mysql)

Starting a MySQL instance is simple:

```
$ docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag

# example:
 docker run -itd --rm --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:8
```

where some-mysql is the name you want to assign to your container, my-secret-pw is the password to be set for the MySQL root user and tag is the tag specifying the MySQL version you want. See the list above for relevant tags.

* `--name` : Assign a name to the container.
* `-e` : Set environment variables.
* `-d` :  --detach. Run container in background and print container ID
* `--rm` : Automatically remove the container when it exits
* `-t` : Allocate a pseudo-TTY
* `-i` : Keep STDIN open even if not attached

## docker command

* How to show the running containers ?
* How to show all containers ?
```
docker ps [-h]
```

* How to show all local images ?
* How to remove the seleced images ?
```
docker images [-h]
```

* How to create a contanier using a specific image ?
```
docker run
```

* How to entry a running container ?
```
docker exec
```

* How to pull a docker image from docker hub ?
```
docker pull
```

* How to push a docker image from docker hub ?
```
docker push
```

* How to stop a running container ?

Start one or more stopped containers
```
docker stop 
```

* How to start a stoped container ?


