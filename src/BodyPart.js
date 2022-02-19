import classes from "./BodyPart.module.css";
import LeftBrand from "./LeftBrand";
import MiddlePart from "./MiddlePart";
import RightPart from "./RightPart";
const BodyPart = () => {
  return (
    <div className="container-fluid" style={{ border: "1px solid black" }}>
      <div className="row">
        <div className={`col-md-2 + ${classes.left_part}`}>
          <LeftBrand />
        </div>
        <div className={`col-md-7 + ${classes.left_part}`}>
          <MiddlePart />
        </div>
        <div className={`col-md-3 + ${classes.left_part}`}>
          <RightPart />
        </div>
      </div>
    </div>
  );
};

export default BodyPart;
