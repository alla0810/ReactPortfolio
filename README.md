# ReactPortfolio  ![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)

## Description

This program provides a single-page application to view the deployed React portfolio of work samples.


## Features

GIVEN a single-page application portfolio for a web developer

* WHEN you load the portfolio, THEN you are presented with a page containing a header, a section for content, and a footer

* WHEN you view the header, THEN you are presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

* WHEN you view the navigation titles, THEN you are presented with the titles About me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted.

* WHEN you click on a navigation title, THEN you are presented with the corresponding section below the navigation without the page reloading and that title is highlighted

* WHEN you load the portfolio the first time, THEN the About Me title and section are selected by default.

* WHEN you are presented with the About Me section, THEN you see a recent photo or avatar of the developer and a short bio about them

* When you are presented with the Portfolio section, THEN you see titled images of six of the developer's applications with links to both the deployed applications and the corresponding GitHub repository

* When you are presented with the Contact section, THEN you see a contact form with fields for a name, an email address, and a message 

* WHEN you move your cursor out of one of the form fields without entering text, THEN you receive a notification that this field is required.

* When you enter text into the email address field, THEN you receive a notification if you have entered an invalid email address

* When you are presented with the Resume section, THEN you see a link to a downloadable resume and a list of the developer's proficiencies 

* When you view the footer, THEN you are presented with text or icon links to the developer's GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)


## Rest API Routes
* This application provides Rest APIs for an e-commerce backend application

1. /api/categories
  * `GET` all categories
  * `GET` a single category by its `id` and populated products
  * `POST` a new category
  * `PUT` to update a category by its `id`
  * `DELETE` to remove category by its `id`

2. /api/products
  * `GET` to get all products and all of associated tags
  * `GET` to get a single product by its `id` and all of its associated tags
  * `POST` to create a new product and to associate the new product with `tagIds`
  * `PUT` to update a product by its `id`
  * `DELETE` to remove a product by its `_id`  

3. /api/thoughts/:thoughtId/reactions
  * `GET` to get all tags and all of associated products
  * `GET` to get a single tag by its `id` and all of its associated products
  * `POST` to create a new tag and to associate the new tag with `productIds`
  * `PUT` to update a tag by its `id`
  * `DELETE` to remove a tag by its `_id`  


## Database Models

This application's database contains the following four models:

* `Category`  
  * `id`
  * Integer  
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `category_name`  
  * String  
  * Doesn't allow null values

* `Product`  
  * `id`  
  * Integer
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `product_name`  
  * String  
  * Doesn't allow null values  
  * `price`  
  * Decimal
  * Doesn't allow null values  
  * Validates that the value is a decimal
  * `stock`  
  * Integer
  * Doesn't allow null values  
  * Set a default value of 10  
  * Validates that the value is numeric
  * `category_id`  
  * Integer
  * References the `category` model's `id`
  

* `Tag`  
  * `id`  
  * Integer
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `tag_name`  
  * String  

* `ProductTag`  
  * `id`  
  * Integer
  * Doesn't allow null values  
  * Set as primary key  
  * Uses auto increment  
  * `product_id`  
  * Integer  
  * References the `product` model's `id`
  * `tag_id`  
  * Integer  
  * References the `tag` model's `id`


## Associations
Four database models have the following relationships between them:
* `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.
* `Category` has many `Product` models.
* `Product` belongs to many `Tag` models.  Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.
* `Tag` belongs to many `Product` models.


## Walkthrough Video
https://drive.google.com/file/d/1N0QrQbP3RqnyN9QxMiiXK89BWkpQlmIG/view

## Installation on your local machine
After downloading from GitHub, you can run this program on your local machine by following the procedure below:
1. From a terminal, log into your mySQL account by using `mysql -u ${your login name} -p`.
2. Inside logged mySQL terminal, type `source ${downloaded-application-path}/db/schema.sql`.
3. Open another terminal to run javascript e-commerce back-end server application.
4. Run `npm run seed` to seed data. Seed data create 5 categories, 5 product and 8 tags. 
5. Run `nodemon server.js` to run backend server on your local machine.
6. From Insomnia, send Restful API queries.

## Technologies used
1. Express.js (https://expressjs.com/)
2. MySQL2 (https://www.npmjs.com/package/mysql2)
3. Sequalize (https://www.npmjs.com/package/sequelize)
4. dotenv package (https://www.npmjs.com/package/dotenv) 

## Source Code References
  This project has used some reference codes from the following sites

   * https://git.bootcampcontent.com/University-of-Texas-at-Austin/UTA-VIRT-FSF-PT-07-2023-U-LOLC.git   


## Contact
  * Author: Kyosook Shin
  * Author's Email: kyosook.shin@gmail.com  
  * GitHub: https://github.com/alla0810/e-commerce


## Screenshot  

<img src='./images/screen1.png' width="800">  
<img src='./images/screen2.png' width="800">
<img src='./images/screen3.png' width="800">  
<img src='./images/screen4.png' width="800">  
<img src='./images/screen5.png' width="800">  
