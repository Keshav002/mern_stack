
import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import NET from 'vanta/dist/vanta.net.min'
import Navigation from './Navigation'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Home = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 753.00,
        minWidth: 50.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xa573f2,
        backgroundColor: 0x23233b,
        points: 15.00,
        maxDistance: 45.00,
        showDots: false
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
      <div ref={myRef}>
        <Navigation color="white" />
        <div className="card-group">
          <div className="home-page">
            <div class="home-card">
        <NavLink to="/news">
              <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2020/11/28/901930-arnab-2.jpg" className="card-img-top" alt="..." />
          </NavLink>
              <div className="">
                <h3 className="" style={{ color: 'White', textDecoration:'none' }}>News Hub</h3>
              </div>
            </div>
          </div>
          <div className="home-page">
            <div class="home-card">
          <NavLink to="/reviews">
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/8185/768185-h" className="card-img-top" alt="..." />
          </NavLink>
              <div>
                <h3 style={{ color: 'White' }}>Movies Hub</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home