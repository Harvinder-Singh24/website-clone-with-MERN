const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
dotenv.config()



mongoose.connect(process.env.DBAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("[ User Database Connected... ]");
}).catch((e) => {
    console.log("[ User Database Connection Error! ]");
})



const contactschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        required: true,
        type: String

    },
    contactno: {
    type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})
const contactschematable = new mongoose.model("contactus", contactschema);


const hiringschema = new mongoose.Schema({
    applylist:{
        type:String,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    contactno:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    hiringtype:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})
const hiringschematable = new mongoose.model("hireus", hiringschema);


app.post("/contactus", (req, res) => {
    const { firstname, lastname, email, contactno, message } = req.body;
    const contactperson = new contactschematable({
        firstname:firstname,
        lastname: lastname,
        contactno:contactno,
        email: email,
        message:message
    })
    contactperson.save(err => {
        if (err) {
            console.log(err)
            res.send({ alertmsg: "Server Error ... " })
        } else {
            // console.log("data saved")
            res.send({ alertmsg: "Thank you for Contacting us.. Soon our representative will contact you" })
        }
    })
})

app.post("/dedicatedHiring", (req, res) => {
    const { applylist, fullname, country, contactno, email, hiringtype, message } = req.body;
    const temphire = new hiringschematable({
        applylist: JSON.stringify(applylist), 
        fullname: fullname, 
        country: country, 
        contactno: contactno, 
        email: email, 
        hiringtype: hiringtype, 
        message: message
    })
    temphire.save(err => {
        if (err) {
            console.log(err)
            res.send({ alertmsg: "Server Error ... "+err })
        } else {
            // console.log(temphire)
            console.log("data saved")
            res.send({ alertmsg: "Thank you for Contacting us.. Soon our representative will contact you" })
        }
    })
})

app.listen(process.env.PORT, () => {
    console.log(`server started at:${process.env.PORT}`)
});