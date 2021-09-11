import React from 'react'
import './customerreview.css'
function Customerreview() {
    return (
        <>
            <div className="reviewmaincontainer">
                <p className="reviewparahead"> why customer love <span> working with us</span></p>
                <p className="reviewparahead1"> what our  <span> customer say</span></p>

                <div className="interviewvediodiv">
                    <div className="interview1">
                        <div className="introvedio"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/znMk8-IBJOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   </div>
                        <div className="vediodescription">
                            <p className="vediodescriptionpara">Madhukar Govindaraju</p>
                            <p className="vediodescriptionpara1">CBNITS help Numly for developing the product and get the product into market.</p>
                        </div>
                    </div>
                    <div className="interview1">
                        <div className="introvedio"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/zcjU7CRfaJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   </div>
                        <div className="vediodescription">
                            <p className="vediodescriptionpara">Joe Banerjee</p>
                            <p className="vediodescriptionpara1">CBNITS is proud to be part of your digital transformation journey.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Customerreview;
