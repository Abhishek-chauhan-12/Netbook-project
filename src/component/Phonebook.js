

import React, { useState } from 'react';

const Phonebook = () => {
    const [Allcontact, setAllcontact] = useState([])
    const [Userdetails, setUserdetails] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
    })

    let name, value;
    const hendelchange = (e) => {

        name = e.target.name;
        value = e.target.value;
        setUserdetails({ ...Userdetails, [name]: value })
    }
    const submit = (e) => {
        e.preventDefault()
        setAllcontact([...Allcontact, Userdetails])
        setUserdetails({
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: '',
        })

    }
    return (
        <div className="container mt-4">
            <h1 style={{ textAligin: "center" }}>Basic Phonebook</h1>
            <form className="row g-3 mt-4" onSubmit={submit}>
                <div className="col-md-6">
                    <label className="form-label">FirstName</label>
                    <input required type="text" className="form-control" id="inputFirstName" value={Userdetails.FirstName} onChange={hendelchange} name='FirstName' />
                </div><div className="col-md-6">
                    <label className="form-label">LastName</label>
                    <input required type="text" className="form-control" id="inputLastName" value={Userdetails.LastName} onChange={hendelchange} name='LastName' />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input required type="email" className="form-control" id="inputEmail4" value={Userdetails.Email} onChange={hendelchange} name='Email' />
                </div>
                <div className="col-md-6">
                    <label className="form-label">PhoneNumber</label>
                    <input required type="Number" className="form-control" id="inputPhoneNumber4" value={Userdetails.PhoneNumber} onChange={hendelchange} name='PhoneNumber' />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" >ContactSumbit</button>
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
                    <tbody>
                    {Allcontact.sort((a, b) => a.LastName.localeCompare(b.LastName)).map((cur, index) => {
                        return (

                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
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