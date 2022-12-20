import React, { Fragment, useState } from 'react';
import Navbar from '../components/Navbar';
import king from '../assest/images/zinger.png';
import wrap from '../assest/images/wrap.png'
import mug from '../assest//images/cup.png';
import Button from '../components/Button';
import baba from '../assest/images/baba.png'
import bandri from '../assest/images/Bandri.png'
import pizza from '../assest//images/pizza.png';
import Poster from '../components/Poster';
import InstagramButton from "react-instagram-button";
function Home() {
  const [bulb, updateBulb] = useState(false)
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluied pichy">
        <div className="container">
          <div className="row g-0 justify-content-center align-items-center m-auto py-5 ">
            <div className="col-lg-4 col-md-4 col-sm-4 d-none d-sm-block">
              <img className='img-fluid ' src={king} alt="" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xl-4 text-center">
              <InstagramButton username={"zarttash"} />
              <h1 className='heading1 d-none d-sm-block'>Viva Ia Birria {bulb.toString()}</h1>
              <p className='heading pt-3 d-none d-sm-block'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing eli ghgyg jkhuiyui adipisicing elit.</p>
              <Button onPress={() => {
                updateBulb(!bulb)
              }} title={bulb ? "ON" : "OFF"} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img className='img-fluid' src={mug} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluied">
        <div className="container">
          <div className="row py-lg-0 py-5  justify-content-center align-items-center m-auto">
            <div className="col-md-6 col-sm-12 col-6 col-xl-6 col-lg-6  pt-lg-5 pt-sm-0">
              <div className='w-lg-75 w-sm-0'>
                <Poster heading="Catering" />
                <Button title="Order Catering" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-6 col-xl-6 col-lg-6 pt-sm-0 pb-5">
              <img className='img-fluid' src={wrap} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluied bg">
        <div className="container">
          <div className="row justify-content-center align-items-center m-auto">
            <div class
              Name="col-md-6 col-sm-6 col-6 col-xl-6 col-lg-6 pt-sm-0  pb-sm-0">
              <img className='pt-5 img-fluid' src={baba} alt="" />
            </div>
            <div className="col-md-6 col-sm-6 col-6 col-xl-6 col-lg-6 pt-sm-0 pb-lg-5 pb-sm-0 ">
              <div className="text2  pt-sm-0">
                <h1 className='heading1 '>Download our app for a faster and better experieance</h1>
                <Button title="Download" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluied">
        <div className="container">
          <div className="row py-lg-0 py-5  justify-content-center align-items-center m-auto">
            <div className="col-md-6 col-sm-12 col-6 col-xl-6 col-lg-6 pt-sm-0">
              <div className='w-lg-75 w-sm-0 shaper'>
                <Poster heading="Pizzadilla" />
                <Button title="Order Catering" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-6 col-xl-6 col-lg-6">
              <img className='img-fluid' src={pizza} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluied pichy">
        <div className="container">
          <div className="row justify-content-center align-items-center m-auto">
            <div className="col-md-6 col-sm-6 col-6 col-xl-6 col-lg-6 pt-sm-0  pb-sm-0">
              <img className='pt-5 img-fluid' src={bandri} alt="" />
            </div>
            <div className="col-md-6 col-sm-6 col-6 col-xl-6 col-lg-6 pt-sm-0 pb-lg-5 pb-sm-0 text2">
              <div className=' pe-lg-5'>
                <Poster heading="Restaurant Owners" />
                <Button title="Order Catering" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Navbar />
      </footer>
    </Fragment>
  )
}
export default Home
