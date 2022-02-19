import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Tab = () => {
  const [assignmentData, setAssignmentData] = useState([]);
  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((res) => {
        console.log(res.data.data[0].chain.name);
        setAssignmentData(res.data.data[0]);
      });
  }, []);
  return (
    <div className="col-md-11 ms-4" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-2" style={{ paddingRight: "0px" }}>
          <h6 style={{ fontSize: "18px", color: "white" }}>First Tab</h6>
          <hr
            style={{
              backgroundColor: "#3772FF",
              width: "55%",
              height: "3px",
              border: "1px solid #3772FF",
              marginTop: "8px",
            }}
          />
        </div>
        <div className="col-md-2" style={{ paddingLeft: "0px" }}>
          <h6 style={{ color: "#808191", fontSize: "18px" }}>Second Tab</h6>
        </div>
      </div>
      <div
        className="col-md-12 mt-2"
        style={{
          backgroundColor: "#191B20",
          height: "40px",
          borderRadius: "10px",
          lineHeight: "4",
        }}
      >
        <div className="row">
          <div
            className="col-md-3"
            style={{ color: "#808191", fontSize: "10px", textAlign: "center" }}
          >
            ASSET
          </div>
          <div
            className="col-md-3"
            style={{ color: "#808191", fontSize: "10px", textAlign: "center" }}
          >
            AMOUNT
          </div>
          <div
            className="col-md-3"
            style={{ color: "#808191", fontSize: "10px", textAlign: "center" }}
          >
            USER ACCOUNT
          </div>
          <div
            className="col-md-3"
            style={{ color: "#808191", fontSize: "10px", textAlign: "center" }}
          >
            REFERAL EARNING
          </div>
        </div>
      </div>
      <div
        className="col-md-12 mt-2"
        style={{
          backgroundColor: "#191B20",
          height: "63px",
          borderRadius: "5px",
          marginBottom: "63px",
        }}
      >
        <div className="row pt-2">
          <div
            className="col-md-3"
            style={{ color: "white", fontSize: "14px", textAlign: "center" }}
          >
            Bitcoin
            <div className="row ms-5">
              <div
                className="col-md-4 ms-1"
                style={{ color: "#808191", fontSize: "14px" }}
              >
                {assignmentData.type}
              </div>
              <div
                className="col-md-5 mt-1"
                style={{
                  textAlign: "start",
                  borderRadius: "10px",
                  textAlign: "center",
                  height: "16px",
                  width: "44px",
                  backgroundColor: "#353945",
                }}
              >
                <div className="row">
                  <div
                    className="col-md-1"
                    style={{ paddingTop: "0px", paddingLeft: "5px" }}
                  >
                    <img
                      className="mb-2"
                      src="https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png"
                    ></img>
                  </div>
                  <div
                    className="col-md-6 pt-1"
                    style={{ fontSize: "7.80515px", padding: "0px" }}
                  >
                    AVAX
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3"
            style={{ color: "white", fontSize: "14px", textAlign: "center" }}
          >
            0.0000 BNB
            <p style={{ fontSize: "14px", color: "#808191" }}>Expired</p>
          </div>
          <div
            className="col-md-3"
            style={{ color: "white", fontSize: "14px", textAlign: "center" }}
          >
            0xFbE..0f58A7D
          </div>
          <div
            className="col-md-3"
            style={{ color: "white", fontSize: "14px", textAlign: "center" }}
          >
            0.000.BNB
            <div className="ms-5">
              <div className="row">
                <div
                  className="col-md-8 pt-1"
                  style={{
                    color: "#808191",
                    fontSize: "12px",
                    paddingRight: "0px",
                  }}
                >
                  View on BSC Scan
                </div>
                <div className="col-md-1">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    style={{
                      color: "#808191",
                      fontSize: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
