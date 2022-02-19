import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import CustomLink from "./CustomLink";

const RewardPage = () => {
  return (
    <div
      className="col-md-11 ms-4 mt-4"
      style={{
        backgroundColor: "#191B20",
        height: "166px",
        borderRadius: "10px",
      }}
    >
      <h5 className="ms-4 pt-4" style={{ color: "white" }}>
        Your rewards
      </h5>
      <div className="row mt-3">
        <div className="col-md-3">
          <h3 className="ms-4" style={{ color: "white" }}>
            $0.26231428
          </h3>
        </div>
        <CustomLink />
        <div className="row ms-4 mt-2">
          <div
            className="col-md-1 pt-1"
            style={{
              backgroundColor: "#353945",
              fontSize: "12px",
              color: "white",
              padding: "0",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            $40 AVAX
          </div>
          <div
            className="col-md-1 ms-2 pt-1"
            style={{
              backgroundColor: "#353945",
              fontSize: "12px",
              color: "white",
              padding: "0",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            $10 BNB
          </div>
          <div
            className="col-md-1 ms-2 pt-1"
            style={{
              backgroundColor: "#353945",
              fontSize: "12px",
              color: "white",
              padding: "0",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            $210 BTC
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardPage;
