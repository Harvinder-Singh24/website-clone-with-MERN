import React from 'react'
import './helpbtn.css'

function Helpbtn() {

    window.addEventListener("scroll",()=>{
        if (window.pageYOffset > 100){
            document.getElementById("helpbtn").style.pointerEvents="auto"
            document.getElementById("helpbtn").style.opacity="1"
        } 
    })

    const displaymessagebox=()=>{
        document.getElementById("helpbtn").style.display="none";
        document.getElementById("messagebox").style.display="flex";
        document.getElementById("messagebox").style.flexDirection="column";
    }

    const notdisplaymessagebox=()=>{
        document.getElementById("helpbtn").style.display="flex";
        document.getElementById("messagebox").style.display="none";
    }

    return (
        <>
        <button aria-label="Help" className="helpbutton wrapper-AtBcr u-userLauncherColor" id="helpbtn" onClick={displaymessagebox}>
        <div>
            <span type="Icon"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><g id="Layer_4">
                <path d="M11,12.3V13c0,0-1.8,0-2,0v-0.6c0-0.6,0.1-1.4,0.8-2.1c0.7-0.7,1.6-1.2,1.6-2.1c0-0.9-0.7-1.4-1.4-1.4 c-1.3,0-1.4,1.4-1.5,1.7H6.6C6.6,7.1,7.2,5,10,5c2.4,0,3.4,1.6,3.4,3C13.4,10.4,11,10.8,11,12.3z"></path>
                <circle cx="10" cy="15" r="1"></circle>
                <path d="M10,2c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S5.6,2,10,2 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0 L10,0z"></path>
            </g></svg></span>
        </div>
        <span className="u-inlineBlock">Help</span>
        </button>

        <div id="messagebox" className="helpcontainer">
            <div className="helpcontainerheading">
                <span className="helptitle">Help</span>
                <div className="helpminimisebar" onClick={notdisplaymessagebox}>
                    <svg width="16" height="16" viewBox="0 0 16 16" data-garden-id="buttons.icon" data-garden-version="8.13.0" 
                        theme="[object Object]" className="sc-bwzfXH hDrfMZ">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 8h10">
                    </path></svg>
                </div>
            </div>
            <div className="helpcontainercontains">
                <span className="servermessage">Sorry, we aren't online at the moment. Leave a message and we'll get back to you.</span>
                <label className="helplabel" for="name">Name</label><br/>
                <input className="helpinput" type="text" id="name" name="name" /><br/>
                <label className="helplabel" for="email">Email</label><br/>
                <input className="helpinput" type="email" id="email" name="email" /><br/>
                <label className="helplabel" for="message">Message</label><br/>
                <textarea className="helptextarea" cols="10" rows="5" charswidth="23" id="message" name="message"></textarea>
            </div>
            <div className="helpsubmitsection">
                <span className="helpzendesklink"> zendesk</span>
                <button className="helpbutton helpsubmitbtn u-userLauncherColor">Send Message</button>
            </div>
        </div>
        </>
    )
}

export default Helpbtn;
