

import React, {useState } from 'react';

const Phonebook = () => {
    const [contact, setcontact] = useState([])
    const [user, setuser] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Address: '',
        City: '',
        PhoneNumber: '',
    })
    let name, value;
    const hendelchange = (e) => {

        name = e.target.name;
        value = e.target.value;
        setuser({ ...user, [name]: value })
    }
    const submit = (e) => {
        console.log("data", contact)
        e.preventDefault()
        setcontact([...contact, user])
        setuser({
            FirstName: '',
            LastName: '',
            Email: '',
            Address: '',
            City: '',
            PhoneNumber: '',
        })

    }
    return (
        <div className="container mt-4">
        <h1 style={{textAligin:"center"}}>Contact Passbook</h1>
            <form className="row g-3 mt-4" onSubmit={submit}>
                <div className="col-md-6">
                    <label className="form-label">FirstName</label>
                    <input required type="text" className="form-control" id="inputFirstName" value={user.FirstName} onChange={hendelchange} name='FirstName' />
                </div><div className="col-md-6">
                    <label className="form-label">LastName</label>
                    <input required type="text" className="form-control" id="inputLastName" value={user.LastName} onChange={hendelchange} name='LastName' />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input required type="email" className="form-control" id="inputEmail4" value={user.Email} onChange={hendelchange} name='Email' />
                </div>
                <div className="col-md-6">
                    <label className="form-label">PhoneNumber</label>
                    <input required type="Number" className="form-control" id="inputPhoneNumber4" value={user.PhoneNumber} onChange={hendelchange} name='PhoneNumber' />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" >submit</button>
                </div>
            </form>
            <div className="row mt-4">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">PhoneNumber</th>
                        </tr>
                    </thead>
                    <tbody>{contact.sort((a,b)=>a.FirstName.localeCompare(b.FirstName)).map((cur,index) => {
                        return (

                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{cur.FirstName}</td>
                                <td>{cur.LastName}</td>
                                <td>{cur.Email}</td>
                                <td>{cur.PhoneNumber}</td>

                            </tr>
                        )

                    })}



                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Phonebook;