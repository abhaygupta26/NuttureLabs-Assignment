import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCopy } from "@fortawesome/free-solid-svg-icons";

const ReferralLink = () => {
  return (
    <div className="col-md-12 row mt-4 ms-4">
      <div
        className="col-md-5 me-4"
        style={{
          height: "178px",
          backgroundColor: "#191B20",
          borderRadius: "10px",
        }}
      >
        <div className="row">
          <div className="col-md-1 mt-3">
            <FontAwesomeIcon
              icon={faBriefcase}
              style={{
                paddingTop: "7px",
                borderColor: "blue",
                color: "#BBB5E2",
              }}
            />
          </div>
          <div
            className="col-md-6 mt-3"
            style={{ color: "white", fontWeight: "700", fontSize: "20px" }}
          >
            12.5% of fee
          </div>
        </div>
        <p className="pt-3" style={{ color: "#808191" }}>
          Your Referral Link for xyz
        </p>
        <div
          className="col-md-12"
          style={{
            backgroundColor: "#242731",
            borderRadius: "10px",
            height: "56px",
          }}
        >
          <div className="row">
            <div
              className="col-md-9 ps-5 pt-3"
              style={{ color: "white", fontSize: "14px" }}
            >
              https://unityexchange.design
            </div>
            <div className="col-md-3 pt-3">
              <FontAwesomeIcon icon={faCopy} style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-5 ms-5"
        style={{
          height: "178px",
          backgroundColor: "#191B20",
          borderRadius: "10px",
        }}
      >
        {" "}
        <div className="row">
          <div className="col-md-1 mt-3">
            <FontAwesomeIcon
              icon={faBriefcase}
              style={{
                paddingTop: "7px",
                borderColor: "blue",
                color: "#BBB5E2",
              }}
            />
          </div>
          <div
            className="col-md-6 mt-3"
            style={{ color: "white", fontWeight: "700", fontSize: "20px" }}
          >
            12.5% of fee
          </div>
        </div>
        <p className="pt-3" style={{ color: "#808191" }}>
          Your Referral Link for xyz
        </p>
        <div
          className="col-md-12"
          style={{
            backgroundColor: "#242731",
            borderRadius: "10px",
            height: "56px",
          }}
        >
          <div className="row">
            <div
              className="col-md-9 ps-5 pt-3"
              style={{ color: "white", fontSize: "14px" }}
            >
              https://unityexchange.design
            </div>
            <div className="col-md-3 pt-3">
              <FontAwesomeIcon icon={faCopy} style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;
