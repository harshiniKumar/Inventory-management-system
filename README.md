# inventory-management-system
An Inventory Management System using Angular JS,Spring Framework and MySQL.

## Angular : To add Bootstrap,Jquery,popper.js

Enter the following commands in CLI
To install Bootstrap:
npm install ngx-bootstrap bootstrap@3

To install Jquery:
npm install jquery --save

To install popper.js:
npm install popper.js --save

Adding the bootstrap,jquery and popper.js to the code:
-> Open node_modules folder.Check if bootstrap,jquery and popper.js is installed properly.

-> Open Angular.json from src folder and add the following code

"styles": [  
        "src/styles.css",  
        "./node_modules/bootstrap/dist/css/bootstrap.min.css"  
        ],  
"scripts": [              
        "./node_modules/jquery/dist/jquery.min.js",  
        "./node_modules/popper.js/dist/umd/popper.min.js",  
        "./node_modules/bootstrap/dist/js/bootstrap.min.js"  
        ]   



