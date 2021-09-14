import React from 'react'
import './diversity.css'
import TCS from '../../images/tcs.png'
import vmware from '../../images/vmware.png'
import persistent from '../../images/persistent.png'
import ibm from '../../images/ibm.png'
import mahindra from '../../images/mahindra.png'
import cybage from '../../images/cybage.png'
import mcafee from '../../images/macfee.png'
import intel from '../../images/intel.png'
import capgemini from '../../images/capgemini.png'


function Diversity() {
    return (
        <>
            <div className="diversitymaincontainer">
            <div className="maindiversitydiv">
                <p className="headingdiversity"> diversity of<span> our team</span></p>
                <div className="diversitycompanylogos">
                    <div className="copmanylogo"><img src={TCS} alt="TCS png" /></div>
                    <div className="copmanylogo"><img src={vmware} alt="VMware png" /></div>
                    <div className="copmanylogo"><img src={persistent} alt="Persistent png" /></div>
                </div>
                <div className="diversitycompanylogos">
                    <div className="copmanylogo"><img src={ibm} alt="IBM png" /></div>
                    <div className="copmanylogo"><img src={mahindra} alt="Tech Mahindra  png" /></div>
                    <div className="copmanylogo"><img src={cybage} alt="CYBAGE png" /></div>
                </div>
                <div className="diversitycompanylogos">
                    <div className="copmanylogo"><img src={mcafee} alt="McAfee png" /></div>
                    <div className="copmanylogo"><img src={intel} alt="Intel png" /></div>
                    <div className="copmanylogo"><img src={capgemini} alt="Capgemini png" /></div>
                </div>
            </div>
            </div>

            <div className="x-factor">x-factor of&nbsp;<span> cbnits</span></div>
        </>
    )
}

export default Diversity;
