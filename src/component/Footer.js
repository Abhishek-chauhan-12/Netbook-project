import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'
import{TbBrandTelegram} from 'react-icons/tb'
import{GiWorld} from 'react-icons/gi'
import {DiGithubAlt} from 'react-icons/di'

const Footer=()=>{
    return(
        <div className="footer pt-5">
        <div className="container pt-5" >
        
        <div className="row">
        <div className="col-12 d-flex  justify-content-between mt-3">
        <div className="item-1 ">
        <h3>Useful Links</h3>
        <div className="item-right d-flex ">
        <div className="item-right">
        <li>Explore</li>
        <li>Auction</li>
        <li>State</li>
        </div>
        <ul>
        <li>Marketplace</li>
        <li>Real-Time</li>
        </ul>
        </div>
        </div>
        
        <div className="item-1 ">
        <h3>Legal</h3>
        <div className="itme">
        <li>Terms & Conditions</li>
        <li>Privacy policy</li>
        
        </div>
        </div>
        <div className="item-1">
        <h3>Help</h3>
        <div className="itme">
        <li>Support</li>
        <li>Contact</li>
        
        </div>
        </div> <div className="item-1">
        <h3>Over Newsletter</h3>
        <form className="d-flex">
              <input className="form-control me-2 input " type="search" placeholder="Search" aria-label="Search"/>
              <button className='butn'>click</button>
            </form>
        </div>
        </div>
        <div className="col-12 d-flex  justify-content-between mt-5">
        <div className="cards-right d-flex ">
        <i><GiWorld/></i>
        <h5>English</h5>
        </div>
        <div className="cards-right d-flex">
        <h4>Follow & Stay Updates</h4>
        <i className='logo1'><TbBrandTelegram/></i>
        <i className='logo2'><AiOutlineTwitter/></i>
        <i className='logo3'><DiGithubAlt/></i>
        </div>
        </div>
        <div className="col-12 text-center mt-5">
        <div className="footer-bottom">
        <p>@nftbook,Inc.All rights reserved.</p>
        </div>
        </div>
        </div>
        </div>
        </div>


    )
}
export default Footer