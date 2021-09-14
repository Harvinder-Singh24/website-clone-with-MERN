import React, {useState} from 'react';
import './contactform.css';
import axios from "axios";

function Contactfrom() {

    
    const [user, setUser] = useState({
        firstname:"",
        lastname:"",
        contactno:"",
        email:"",
        message:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value
        })
    }


    const submitform=()=>{
        
        const {firstname,lastname,contactno,email,message}=user
        if (user){
            if(firstname && lastname && contactno && email && message ) {  
                    axios.post("http://localhost:4000/contactus",user).then(res=>{
                        if (res.data.message){
                            alert(res.data.message)
                        } else {
                            alert("Server Error.. ")
                           
                            }
                        })

            } else {
                alert("Please provide all the mentioned detailed to contact us.")
            }   
        }
    }



    return (
        <div className="contactformmaindiv">
            <div className="contactformcontainer">
                <div className="contactfromaddressdiv">
                    <p className="contactAddressParaHead"> office address:</p>
                    <p className="contactAddressParaHead1"> office </p>
                    <div className="officeAddress">
                        <h2 className="officeAddressheading">USA</h2>
                        <p className="officeAddressLocation"><i className="fas fa-map-marker-alt" /> <abbr> 1861 Camacho Way San Jose, California 95132</abbr></p>
                        <p className="officeAddresscontactNo"><i className="fas fa-mobile-alt" /> <abbr> +1669-213-8571 </abbr></p>
                    </div>
                    <div className="officeAddress">
                        <h2 className="officeAddressheading">India</h2>
                        <p className="officeAddressLocation"><i className="fas fa-map-marker-alt" /> <abbr> Webel IT Park DH 6/6 Action Area 1, Rajarhat, New Town Kolkata-700156</abbr></p>
                        <p className="officeAddresscontactNo"><i className="fas fa-mobile-alt" /> <abbr> +91-9674533118 </abbr></p>
                    </div>
                    <div className="officeAddress">
                        <h2 className="officeAddressheading">Singapore</h2>
                        <p className="officeAddresscontactNo"><i className="fas fa-mobile-alt" /> <abbr>+65-31585521 </abbr></p>
                    </div>
                    <div className="officeAddress">
                        <h2 className="officeAddressheading">Connect with Gmail</h2>
                        <p className="officeAddresscontactNo"><i className="fas fa-envelope" /> <abbr>business@cbnits.com </abbr></p>
                    </div>
                    <div className="officeAddress">
                        <h2 className="officeAddressheading">Connect with Skype</h2>
                        <p className="officeAddresscontactNo"><i className="fas fa-skype" /> <abbr>CBNITS Business Development</abbr></p>
                    </div>

                </div>
                <div className="contactusformdiv">
                    <div className="maincontactform">
                    <form encType="multipart/form-data">
                    
                    <label htmlFor='firstname' className='contactlabel'>First Name</label>
                    <input type='text' className='contactinput' id='name' name="firstname" value={user.firstname} onChange={handleChange} placeholder='Enter your first name' required />
                    
                    <label htmlFor='lastname' className='contactlabel'> Last Name</label>
                    <input type='text' className='contactinput' id='name' name="lastname" value={user.lastname} onChange={handleChange} placeholder='Enter your last name ' required />

                    <label htmlFor='contact' className='contactlabel'>Contact No</label>
                    <input type='text' className='contactinput' id='contact' name="contactno" value={user.contactno} onChange={handleChange} placeholder='Enter your contact number' required />
                   
                    <label htmlFor='email' className='contactlabel'>Email Address</label>
                    <input type='text' className='contactinput' id='email' name="email" value={user.email} onChange={handleChange} placeholder='Enter your email address' required />

                    <label htmlFor='message' className='contactlabel'>Message</label>
                    <input type='textarea' rows='10' cols='5' className='contactinput' name="message" id='message' value={user.message} onChange={handleChange} required />
                      
                    <div className='btndiv'>
                        <div className='submitbtn' onClick={submitform}>Submit</div>
                    </div>
                      
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contactfrom;
