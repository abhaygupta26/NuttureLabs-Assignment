import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const CustomLink = () => {
  return (
    <div
      className="col-md-4"
      style={{
        backgroundColor: "#3772FF",
        borderRadius: "10px",
        width: "142.54px",
        marginLeft: "400px",
      }}
    >
      <div className="row" style={{ textAlign: "end" }}>
        <div className="col-md-2 pt-2">
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            style={{ borderColor: "blue", color: "white" }}
          />
        </div>
        <div
          className="col-md-9 pt-2"
          style={{ fontSize: "14px", color: "white" }}
        >
          Custom Link
        </div>
      </div>
    </div>
  );
};

export default CustomLink;
