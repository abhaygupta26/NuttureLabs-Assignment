import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeftLong,
  faExternalLinkAlt,
  faSign,
  faSignIn,
  faAngleDown,
  faMouse,
} from "@fortawesome/free-solid-svg-icons";

const RightPart = () => {
  return (
    <div>
      <div className="row mt-4 ms-4">
        <div
          className="col-md-5"
          style={{
            height: "40px",
            backgroundColor: "#353945",
            width: "147px",
            borderRadius: "10px",
          }}
        >
          <div className="row">
            <div className="col-md-2">
              <img className="mt-2" src="https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png" height="20px" />
            </div>
            <div
              className="col-md-7 pt-2"
              style={{ color: "white", fontSize: "15.0211px" }}
            >
              Avalanche
            </div>
            <div className="col-md-2 pt-2">
              <FontAwesomeIcon icon={faAngleDown} style={{ color: "white" }} />
            </div>
          </div>
        </div>
        <div
          className="col-md-6 ms-3 row"
          style={{
            height: "40px",
            borderRadius: "10px",
            backgroundColor: "black",
            border: "1px solid blue",
          }}
        >
          <div className="col-md-2 pt-2">
            <FontAwesomeIcon
              icon={faMouse}
              style={{
                borderColor: "blue",
                color: "blue",
                transform: "rotate(90deg)",
              }}
            />
          </div>
          <div
            className="col-md-7 pt-2"
            style={{ color: "white", fontSize: "14px", textAlign: "center" }}
          >
            0xf6...1353
          </div>
          <div className="col-md-2 pt-2">
            <FontAwesomeIcon icon={faAngleDown} style={{ color: "white" }} />
          </div>
        </div>
      </div>
      <div
        className="ms-4 mt-4 row"
        style={{ fontSize: "18px", color: "white" }}
      >
        <div className="col-md-1">
          <FontAwesomeIcon
            icon={faLeftLong}
            style={{ paddingTop: "7px", borderColor: "blue" }}
          />
        </div>
        <div className="col-md-4">Custom Link</div>
      </div>
      <div className="ms-4 mt-4" style={{ color: "white" }}>
        https://testnet.xyz.xyz/trade?ref=
      </div>
      <div
        className=" ms-4 mt-4"
        style={{
          backgroundColor: "#242731",
          height: "51px",
          width: "334px",
          borderRadius: "10px",
        }}
      >
        <p className="ps-3 pt-3" style={{ color: "#808191", fontSize: "12px" }}>
          ENTER
        </p>
      </div>
      <div className="row mt-5 ms-4">
        <div
          className="col-md-4"
          style={{
            backgroundColor: "#3772FF",
            height: "40px",
            width: "143px",
            borderRadius: "10px",
          }}
        >
          <div className="row">
            <div className="col-md-2 pt-2">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{ borderColor: "blue", color: "white" }}
              />
            </div>
            <div
              className="col-md-9 pt-2"
              style={{ color: "white", fontSize: "14px" }}
            >
              Custom Link
            </div>
          </div>
        </div>
        <div
          className="col-md-4 ms-3"
          style={{
            backgroundColor: "black",
            height: "40px",
            borderRadius: "10px",
            border: "1px solid #242731",
          }}
        >
          <div className="row">
            <div className="col-md-2 pt-2 ms-3">
              <FontAwesomeIcon
                icon={faSignIn}
                style={{ borderColor: "blue", color: "white" }}
              />
            </div>
            <div
              className="col-md-5 pt-2"
              style={{ color: "white", fontSize: "14px" }}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPart;
