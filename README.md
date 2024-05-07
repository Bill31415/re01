# CSC3170 Project WebDesign part

## 文件结构总览

```
Final_Code
  ├── back_end
  │   ├── app.js
  │   ├── config.js
  │   ├── db
  │   │   └── index.js
  │   ├── node_modules
  │   │   ├── ...
  │   ├── package.json
  │   ├── package-lock.json
  │   ├── process.env
  │   ├── router
  │   │   ├── login.js
  │   │   └── userInfor.js
  │   ├── router_handler
  │   │   ├── login.js
  │   │   └── userInfor.js
  │   └── schema
  │       ├── login.js
  │       └── userInfor.js
  ├── front_end
  │   ├── css
  │   │   ├── llm.css
  │   │   ├── login.css
  │   │   ├── sql.css
  │   │   └── table.css
  │   ├── image
  │   │   ├── ...
  │   ├── llm.html
  │   ├── login.html
  │   ├── sql.html
  │   └── table.html
  └── myDatabase.sql

96 directories, 23 files

```

## Team Members

Our team consists of the following members, listed in the table below (the team leader is shown in the first row, and is marked with 🚩 behind his/her name):

<!-- change the info below to be the real case -->

| Student ID | Student Name   | GitHub Account (in Email) |
| ---------- | ------------   | ------------------------- |
| 121090291  | 李毅然 🚩      | 121090291@link.cuhk.edu.cn  |
| 122090870  | 姜耘逸         | 122090870@link.cuhk.edu.cn           | 
| 121090174  | 何智涵         | 121090174@link.cuhk.edu.cn            |
| 121090792  | 张晓宇         | 121090792@link.cuhk.edu.cn            |
| 121090619  | 吴优           | 121090619@link.cuhk.edu.cn            |
| 122090259  | 李洪宇         | 122090259@link.cuhk.edu.cn            |
| 121090703  | 杨路佳宁       | 121090703@link.cuhk.edu.cn            |
| 122040090  | 张渊铭         | 122040090@link.cuhk.edu.cn            |

## 运行项目

1. 安装node.js

2. 借助MySql Workbench运行`myDatabase.sql`以创建数据库并导入数据:

  2.1 打开MySql Workbench, 新建或运行已有connection.

  2.2 进入connection后, 通过左上角按钮新建一个名为`csc3170_project`的schema.

  2.3 通过左上角文件选项打开`myDatabase.sql` (文件位置`Final_Code\myDatabase.sql`). 

    运行`myDatabase.sql`

3. 按照如下说明修改数据库连接配置文件`index.js`(文件位置`Final_Code\back_end\db\index.js`):

  修改`password: "root1234",`一行，用你的MySql登录密码代替`root1234`

4. 使用VSCode打开文件`Final_Code`.

  4.1 输入指令 `cd back_end`

  4.2 输入指令 `node app.js`. 如终端输出如下,则说明运行成功. 

  通过浏览器访问`http://localhost:3000`即可进入登录界面.

  

      ```
        Server running at http://localhost:3000
        Successfully connected to the database

      ```
  4.3 如何终止终端node运行? 按Ctrl + C即可
  

