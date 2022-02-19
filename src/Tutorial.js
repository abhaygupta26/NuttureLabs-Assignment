import logo from "./11.png";

const Tutorial = () => {
  return (
    <>
      <div
        className="col-md-11 ms-4 mt-4"
        style={{
          height: "86px",
          backgroundColor: "#ABE8FF",
          borderRadius: "10px",
        }}
      >
        <h6
          className="ms-4 pt-3"
          style={{ color: "#2B2557", fontSize: "14px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h6>
        <div
          className="ms-4"
          style={{
            height: "24px",
            width: "88px",
            backgroundColor: "white",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "12px", lineHeight: "24px", color: "#2B2557" }}>
            Tutorial
          </p>
        </div>
      </div>
        <img src={logo} alt="" style={{position:"absolute",left:"60.88%", top:"15.43%", bottom:"0%"}} />
    </>
  );
};
export default Tutorial;
