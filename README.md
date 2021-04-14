Easy Inventory (reinvent) is a practical solution to the tedious task of taking restaurant inventory. 

Features:
- secure login
- CRUD for several models, including user, ingredient, vendor
- auto-generated order list
    - items that fall below par
    - contain suggestion for an amount to order 
- auto-generated pending order list
- adjust and accept or reject orders

Technologies:
- React.js
- Redux.js for state management
- JSON web tokens
- email.js

Installation:
- fork and clone repo
- npm install react npm install react react-dom npm install react-redux
- start back-end server by executing 'rails s' from reinvent_backend directory to access port :3000
- run npm start