import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const Section = () => {
  return (
    <div className="row ms-4 mt-4">
      <div className="col-md-2" style={{ color: "white" }}>
        <h6>Section</h6>{" "}
        <hr
          style={{
            width: "40%",
            margin: "0px",
            backgroundColor: "#3772FF",
            border: "1px solid #3772FF",
            borderRadius: "25px",
          }}
        ></hr>
      </div>
      <div
        className="col-md-3 btn btn-secondary btn-sm"
        style={{
          borderRadius: "10px",
          marginLeft: "480px",
          backgroundColor: "#191B20",
        }}
      >
        <div className="row">
          <div className="col-md-2">
            <FontAwesomeIcon
              icon={faWallet}
              style={{ paddingTop: "7px", borderColor: "blue" }}
            />
          </div>
          <div className="col-md-5 pe-1 pt-1" style={{ fontSize: "15px" }}>
            0.2 $XYZ
          </div>
          <div
            className="col-md-4 mt-1"
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "#A3E3FF",
              color: "#3772FF",
            }}
          >
            Tier 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
