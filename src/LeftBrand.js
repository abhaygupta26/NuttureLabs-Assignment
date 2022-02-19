import Avatar from "react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faChartColumn,
  faChartLine,
  faChartPie,
  faCircle,
  faCircleDollarToSlot,
  faCoins,
  faFile,
  faGlobe,
  faMoon,
  faShareNodes,
  faSliders,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import Division from "./Division";

const LeftBrand = () => {
  return (
    <>
      <div className="row mt-3 mb-3">
        <div className="col-md-2 mx-2">
          <Avatar name="NA" size="20pt" textSizeRatio={2} round={true} />
        </div>
        <div className="col-md-6">
          <h4 style={{ color: "white" }}>Name</h4>
        </div>
        <div className="col-md-3">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            style={{ color: "white", paddingTop: "7px" }}
          />
        </div>
      </div>
      <div>
        <Division icon={faArrowLeftLong} name="Home" />
        <Division icon={faSquarePollVertical} name="Section 1" />
        <Division icon={faSliders} name="Section 3" />
        <Division icon={faChartLine} name="Section 2" />
        <Division icon={faCircleDollarToSlot} name="Section 4" />
        <Division icon={faCoins} name="Section 5" />
        <Division icon={faChartPie} name="Section 6" />
        <Division icon={faChartColumn} name="Section 7" />
        <Division icon={faShareNodes} name="Section 8" />
        <Division icon={faFile} name="Documentation" />
      </div>
      <div className="row" style={{ marginTop: "140px" }}>
        <div
          className="col-md-5 btn btn-secondary ms-3"
          style={{ borderRadius: "10px" }}
        >
          <div className="row">
            <div className="col-md-2 ms-2">
              <Avatar name="NA" size="15pt" textSizeRatio={2.1} round={true} />
            </div>
            <div className="col-md-5">$0.90</div>
          </div>
        </div>
        <div
          className="col-md-5 btn btn-secondary ms-1"
          style={{
            borderRadius: "10px",
            backgroundColor: "#9FDFDD",
            color: "blue",
          }}
        >
          Buy $XYZ
        </div>
      </div>
      <div className="row mt-3 mb-2">
        <div className="col-md-2 ms-1 mb-1">
          <FontAwesomeIcon
            icon={faGlobe}
            style={{ paddingTop: "2px", fontSize: "28px", color:"gray" }}
          />
        </div>
        <div className="col-md-5 mb-1">
          <div
            className="btn btn-secondary btn-sm"
            style={{ borderRadius: "20px" }}
          >
            <div className="row">
              <div className="col-md-2">
                <FontAwesomeIcon
                  icon={faMoon}
                  style={{ paddingTop: "2px", fontSize: "15px" }}
                />
              </div>
              <div className="col-md-5">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ paddingTop: "2px", fontSize: "15px",color:"blue" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBrand;
