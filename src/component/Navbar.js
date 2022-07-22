import React  from 'react'
import {CgSearch} from 'react-icons/cg'
import {RiAuctionLine} from 'react-icons/ri'
import {AiOutlineSound} from 'react-icons/ai'
import {BsBarChart} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'


const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand Netbook" href="#"> <span>NETBOOK.IO</span> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='abhi'>
              <li className="nav-item d-flex mr-4 " style={{paddingLeft:'30px',paddingRight:'30px'}}>
              <span className='nav-link'> <i><CgSearch/></i></span>
                <a className="nav-link active" aria-current="page" href="#">Explore</a>
              </li>
              <li className="nav-item d-flex" style={{paddingLeft:'30px',paddingRight:'30px'}}>
              <span className='nav-link span'> <i><RiAuctionLine/></i></span>
                <a className="nav-link active" aria-current="page" href="#">Auction</a>
              </li>
              <li className="nav-item d-flex"style={{paddingLeft:'30px',paddingRight:'30px'}}>
              <span className='nav-link'><i><AiOutlineSound/></i></span>
                <a className="nav-link active" aria-current="page" href="#">Marketplace</a>
              </li>
              <li className="nav-item d-flex"style={{paddingLeft:'30px',paddingRight:'30px'}}>
              <span className='nav-link'><i><BsBarChart/></i></span>
                <a className="nav-link active" aria-current="page" href="#">Stats</a>
              </li>
              <li className="nav-item d-flex"style={{paddingLeft:'30px',paddingRight:'30px'}}>
              <span className='nav-link'><i><BiTimeFive/></i></span>
                <a className="nav-link active" aria-current="page" href="#">Activity</a>
              </li>

            </ul>
            <button className="btn btn-outline-success" type="submit">Connect wallet</button>
            
          </div>
        </div>
      </nav>
    )
}
export default Navbar