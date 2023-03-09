import React from "react";

function BmiList({ range, bmi }) {
  console.log(range);

  return (
    <div className="text-center shadow rounded my-5 mx-3">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row ">
            <div className="col col-sm-4 fw-bold">Type</div>
            <div className="col col-sm-4 fw-bold ">BMI</div>
            <div className="col col-sm-4 fw-bold">WEIGHT</div>
          </div>
        </li>

        <div
          className={
            bmi < 18.5
              ? "border border-danger border-1 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col col-sm-4 ">Underweight</div>
            <div className="col col-sm-4 "> 18.5</div>
            <div className="col col-sm-4 ">
              {" "}
              {range.underweight.low + "kg"}{" "}
            </div>
          </div>
        </div>

        <div
          className={
            18.5 < bmi && bmi < 24.9
              ? "border border-danger border-1 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col col-sm-4 ">Normal</div>
            <div className="col col-sm-4 "> 18.5-24.9</div>
            <div className="col col-sm-4 ">
              {range.normal.low + "kg - " + range.normal.high + "kg"}
            </div>
          </div>
        </div>

        <div
          className={
            25 < bmi && bmi < 29.9
              ? "border border-danger border-1 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col col-sm-4 ">Over Weight</div>
            <div className="col col-sm-4 "> 25-29.9</div>
            <div className="col col-sm-4 ">
              {range.overWeight.low + "kg -" + range.overWeight.high + "kg"}
            </div>
          </div>
        </div>

        <div
          className={
            30 < bmi && bmi < 34.9
              ? "border border-danger border-1 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col col-sm-4 ">Obesity Class I</div>
            <div className="col col-sm-4 "> 30-34.9</div>
            <div className="col col-sm-4 ">
              {range.obesityOne.low + "kg -" + range.obesityOne.high + "kg"}
            </div>
          </div>
        </div>

        <div
          className={
            35 < bmi && bmi < 39.9
              ? "border border-danger border-1 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col col-sm-4 ">Obesity Class II</div>
            <div className="col col-sm-4 "> 35-39.9</div>
            <div className="col col-sm-4 ">
              {range.obesityTwo.low + "kg -" + range.obesityTwo.high + "kg"}
            </div>
          </div>
        </div>

        <div
          className={
            bmi > 40
              ? "border border-danger border-1 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col col-sm-4 ">Obesity Class III</div>
            <div className="col col-sm-4 "> 40</div>
            <div className="col col-sm-4 ">
              {" "}
              {range.obesityThree.high + "kg"}{" "}
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default BmiList;
