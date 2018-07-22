# Seans ReactJS Java Spring Hibernate MySQL Boilerplate

*Comes Dockerised and with Unit Testing*

## To Start

`docker-compose up -d`

then visit

`https://localhost:8443/`

## Note about docker toolbox on windows 10

If you use docker toolbox on windows 10 home, the site will be published at ip 192.168.99.100.
- You should open the VBox manager,
- Click the default machine used by docker
- Right click and choose Settings
- Network > Adapter 1 > Advanced > Port Forwarding
- Click "+" to add a new Rule
- Set Host IP to 127.0.0.1, Host Port 8443
- Guest IP to 192.168.99.100 and Guest Port 8443

![Screenshot](homeScreenshot.png)

## The running project consists of 

* Nginx Proxy hosting the compiled ReactJS App
* Nginx Proxy redirecting /api calls to the Java Spring API
* Java Spring-Boot JPA Hibernate Rest API running in TomCat
* MySQL database


## Mocha, Chai and Enzyme tests

`cd react`

`npm test`

## Protractor e2e tests

There is also the option to do e2e testing with protractor and jasmine.
Before you start, you need to install protractor

`cd react`

`npm install -g protractor`

then, update the web driver

`npm run update-webdriver`

Now you can run

`npm run protractor`

![protractor screenshot](protractorScreenshot.png)
