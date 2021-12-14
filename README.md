
# docker command

## Day 01

## 1. How to create a contanier using a specific image ?
```
docker run 
```

* `--name` : Assign a name to the container.
* `-e` : Set environment variables.
* `-d` :  --detach. Run container in background and print container ID
* `--rm` : Automatically remove the container when it exits
* `-t` : Allocate a pseudo-TTY
* `-i` : Keep STDIN open even if not attached

<br>

## 2. How to show all local images ?
```
docker images [-h]
```

<br>

## 3. How to show the running containers ?
```
docker ps [-h]
```

<br>

## 4. How to show all containers ?
```
docker ps [-h]
```

<br>

## 5. How to remove the selected images ?
```
docker image rm [-h]

docker rmi [-h]
```

<br>

## 6. How to stop a running container ?

```
docker stop [-h]
```

<br>

## 7. How to start a stoped container ?
```
docker start [-h]
```

## 8. How to entry a running container ?
```
docker exec [-h]
```

<br>

## 9. How to remove all stopped container in one command ?
```
docker rm $(docker ps -f status=exited -q)  
```
[Reference](https://docs.docker.com/engine/reference/commandline/rm/#remove-all-stopped-containers)

---

## Day 02

## Start a mysql server instance using docker

[DockerHub](https://hub.docker.com/_/mysql)

[Docker 安装 MySQL](https://www.runoob.com/docker/docker-install-mysql.html)


Starting a MySQL instance is simple:

```
$ docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag

# example:
 docker run -itd --rm --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:8
```

0. Create a develop user account for service

1. password 不能用
```
ALTER USER ...
```

2. CREATE TABLE 
```sql
# users.sql

CREATE TABLE Users
...
```

3. INSERT Data INTO Table


---
## Day 03

Write `Dockerfile` to create a custom local mysql database with service table and testing data.


```
docker build [-h]
```


* How to push a docker image to docker hub with tag ?
```
docker push [-h]
```

* How to pull a docker image from docker hub ?
```
docker pull [-h]
```


---

## Day04

