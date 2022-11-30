import RunRouteCard from "./RunRouteCard";

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
      "UPDATE item SET item_price=item_price*1.05 WHERE item_prices",
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
      "SELECT * FROM customers c,address a WHERE c.customer_id=a.address_id AND c.customer_id IN( SELECT DISTINCT(customer_id) FROM orders  WHERE delivery_status=0);",
  },
];

function QueryRoute() {
  return (
    <div className="container-fluid mt-5 shadow-lg">
      <div className="row mb-5">
        <div className="col-12">
          <p style={{ fontSize: "32px" }} className="text text-info">
            The below are the list of queries. Click run button to execute
            queries and to see result. Click on clear to clear the result.
          </p>
        </div>
      </div>
      {propData.map((props, i) => (
        <RunRouteCard {...props} key={i} />
      ))}
    </div>
  );
}
export default QueryRoute;
