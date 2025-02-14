import { useState } from "react"
function FullName(){
    const [person,setperson]=useState({first_name:'Rahul',last_name:'Dravid'})
    const onChangeFirstName = (event)=> {
        const newPerson = {...person};
        newPerson.first_name = event.target.value;
        setperson({...person,first_name:event.target.value})
    }
    return(
        <>
        <div className="container">
            <div className="form-group">
            <label for="first_name">First Name</label>
            <input type="text" id="first_name"
                className="form-control" value={person.first_name}
                onChange={(event)=>setperson({...person,first_name:event.target.value})}/>
            </div>
            <div className="form-group">
            <label for="last_name">Last Name</label>
            <input type="text" id="last_name"
            className="form-control" value={person.last_name}
            onChange={(event)=>setperson({...person,last_name:event.target.value})}/>
            </div>
            <div>Full Name: {person.first_name} {person.last_name}</div>
        </div>
        </>
    )
}
export default FullName;