import './Comp.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const Table = ()=> {
  useEffect(()=>{
    gettable();
  }, [])
const [data, setdata] = useState([]);
const [name, setname] = useState("");
const [roll, setroll] = useState("");
const [branch, setbranch] = useState("");
const [phone, setphone] = useState("");
const [email, setemail] = useState("");
const [comp, setcomp] = useState("");
const [date, setdate] = useState();


// create
const handlecreate = async()=>{
  if(comp.trim()===""){
  return alert("Please provide your complaint")
  }else if (roll.trim()==="") {
    alert("Provide your rRoll number")
  }

setcomp("")
setroll("")
const response = await axios.post("/create", {
name,
email,
branch, 
roll,
date,
phone,
comp
});
console.log(response);
if(response.data.success){
  gettable();
}else(
  alert("Somthing went wrong")
)}

//read
const gettable = async()=>{
  let response = await axios.get("/read");
  if (response.data.success){
    console.log(response.data.data);
    setdata(response.data.data);
  }else{
    alert("Somthing went wrong")
  }
}
//update
const handleupdate = (index, newcomp)=>{
  const olddata = [...data];
  // olddata[index].name= newname;
  // olddata[index].email= newemail;
  // olddata[index].branch= newbranch;
  // olddata[index].roll= newroll;
  // olddata[index].date= newdate;
  // olddata[index].phone= newphone;
  olddata[index].comp= newcomp;
  gettable(olddata);
}

// delete
const handledelete = async (dataid)=>{
  let response = await axios.delete(`/delete/${dataid}`);
  if (response.data.success){
    gettable();
  }else{
    alert("Somthing went wrong")
  }
}


return(
  <>
  <div className='heading'><h1> Complaint Station of MMMUT Gorakhpur </h1></div>
  <form className="main">
  <div className="col-md-6">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" id="inputname"
    placeholder='Enter your name'
    value={name}
    onChange={(e)=>setname(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control" id="email"
    placeholder='Enter your email'
    value={email}
    onChange={(e)=>setemail(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Branch</label>
    <input type="text" className="form-control" id="branch"
    placeholder='Enter your branch'
    value={branch}
    onChange={(e)=>setbranch(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label className="form-label">Roll no.</label>
    <input type="number" className="form-control" id="roll"
    placeholder='Enter your roll no.'
    value={roll}
    onChange={(e)=>setroll(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label className="form-label">Date</label>
    <input type="date" className="form-control" id="date"
      placeholder="Enter date"
      value={date}
    onChange={(e)=>setdate(e.target.value)}
    />
  </div><div className="col-md-6">
    <label className="form-label">Phone number</label>
    <input type="number" className="form-control" id="phone"
      placeholder="Enter your number"
      value={phone}
    onChange={(e)=>setphone(e.target.value)}
    />
  </div>
  <div className="col-10">
    <label  className="form-label">Complaint </label>
    <input type="text" className="form-control" id="complaint" 
      placeholder="What's your complaint"
      value={comp}
    onChange={(e)=>setcomp(e.target.value)}
    />
  </div>
  <button
    type='button'
    className="btn btn-primary"
    onClick={()=>handlecreate}
    > Submit </button>
    {/* <button
    type='button'
    className="btn btn-primary"
    onClick={()=>setdata}>Show Data </button> */}
</form>


{data.map((v, i )=>{
  return(
    <>
      <div 
      key={i} 
      id='table'
      className='map'>
      <h3>Complaints:</h3>
        
        <ul>
          <li> Name : {v.Cname}</li>
          <li> Email : {v.Cemail}</li>
          <li> Branch : {v.Cbranch}</li>
          <li> Roll no. : {v.Croll}</li>
          <li> Date : {v.Cdate}</li>
          <li> Phone no. : {v.Cphone}</li>
          <li> Complaint : {v.Ccomp}</li>
          </ul>
        
                <input
                  type="text"
                  onChange={() => {
                  }}
                />
                <button
                  onClick={() => {
                    handleupdate(v._id);
                  }}>
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    handledelete(v._id);
                  }}
                >
                  Delete
                </button>
                </div>
    </>
  )
})}
  </>
)
}
export default Table;
