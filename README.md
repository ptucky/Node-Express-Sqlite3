Json use javascript manage data

## Install Node
https://nodejs.org/en/
เมื่อเราทําการติดต้ังโปรแกรม nodejs ลงในเคร่ืองคอมพิวเตอร1ของเรา มันจะทํา การติดต้ัง npm มาให'เราด'วย

## Check version
> node -v
  v10.15.1

> npm -v
  6.4.1


## Run node server
> node server
  or
> node app.js


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
## node package Sequelize เป_น package การจัดการ database ของเรา ไมOวOาจะเป_นการสร'างฐานข'อมูล create update delete หรือที่เราเรียกวOา CRUD โดยที่เราไมOต'องเขียนคําสั่ง SQL
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
3. git force push or 3. git push force

####### Sqlite Query ########
http://docs.sequelizejs.com/manual/querying.html
http://docs.sequelizejs.com/manual/models-usage.html
