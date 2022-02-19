import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
const Division = (props) => {
  return (
    <div
      className="btn btn-outline-secondary col-md-12 mt-2"
      style={{ borderColor: "black", borderRadius: "10px" }}
    >
      <div className="row">
        <div className="col-md-2" style={{textAlign:"start"}}>
          <FontAwesomeIcon
            icon={props.icon}
            style={{  paddingTop: "7px",fontSize:"20px" }}
          />
        </div>
        <div className="col-md-9 mx-2" style={{textAlign:"start", lineHeight:"2"}}>{props.name}</div>
      </div>
    </div>
  );
};

export default Division;
