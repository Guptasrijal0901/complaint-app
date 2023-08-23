import './Comp.css';
import React from 'react';
import { useEffect, useState } from 'react';

const Comp = ()=> {
const [data, setdata] = useState([]);
const [name, setname] = useState("");
const [roll, setroll] = useState("");
const [branch, setbranch] = useState("");
const [phone, setphone] = useState("");
const [email, setemail] = useState("");
const [comp, setcomp] = useState("");
const [date, setdate] = useState("");

const newdata = async()=>{
  const newdata={
    Cname:name,
    Cemail:email,
    Cbranch:branch,
    Croll:roll,
    Cdate:date,
    Cphone:phone,
    Ccomp:comp
  };
  const olddata = [...data];
  olddata.push(newdata);
  setdate(olddata);
}

return(
  <>
  <div className='heading'><h1> Complaint Station of MMMUT Gorakhpur </h1></div>
  
  <form className="main">
  <div className="col-md-6">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputname"
    placeholder='Enter your name'
    value={name}
    onChange={(e)=>setname(e.target.value)}
    />
  </div>
  <div class="col-md-6">
    <label for="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email"
    placeholder='Enter your email'
    value={email}
    onChange={(e)=>setemail(e.target.value)}
    />
  </div>
  <div class="col-md-6">
    <label for="branch" className="form-label">Branch</label>
    <input type="text" className="form-control" id="branch"
    placeholder='Enter your branch'
    value={branch}
    onChange={(e)=>setbranch(e.target.value)}
    />
  </div>
  <div class="col-md-6">
    <label for="roll" className="form-label">Roll no.</label>
    <input type="number" className="form-control" id="roll"
    placeholder='Enter your roll no.'
    value={roll}
    onChange={(e)=>setroll(e.target.value)}
    />
  </div>
  <div class="col-md-6">
    <label for="date" className="form-label">Date</label>
    <input type="date" className="form-control" id="date"
      placeholder="Enter date"
      value={date}
    onChange={(e)=>setdate(e.target.value)}
    />
  </div><div class="col-md-6">
    <label for="phone" className="form-label">Phone number</label>
    <input type="number" className="form-control" id="phone"
      placeholder="Enter your number"
      value={phone}
    onChange={(e)=>setphone(e.target.value)}
    />
  </div>
  <div class="col-10">
    <label for="complaint" className="form-label">Complaint </label>
    <input type="text" className="form-control" id="complaint" 
      placeholder="What's your complaint"
      value={comp}
    onChange={(e)=>setcomp(e.target.value)}
    />
  </div>
  <button
    type='button'
    class="btn btn-primary"
    onClick={()=> newdata}
    > Submit </button>
    <button
    type='button'
    class="btn btn-primary"> Clear </button>
</form>

{data.map((v, i )=>{
  return(
    <>
      <div 
      key={i} 
      className='map'>
        <ul>
          <li> Name : {v.Cname}</li>
          <li> Email : {v.Cemail}</li>
          <li> Branch : {v.Cbranch}</li>
          <li> Roll no. : {v.Croll}</li>
          <li> Date : {v.Cdate}</li>
          <li> Phone no. : {v.Cphone}</li>
          <li> Complaint : {v.Ccomp}</li>
        </ul>
        <button onClick={()=> 
        setdata((olddata)=> olddata.filter((v, index)=> index !== i))} 
        type="button"
        className="btn2">
        Delete</button>
      </div>
    </>
  )
})}
  </>
)
}
export default Comp;
