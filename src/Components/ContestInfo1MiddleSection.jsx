import React , { useState } from 'react'

const ContestInfo1MiddleSection1 = () => {


    const [slider, setslider] = useState(50) ;

  
    const handleChangeSlider = (e) => {
      setslider(e.target.value) ;
  
      console.log(e.target.value) ;
    }

    return (
        <div className="ContestInfo1-middleSection1">
        <img
          className="ContestInfo1-img company-logo"
          alt="company-logo"
          src={require('../img/6.jpeg')}
        />

        <div className="ContestInfo1-content">
          <p>Montreal</p>
          <h3>League 1</h3>
        </div>

        <div className="ContestInfo1-slider">
        <input type="range" min={0} max={100} value={ slider } onChange ={ handleChangeSlider } />
        <p>Total Spots - 100</p>
        </div>

        <div className="ContestInfo1-icon">
          <i className="material-icons">add_circle</i>
        </div>
      </div>
    )
}

export default ContestInfo1MiddleSection1 ;
