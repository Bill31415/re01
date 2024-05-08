# CSC3170 Project 

## Team Members

Our team consists of the following members, listed in the table below (the team leader is shown in the first row, and is marked with 🚩 behind his/her name):

| Student ID | Student Name   |       Email Address       |  Contribution |
| ---------- | ------------   | ------------------------- |------------------------- |
| 121090291  | 李毅然 🚩      | 121090291@link.cuhk.edu.cn  |Data analytic SQL queries and presentation|
| 122090870  | 姜耘逸         | 122090870@link.cuhk.edu.cn  | Relation schemas and presentation
| 121090174  | 何智涵         | 121090174@link.cuhk.edu.cn  |Report|
| 121090792  | 张晓宇         | 121090792@link.cuhk.edu.cn  | Web design and presentation  |
| 121090619  | 吴优           | 121090619@link.cuhk.edu.cn  | Data generation|
| 122090259  | 李洪宇         | 122090259@link.cuhk.edu.cn  |Data generation|
| 121090703  | 杨路佳宁       | 121090703@link.cuhk.edu.cn  | Database design|
| 122040090  | 张渊铭         | 122040090@link.cuhk.edu.cn  | Indexing/Hashing of data field |


## WebDesign part

### File structure overview

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
  ├── README.md
  └── myDatabase.sql

96 directories, 23 files

```


### The operation steps for the project

1. Install node.js

2. Run `myDatabase.sql` with MySql Workbench to create the database and import the data:

2.1 Open the MySql Workbench and create or run an existing connection.

2.2 After connection is entered, create a schema named `csc3170_project` by pressing the button in the upper left corner. 

2.3 Open `myDatabase.sql` through the file option in the upper left corner.

    Run `myDatabase.sql`

3. Modify the database connection configuration file `index.js` as follows (file location `back_end\db\index.js`)

  Change line `password: "root1234",` and replace `root1234` with your MySql login password

4. Open file `Final_Code` using VSCode.

4.1 Enter the command `cd back_end`

4.2 Enter the command `node app.js`. If the output of the terminal is as follows, the operation is successful.

  You can access the login page by visiting `http://localhost:3000` in your browser.

      ```
        Server running at http://localhost:3000
        Successfully connected to the database

      ```
4.3 How Do I Stop the node? Press Ctrl + C

5. Note that for the large language model section, it is normal not to be able to run this section successfully due to different request speeds and VPN conditions on different computers.
  

