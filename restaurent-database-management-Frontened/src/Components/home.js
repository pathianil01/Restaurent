import { Link } from "react-router-dom";
import "../css/website.css";

function Home() {
  return (
    <div className="backgroundImage">
      <div className="container-fluid  d-flex justify-content-center ">
        <div
          className="row "
          style={{ marginTop: "200px", color: "white", fontWeight: "bolder" }}
        >
          <div className="col-12">
            <h1 style={{ marginLeft: "250px" }}>
              Restaurant Database Management system
            </h1>
          </div>
          <div className="col-12 mt-3 d-flex justify-content-center">
            <Link to="/query">
              <button
                className="btn btn-success"
                style={{ fontWeight: "bolder" }}
              >
                Go to query runner
              </button>
            </Link>

            <Link to="/Execution">
              <button
                className="btn btn-success"
                style={{ fontWeight: "bolder", marginLeft: "20px" }}
              >
                Execute Queries{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
