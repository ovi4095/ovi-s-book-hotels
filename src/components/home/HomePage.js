import React from 'react';
import '../../css/homePage.css';
import Banner1 from '../../assets/images/banner/banner1.png'
import Banner2 from '../../assets/images/banner/banner2.png'
import Banner3 from '../../assets/images/banner/banner3.png'
import Banner4 from '../../assets/images/banner/banner4.png'
import Gallery1 from '../../assets/images/banner/gallery1.png'
import Gallery2 from '../../assets/images/banner/gallery2.png'
import Service1 from '../../assets/images/service/3starhotel.png'
import Service2 from '../../assets/images/service/5starhotel.png'
import Service3 from '../../assets/images/service/guesthouse.png'
import Service4 from '../../assets/images/service/resort.png'
import Service6 from '../../assets/images/service/hostel.png'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
      token: state.auth.token
    }
}
const HomePage = (props) => {
    let homeBtn = props.token === null? (<NavLink to='/login' className='Carosuselbtn Carosuselbtn--position Carosuselbtn--color-purple'>Let's Go</NavLink>):
    (<NavLink to='/rooms' className='Carosuselbtn Carosuselbtn--position Carosuselbtn--color-purple'>Let's Go</NavLink>);
    return (
        <div className='container-fluid Home' style={{padding:'0px'}}>

            {/* Carousel */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade Home-Slider-field" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner1} className='d-block w-100' alt='Banner One'  />
                        <div className="carousel-caption d-none d-md-block">
                            {homeBtn}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className='d-block w-100' alt='Banner One'  />
                        <div className="carousel-caption d-none d-md-block">
                            {homeBtn}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner4} className='d-block w-100' alt='Banner One'  />
                        <div className="carousel-caption d-none d-md-block">
                            {homeBtn}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className='d-block w-100' alt='Banner One'  />
                        <div className="carousel-caption d-none d-md-block">
                            {homeBtn}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Gallery view */}
            <section className='container grid'>
                <div className='Gallery--text'>
                    <h2>Take a Look!</h2>
                    <h4>What we have in here!</h4>
                </div>
                <div className='gallery--img-flex'>
                    <img className='GalleryImg' src={Gallery1} alt="." />
                    <img className='GalleryImg' src={Gallery2} alt="." />
                </div>
            </section>
            <section className='container grid'>
                <div className='Category--text'>
                    <Link 
                        to='/category '
                        style={{textDecoration:'none',fontSize: 70, color:'#A91D3A'}}>
                                    <h2 className='serviceHeader'>Our Services</h2>
                    </Link>
                                    <p className='serviceHeaderDetail'>You can browse rooms form different categories in our website </p>
                </div>
                <div className='category--img-flex'>
                    <div>
                        <img className='serviceImage' src={Service1} alt='3 Star Hotel' />
                    </div>
                    <div>
                        <h3 className='serviceTitle'>Three Star Hotel</h3>
                        <p className='serviceDetail'>Offers comfortable rooms with basic amenities, such as TV, Wi-Fi, and room service.
                         Has a restaurant serving meals, and may include a fitness center or pool.</p>
                    </div>
                    <div>
                        <img className='serviceImage' src={Service2} alt='5 Star Hotel' />
                    </div>
                    <div>
                        <h3 className='serviceTitle'>Five Star Hotel</h3>
                        <p className='serviceDetail'>Provides luxurious rooms with high-end amenities like spa services, gourmet dining
                          options, concierge service, and possibly a business center.</p>
                    </div>
                    <div>
                        <img className='serviceImage' src={Service3} alt='Guest House' />
                    </div>
                    <div>
                        <h3 className='serviceTitle'>Guest House</h3>
                        <p className='serviceDetail'>Provides cozy accommodations with a personal touch. Offers breakfast and sometimes 
                        other meals, shared common areas, and a homely atmosphere.</p>
                    </div>
                    <div>
                        <img className='serviceImage' src={Service4} alt='Resort' />
                    </div>
                    <div>
                        <h3 className='serviceTitle'>Resort</h3>
                        <p className='serviceDetail'>Offers a wide range of recreational facilities such as swimming pools, spa, sports  
                        facilities,and entertainment activities. Also includes restaurants, bars, and possibly beach or mountain access.</p>
                    </div>
                    <div>
                        <img className='serviceImage' src={Service6} alt='Hostel' />
                    </div>
                    <div>
                        <h3 className='serviceTitle'>Hostel</h3>
                        <p className='serviceDetail'>Budget-friendly accommodations with shared dormitory-style rooms or private rooms. Provides
                         communal kitchen, social areas, and often organizes activities for guests to meet and mingle.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default connect(mapStateToProps)(HomePage);
