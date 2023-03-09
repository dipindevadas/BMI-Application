import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import BmiList from "./Components/BmiList";
import BmiScore from "./Components/BmiScore";
import Form from "./Components/Form";

function App() {
  const [Show,setShow]=useState(false)
  const [changeWeight,setChangeWeight]=useState({weight:'',type:''})
  const [bmi, setBmi] = useState('00');
  const [bmiType, setBmiType] = useState("not calculated");
 const [bmiRange,setBmiRange]=useState({
  underweight : { low:''},
  normal : {low:'',high:''},
  overWeight : {low:'',high:''},
  obesityOne : {low:'',high:''},
  obesityTwo : {low:'',high:''},
  obesityThree : {high:''},
 })
  const onFormSub = (w, h) => {
      let b=callBmi(w,h)
      setBmi(b)

      let bType=weightType(b)
      setBmiType(bType)

    console.log(w, h); 

    const range={
      underweight : { low: callWeight(18.5,h)},
      normal : {low: callWeight(18.5,h),high:callWeight(24.9,h)},
      overWeight : {low: callWeight(25,h),high:callWeight(29.9,h)},
      obesityOne : {low: callWeight(30,h),high:callWeight(34.9,h)},
      obesityTwo : {low: callWeight(35,h),high:callWeight(39.9,h)},
      obesityThree : {high:callWeight(40,h)},

    }
    setBmiRange(range)
    setChangeWeight(weightChange(b,w,range))
    setShow(true)
  };

  //function to calculate bmi value 
  const callBmi=(w,h)=>(w/(h*h)).toFixed(2)



  //function to calculate bmityoe value

  const weightType=(bmi)=>{
    if(bmi< 18.5){
      return 'Underweight'
    }
    else if(18.5 < bmi && bmi< 24.9){
      return 'Normal'
    }
    else if(24.9 < bmi && bmi< 29.9){
      return 'Over Weight'
    }
    if(29.9 < bmi && bmi< 34.9){
      return 'Obesity Class I'
    }
    if(34.9 < bmi && bmi< 39.9){
      return 'Obesity Class II'
    }
    if(bmi> 39.9){
      return 'Obesity Class III'
    }
  }

   const callWeight=(b,h)=>(b * h * h).toFixed(2)

   const weightChange=(b,w,range)=>{
    let changeObj;
    if(b > 24.9){
      changeObj={
        weight:(w-range.normal.high).toFixed(2),
        type:'positive'
      };
      return changeObj;
    }else if(b<18.5){
      changeObj={
        weight:(range.normal.low - w).toFixed(2),
        type:'negative'
      }
      return changeObj;
    }
    else{
      changeObj={
        weight:0, type:'normal'
      };
      return changeObj
    }
   }
 
  
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form onFormSub={onFormSub}></Form>
        </div>

{ Show &&(
        <div className="row justify-content-center">
          <div className=" col-sm-6 mb-4">
            <BmiScore bmiNo={bmi} bmiName={bmiType}  changeWeight={changeWeight}></BmiScore>
          </div>
        

        <div className="col-sm-6 mb-4">
          <BmiList range={bmiRange} bmi={bmi}></BmiList>
        </div>
        </div>
)}
      </div>
    </>
  );
}

export default App;
