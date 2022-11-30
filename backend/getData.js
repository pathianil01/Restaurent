const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const propData = [
  {
    apiUrl: "http://localhost:3000/first",
    headingText:
      "Query to display the menu card of the restaurent in the decreasing order of price of an items",
    paragraphText:
      'SELECT item_name AS "ITEM_NAME", item_size AS "ITEM_QUANTITY", item_price AS "ITEM_PRICE" FROM item ORDER BY (item_price);',
  },
  {
    apiUrl: "http://localhost:3000/second",
    headingText:
      "Query to display all the types of pizzas available in the restaurent in the decreasing order of the prices of the pizzas",
    paragraphText:
      'SELECT item_name AS "ITEM_NAME", item_size AS "ITEM_QUANTITY", item_price AS "ITEM_PRICE" FROM item ORDER BY (item_price);',
  },
  {
    apiUrl: "http://localhost:3000/third",
    headingText:
      "Query to increase the prices of the of items to 0.5 percentage whose prices are below 10 dollars",
    paragraphText:
      "UPDATE item SET item_price=item_price*1.05 WHERE item_price <10",
  },
  {
    apiUrl: "http://localhost:3000/fourth",
    headingText:
      "Query to display the total sales of each item in the restaurent such a way that top sales item should be in the top of the list.",
    paragraphText:
      'SELECT item_name AS "ITEM_NAME", SUM(item_price) AS "TOTAL_SALES" FROM orders JOIN item USING(item_id) GROUP BY item_name ORDER BY SUM(item_price) DESC;',
  },
  {
    apiUrl: "http://localhost:3000/fifth",
    headingText:
      "Query to increase the prices of items which uses an ingredient Chilli pepper.",
    paragraphText:
      'UPDATE item SET item_price=item_price*1.05 WHERE item.recipe_id IN ( SELECT recipe_id FROM recipe r,ingredient i WHERE r.ing_id=i.ing_id AND i.ing_name="Chilli pepper");',
  },
  {
    apiUrl: "http://localhost:3000/sixth",
    headingText:
      "Query to display all the items in the restaurent that are using Shrimps to make item.",
    paragraphText:
      'SELECT DISTINCT(item_name) AS "ITEM_NAME" FROM item WHERE item.recipe_id IN( SELECT recipe_id FROM recipe r,ingredient i WHERE r.ing_id=i.ing_id AND i.ing_name="Shrimp");',
  },
  {
    apiUrl: "http://localhost:3000/seventh",
    headingText:
      "Query to display all the ingredients used for making Pepperoni Regular Pizza along with the quantity used and relevent price",
    paragraphText:
      "SELECT * FROM customers c,address a WHERE c.customer_id=a.address_id AND c.customer_id IN( SELECT DISTINCT(customer_id) FROM orders WHERE delivery_status=0) limit 0,10;",
  },
];

const app = new express();
app.use(cors());
app.use(express.json());

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Anil@542",
  database: "restaurent",
});

conn.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("failed");
  }
});

app.listen("3000", () => {
  console.log("server started");
});

app.get("/first", (req, res) => {
  conn.query(propData[0].paragraphText, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/second", (req, res) => {
  conn.query(propData[1].paragraphText, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/third", (req, res) => {
  conn.query(propData[2].paragraphText, (err, data) => {
    if (err) {
      console.log("error");
      res.send(err);
    } else {
      conn.query("select * from item", (err, data) => {
        if (!err) res.send(data);
      });
    }
  });
});

app.get("/fourth", (req, res) => {
  conn.query(propData[3].paragraphText, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/fifth", (req, res) => {
  conn.query(propData[4].paragraphText, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      conn.query("select * from item", (err, data) => {
        if (!err) res.send(data);
      });
    }
  });
});

app.get("/sixth", (req, res) => {
  conn.query(propData[5].paragraphText, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/seventh", (req, res) => {
  conn.query(propData[6].paragraphText, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/runQuery", (req, respond) => {
  conn.query(req.body.Query, (err, data) => {
    if (!err) {
      console.log(data);
      respond.send(data);
    } else {
      respond.send(err);
    }
  });
});
