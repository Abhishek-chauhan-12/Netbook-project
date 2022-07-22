import React from 'react'
import img from './imges/1658212338323.jpg'
import img1 from './imges/download.jpg'
import img2 from './imges/beauty.jpg'

import { AiOutlineArrowLeft, AiOutlineArrowRight,AiOutlineLike } from 'react-icons/ai'
const Section = () => {
    return (
        <div className="sections">
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-6 col-12 mt-5">
                    <div className="section-right mt-5">
                        <h1>The first NFT Marketplace <br />
                            for youtube & Tik Tok creators
                            <p>Buy sell & auction viral videos as NFTs from your <br />favorite creator</p>
                            <div className="section-btn">
                                <button className='section-btn-right'>Auction</button>
                                <button className='section-btn-left1'>Marketplace</button>
                            </div>
                        </h1>
                    </div>
                </div>
                <div className="col-md-6 col-12 mt-5">
                    <div className="section-left ">
                        <div className="section-btn-left">
                            <i className='section-logo'><AiOutlineArrowLeft /></i>
                            <i className='section-logo1'><AiOutlineArrowRight /></i>
                        </div>
                        <div className="section-cards">
                            <div className="section-img">
                                <img src={img} alt="" />
                            </div>
                            <div className="section-cards1 ">
                            <div className="col-12 d-flex justify-content-around mt-4">
                                <div className="col-6 imges">
                                    <img src={img1} alt="" />
                                    <img src={img2} alt="" />
                                </div>
                                <div className='p-left'>
                                    <p>45k views</p>
                                </div>
                            </div>

                                <h3>chivlry 2 Funny Moments-Sending Our</h3>
                            <div className="col-12 d-flex justify-content-around mt-4">
                                <div className="col-6 d-flex">
                                    <div className="section-h4">
                                        <h6>Highest bid</h6>
                                        <h6 className='mt-3'>Buy Now</h6>
                                    </div>
                                    <div className="card-section">
                                        <p className='section-1'>0.145 ETH</p>
                                        <p className='section-2'>@2.01 ETH</p>
                                    </div>
                                </div>
                                <div className="section-p">
                                    <p >#10/50</p>
                                    <p> <i><AiOutlineLike/></i> 25k</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}
export default Section;