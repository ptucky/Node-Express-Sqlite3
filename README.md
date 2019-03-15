# ฝึก node + Express + sqlite3
node (BackEnd)

## ต้องเข้าไปติดตั้งใน Folder node-backend/server
```Terminal
  > cd node-backend/server
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

## download SQLiteStudio 
## เปิด Postman ทดสอบ

#### มี synchronize กับ asynchronize
* CRUD + DB Sqlite3
* * try catch
* * async กับ await
