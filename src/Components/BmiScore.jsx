import React from "react";

function BmiScore({ bmiNo, bmiName, changeWeight }) {
  // const {bmiNo,bmiName}=props
  console.log(changeWeight);
  return (
    <div className=" text-center shadow rounded p-4 my-5">
      <div className="text-center text-secondary py-2">Your BMI Score</div>
      <div className="row justify-content-center">
        <div className="fs-3 fw-bold p-3 my-2 alert alert-primary col-sm-4">
          {bmiNo}
        </div>
      </div>

      <div className="fs-3 fw-bolder text-primary">{bmiName}</div>

      {changeWeight.type === "positive" && (
        <div className="fs-4">
          "You need to lose{" "}
          <span className="fw-bold">{changeWeight.weight} kg"</span>
        </div>
      )}

      {changeWeight.type === "negative" && (
        <div className="fs-4">
          "You need gain{" "}
          <span className="fw-bold">{changeWeight.weight} kg"</span>
        </div>
      )}

      {changeWeight.type === "normal" && (
        <div className="fs-3">
          "Your weight is Normal,Good for you"

        </div>
      )}
    </div>
  );
}

export default BmiScore;
