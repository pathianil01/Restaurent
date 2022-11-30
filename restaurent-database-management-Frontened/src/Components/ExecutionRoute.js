import { useState } from "react";
import "../css/website.css";
function ExecutionRoute() {
  const [tableData, setTableData] = useState([]);

  const sendData = async () => {
    const query = document.getElementById("query");
    const options = {
      method: "POST",
      body: JSON.stringify({
        Query: query.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch("http://localhost:3000/runQuery", options);
    const data = await response.json();
    setTableData(data);
  };

  const renderTable = () => {
    if (tableData.message || tableData.message == "") {
      return (
        <div>
          <h6 className="text text-success">Successful...</h6>
          <p>
            affectedRows:{" "}
            <span
              className="text text-warning"
              style={{ fontWeight: "bolder" }}
            >
              {tableData.affectedRows}
            </span>
          </p>
          <p>
            changedRows:{" "}
            <span
              className="text text-warning"
              style={{ fontWeight: "bolder" }}
            >
              {tableData.changedRows}
            </span>
          </p>
          <p className="text text-success mt-2">{tableData.message}</p>;
        </div>
      );
    } else if (tableData.sqlMessage) {
      return (
        <div>
          <h6 className="text text-danger">Failed..</h6>
          <p className="text text-danger">{tableData.sqlMessage}</p>
          <p className="text text-danger"> Query : {tableData.sql}</p>
        </div>
      );
    } else {
      const colNames = [];
      if (tableData.length > 0)
        for (const colName in tableData[0]) {
          colNames.push(colName);
        }
      else {
        return (
          <p className="text text-danger">
            No table data to select. Please insert data.
          </p>
        );
      }
      return (
        <table>
          <thead>
            <tr>
              {colNames.map((colName, i) => (
                <th key={i}>{colName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((eachRow, i) => (
              <tr key={i}>
                {colNames.map((colName, j) => (
                  <td key={j}>{eachRow[colName]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-4 shadow-lg border">
          <textarea
            id="query"
            cols="60"
            rows="20"
            placeholder="Write query here"
          ></textarea>

          <button className="btn btn-success mt-3 mb-4" onClick={sendData}>
            Run
          </button>
        </div>

        <div className="col-8 shadow-lg border scrollBarAdd">
          <h4>Result:</h4>
          {renderTable()}
        </div>
      </div>
    </div>
  );
}

export default ExecutionRoute;
