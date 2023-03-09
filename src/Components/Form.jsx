import React, { useState } from 'react'

function Form({onFormSub}) {

    const [weight,setWeight]=useState('')
    const [height,setHeight]=useState('')
   const [alert,setAlert]=useState(false)
    const onSubmit=(e)=>{
       e.preventDefault()

       if(isNaN(weight)||isNaN(height)){
        console.log('it is inavalid')
        setAlert(true)
       }
   else{
       onFormSub(weight,height)
       setAlert(false) 
       
       setHeight("")
       setWeight("")
   }
    }

  return (

        <div className='col col-sm-5 shadow p-4 rounded text-center'>
            <h1 className='text-center pt-3 text-secondary h2'>BMI Calculator</h1>

            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col col-sm-6 ">
                        <div className='my-3'>
                            <label className='form-label'>Weight(kg)</label>
                            <input type='text' value={weight} className='form-control' onChange={(e)=>setWeight(e.target.value)} required
                            ></input>
                        </div>
                    </div>

                    <div className='col col-sm-6'>
                        <div className='my-3'>
                        <label className='form-label'>Height(m)</label>
                            <input type='text' value={height}  className='form-control' onChange={(e)=>setHeight(e.target.value)} required></input>
                        </div>

                       
                    </div>

                    <input className='btn btn-success'
                        value='submit'
                        type='submit'></input>
                </div>
            </form>

           {alert? <div className='alert alert-danger'>Plz enter valid datas</div>:null}
        </div>
    
  )
}

export default Form