# Home Decor
Ecommerce app Using the MongoDB driver and Express

# Technology Stack
- Mongo
- Express

## Installation
```bash
git clone https://github.com/ratracegrad/mongomart
npm install
node mongomart.js
```

## Populating MongoDB database with items
In the data folder are two json files: cart.json and items.json. You can use these two files
to populate your mongo database with items for your ecommerce site. Here are the steps:

```bash
create a mongo database called mongomart
create a collection called cart
create a collection called item
Import the "item" collection: mongoimport -d mongomart -c item data/items.json
Import the "cart" collection: mongoimport -d mongomart -c cart data/cart.json
---Create a search index in mongodb
db.item.ensureIndex({title: "text"})

