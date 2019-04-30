### Server Folder

## Install Node

https://nodejs.org/en/
เมื่อเราทําการติดต้ังโปรแกรม nodejs ลงในเคร่ืองคอมพิวเตอร1ของเรา มันจะทํา การติดต้ัง npm มาให'เราด'ว

## Install Git

หากราไม่มีโปรแกรม git ในเครื่องเรา สามารถทําการ download ได้จาก https://git-scm.com/ จากนั้นทําการ download และติดตั้ง ตาม OS ท่ีเราใช้งาน

## Check version

> node -v
> v10.15.1

> npm -v
> 6.4.1

if need update npm

> sudo npm install -g npm

> git --version
> git version 2.21.0

> vue --version
> 3.6.3

## Check version

> node -v
> v10.15.1

> npm -v
> 6.4.1

## Run Node server

- root

  > node server

- root
  > cd server
  > node src/app.js

เวลาแก้ไขอะไรและ save ก้ restart service ด้วยมันจะได้เปลี่ยน

## Folder Array ใน JSON array

- array push
- array splice = เลือกช่วง Array ใน JSON array มาใช้งาน (splice)
- array slice = คือการตัดอะเรย1 หรือเลือก array ในช่วงท่ีเราต้องการมาแสดงผล หรือ ลบช่วง array ท่ีเราเลือกออกจาก json
- delete

## ต้องเข้าไปติดตั้งใน Folder node-backend/server

```Terminal
  > cd node-backend.git/server
```

## ติดตั้ง express

```Terminal
  > npm install --save express
```

## ติดตั้ง body-parser

## Body Parser เป็น node package ตัวหนึ่งเหมือน express จะช่วยให้เรา

## สามารถอ่านข้อมูลที่ฝั่ง client POST มาได้ผ่าน req.body โดยทํางานร่วมกันกับ express

```Terminal
  > npm install --save body-parser
```

## ติดตั้ง SQLite3

## node package Sequelize เป*น package การจัดการ database ของเรา ไมOวOาจะเป*นการสร'างฐานข'อมูล create update delete หรือที่เราเรียกวOา CRUD โดยที่เราไมOต'องเขียนคําสั่ง SQL

```Terminal
  > npm install --save sqlite3
  > npm install --save sequelize
```

## download SQLiteStudio สำหรับดู IDE ดู database

## เปิด Postman

####### Git #######
commit

1. git add --all
2. git commit -m 'any message'
3. git push
   or
4. git force push or 3. git push force

####### Sqlite Query ########
http://docs.sequelizejs.com/manual/querying.html
http://docs.sequelizejs.com/manual/models-usage.html
https://github.com/standard/standard

#### Client Folder

## Install Vue Cli

- Install vue-cli 3

  > sudo npm install -g @vue/cli

- Install vue-cli 2

  > sudo npm install -g vue-cli

- Go inside "client folder" สร้าง Vue ด้วย Webpack

  > vue init webpack .

- Run server
  > cd client
  > npm run dev

## วิธีสร้าง Project ปกติทั่วไป

## ใช้ vue-cli สร้าง Project ## source: https://cli.vuejs.org/

# Install vue-cli version 3 (create project from command to browser)

> sudo npm install -g @vue/cli

# OR

> sudo yarn global add @vue/cli

# 1. Create a project as command:

> vue create my-project
> cd my-project/

> npm run serve
> or
> node server

# 2. Run UI browser to create project

> vue ui

# ทำเองเพิ่มเติม

- การสร้างโปรเจคจาก vue-cli 3
- UI ใช้ vuetify เป็น material theme
- SSR ใช้ NUXT.js
- Vuex จัดการ state management (State/props)

### RUN server

- Node

  > cd server
  > node src/app.js

- Vue
  > cd client
  > npm run dev

########



### Vue + Node ###

# Linter
- Lint / enable + disable
this will disable linting for everything below it
<!-- eslint-disable -->
<!-- eslint-enable -->
/* eslint-disable */

# style scoped คือให้ style น้ีใช้ภายใน components น้ีเท่านั้น
- css style scoped 
  <style scoped></style>

# Vue-Resource (ติดต่อผ่าน HTTP ใช้ package Vue-Resource)
- Install Vue-Resource 
  client:
  > npm install --save vue-resource

  after install check package.json on dependencies should have "vue-resource": "^1.5.1",

# ฝั่ง Server (Node) cors เพื่อจัดการปัญหาเร่ือง Cross Origin
- ติดตั้ง cors
  server:
  > npm install --save cors  

  after install check package.json on dependencies should have "cors": "^2.8.5",

# axios (สร้าง Service API)
- install
  > npm install --save axios

  1. create Folder name "services"
  2. create file name "Api.js" 
  3. it will be src/services/Api.js 

# tips
- link router (เราเตอร์)
  this.$router.push('URL')

- link route (รูท)
  this.$route

