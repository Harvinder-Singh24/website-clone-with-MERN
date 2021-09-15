import React, { useState, useMemo } from 'react'
import './hiringform.css'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function Hiringform() {

    // function CountrySelector(props) {
    //     const [value, setValue] = useState('')
    //     const options = useMemo(() => countryList().getData(), [])

    //     const changeHandler = value => {
    //       setValue(value)
    //     }

    //     return props.options, props.value, props.changeHandler;
    //   }




    return (
        <>
            <div className="hiring-Form-Main-Container">
                <div className="hring-form-heading">select as many of  <span>these as apply</span> </div>
                <div className="hiring-From-div">
                    <form>
                        <div className="checkbox-Selection">
                          <div>  <input className="check-Box-Feilds" type="checkbox" id="chk1" name="Ui/Ux" /><label for="chk1">Ui/Ux</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk2" name="DevOps / Cloud DevOps" /><label for="chk2">DevOps / Cloud DevOps</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk3" name="Hadoop & Data Science" /><label for="chk3">Hadoop & Data Science</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk4" name="Python And Java Development" /><label for="chk4">Python And Java Development</label>
                            </div>
                            <div>
                            <input className="check-Box-Feilds" type="checkbox" id="chk5" name="Backend Development" /><label for="chk5">Backend Development</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk6" name="Cloud Development" /><label for="chk6">Cloud Development</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk7" name="IOT(Internet Of Things)" /><label for="chk7">IOT(Internet Of Things)</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk8" name="Microsoft Dynamics 365" /><label for="chk8">Microsoft Dynamics 365</label>
                            </div>
                            <div>
                            <input className="check-Box-Feilds" type="checkbox" id="chk9" name="Dedicated Full-Stack Development" /><label for="chk9">Dedicated Full-Stack Development</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk10" name="Maintenance & Support" /><label for="chk10">Maintenance & Support</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk11" name="Cyber Security" /><label for="chk11">Cyber Security</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk12" name="Blockchain Technology" /><label for="chk12">Blockchain Technology</label>
                            </div>
                            <div>
                            <input className="check-Box-Feilds" type="checkbox" id="chk13" name="Web Development" /><label for="chk13">Web Development</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk14" name="React & Angular Development" /><label for="chk14">React & Angular Development</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk15" name="Quality Engineering" /><label for="chk15">Quality Engineering</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk16" name="Machine Learning" /><label for="chk16">Machine Learning</label>
                            </div>
                            <div>
                            <input className="check-Box-Feilds" type="checkbox" id="chk17" name="Mobile Application Development" /><label for="chk17">Mobile Application Development</label>
                            <input className="check-Box-Feilds" type="checkbox" id="chk18" name="Application Development" /><label for="chk18">Application Development</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="main-Form-Hiring">
                    <form >
                        <div className="form-name-Country-Detail">
                            <div>
                                <label htmlFor='fullname' className='hiringLabel'>Full Name *</label><br />
                                <input type='text' className='hiringInput' id='fullname' name="fullname"
                                    // value={user.fullname} onChange={handleChange} 
                                    placeholder='Enter your full name' required />
                            </div>
                            <div>
                                <label htmlFor='country' className='hiringLabel'>Where Are You From *</label><br />
                                <input type='text' className='hiringInput' id='country' name="country"
                                    // value={user.country} onChange={handleChange} 
                                    placeholder='Enter your first name' required />
                            </div>
                        </div>

                        <div className="form-Contact-Email-Detail">
                            <div>
                                <label htmlFor='contact' className='hiringLabel'>Contact No*</label><br />
                                <input type='text' className='hiringInput' id='contact' name="contactno"
                                    // value={user.contactno} onChange={handleChange}
                                    placeholder='Enter your contact number' required />
                            </div>
                            <div>
                                <label htmlFor='email' className='hiringLabel'>Email*</label><br />
                                <input type='text' className='hiringInput' id='email' name="email"
                                    //  value={user.email} onChange={handleChange} 
                                    placeholder='Enter your email ' required />
                            </div>
                        </div>

                        <div className="form-Type-Of-Hiring">
                            <label htmlFor='monthly' className='hiringLabel'>Type Of Hiring</label>
                            <input type="radio" id="monthly" name="Monthly" value="Monthly" />
                            <label for="monthly">Monthly</label>
                            <input type="radio" id="fixed" name="Fixed" value="Fixed" />
                            <label for="fixed">Fixed</label>
                            <input type="radio" id="decide-Later" name="Decide Later" value="Decide Later" />
                            <label for="decide-Later">Decide Later</label>
                        </div>

                        <div className="Your-Note-div">
                            <label htmlFor='message' className='Hiringlabel'>Your Note*</label><br />
                            <textarea rows="5" cols="69" className='hiring-Your-Note-textarea' name="message" id='message'
                                // value={user.message} onChange={handleChange} 
                                required />
                        </div>

                        <div className='btndiv'>
                            <button className='Hiring-submitbtn'
                                // onClick={submitform} 
                                value="submit">Submit</button>
                        </div>

                    </form>

                </div>

            </div>
        </>

    )
}

export default Hiringform;
