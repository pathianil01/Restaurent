import React, { useState } from "react";

const RunRouteCard = (props) => {
  const { apiUrl, headingText, paragraphText } = props;
  const [tableData, setTableData] = useState([]);

  const getData = async () => {
    // const header = new Headers({ "Access-Control-Allow-Origin": "*" });
    const response = await fetch(apiUrl);

    const data = await response.json();

    setTableData(data);
  };

  const clearData = () => {
    setTableData([]);
  };

  const renderTable = () => {
    const colNames = [];
    if (tableData.length > 0)
      for (const colName in tableData[0]) {
        colNames.push(colName);
      }
    return (
      <table style={{ width: "100%", maxWidth: "800px" }}>
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
  };

  return (
    <div className="row border  ">
      <div className="col-12 ">
        <h4>{headingText}</h4>
        <p className="text text-success mt-3">{paragraphText}</p>
      </div>
      <div className="col-12">{renderTable()}</div>
      <div className="col-12 mt-3 mb-4">
        {!tableData.length ? (
          <button className="btn btn-success" onClick={getData}>
            Run
          </button>
        ) : (
          <button
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
            onClick={clearData}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default RunRouteCard;
