import React, { useState, useMemo } from 'react'
import './hiringform.css'
import Select from 'react-select'
import axios from "axios";
import countryList from 'react-select-country-list'
import { useHistory } from 'react-router-dom'

function Hiringform() {

    const history = useHistory();
    const [value, setValue] = useState('')
    const [fill_details, setUser] = useState({
        applylist: [],
        fullname: "",
        country: "",
        contactno: "",
        email: "",
        hiringtype: null,
        yournote: ""
    })

    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
        setUser({
            ...fill_details,
            'country': value['label']
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...fill_details,
            [name]: value
        })
    }

    const handlelistChange = (e) => {
        var tempArray = []
        for (let index = 1; index <= 18; index++) {
            if (document.getElementById('chk' + index).checked) {
                tempArray.push(document.getElementById('chk' + index).value)
            }
        }

        setUser({
            ...fill_details,
            'applylist': tempArray
        })
    }

    const submithireform = () => {
        const { applylist, fullname, country, contactno, email, hiringtype, message } = fill_details
        if (fill_details) {
            if (applylist && fullname && country && contactno && email && hiringtype && message) {
                axios.post("http://localhost:4000/dedicatedHiring", fill_details).then(res => {
                    if (res.data.alertmsg) {
                        alert(res.data.alertmsg)
                        history.push("/dedicatedHiring")
                    } else {
                        alert("Server Error ...")
                        history.push("/dedicatedHiring")
                    }
                })
            } else {
                alert("Please provide all the mentioned detailed to contact us.")
            }
        }
    }

    return (

        <div className="hiring-Form-Main-Container">
            <form>
                <div className="hring-form-heading">select as many of  <span>these as apply</span> </div>

                <div className="hiring-From-div">
                    <div className="checkbox-Selection">
                        <div>
                            <input className="check-Box-Feilds" type="checkbox" id="chk1" onChange={handlelistChange} name="applylist" value="Ui/Ux" /><label for="chk1">Ui/Ux</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk2" onChange={handlelistChange} name="applylist" value="DevOps / Cloud DevOps" /><label for="chk2">DevOps / Cloud DevOps</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk3" onChange={handlelistChange} name="applylist" value="Hadoop & Data Science" /><label for="chk3">Hadoop & Data Science</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk4" onChange={handlelistChange} name="applylist" value="Python And Java Development" /><label for="chk4">Python And Java Development</label>
                        </div></div>
                        </div></form>

                  
                                <div className="main-Form-Hiring">
                                    <div className="form-name-Country-Detail">
                                        <div>
                                            <label htmlFor='fullname' className='hiringLabel'>Full Name *</label><br />
                                            <input type='text' className='hiringInput' id='fullname' name="fullname"
                                                value={fill_details.fullname} onChange={handleChange}
                                                placeholder='Enter your full name' required />
                                        </div>
                                        <div>
                                            <label htmlFor='country' className='hiringLabel'>Where Are You From *</label><br />
                                            <Select options={options} value={value} onChange={changeHandler} />
                                        </div>
                                    </div>
                                    <div className="form-Contact-Email-Detail">
                                        <div>
                                            <label htmlFor='contact' className='hiringLabel'>Contact No*</label><br />
                                            <input type='text' className='hiringInput' id='contact' name="contactno"
                                                value={fill_details.contactno} onChange={handleChange}
                                                placeholder='Enter your contact number' required />
                                        </div>
                                        <div>
                                            <label htmlFor='email' className='hiringLabel'>Email*</label><br />
                                            <input type='text' className='hiringInput' id='email' name="email"
                                                value={fill_details.email} onChange={handleChange}
                                                placeholder='Enter your email ' required />
                                        </div>
                                    </div>

                                    <div className="form-Type-Of-Hiring">
                                        <label htmlFor='monthly' className='hiringLabel'>Type Of Hiring</label>
                                        <input type="radio" id="monthly" name="hiringtype" value="Monthly" onChange={handleChange} />
                                        <label for="monthly">Monthly</label>
                                        <input type="radio" id="fixed" name="hiringtype" value="Fixed" onChange={handleChange} />
                                        <label for="fixed">Fixed</label>
                                        <input type="radio" id="decide-Later" name="hiringtype" value="Decide Later" onChange={handleChange} />
                                        <label for="decide-Later">Decide Later</label>
                                    </div>

                                    <div className="Your-Note-div">
                                        <label htmlFor='message' className='Hiringlabel'>Your Note*</label><br />
                                        <textarea rows="5" cols="69" className='hiring-Your-Note-textarea' name="message" id='message'
                                            value={fill_details.message} onChange={handleChange}
                                            required />
                                    </div>

                                    <div className='btndiv'>
                                        <button className='Hiring-submitbtn' onClick={submithireform} value="submit">Submit</button>
                                    </div>
                                </div>
                          
</div>

                        )
}

                        export default Hiringform;
