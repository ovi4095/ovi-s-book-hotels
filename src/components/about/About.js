import React from 'react'
import AboutPic from '../../assets/images/logo/logo_Book.png'
import '../../css/About.css'
import Loading from '../loading/Loading'
const About = () => {
  return (
    <div className='container'>
       <div className="About--flex">
        <img className='About--Img' src={AboutPic} alt="About PicsPort" />
        <div className='About--text-1'>
            <p>Welcome to Book Hotels, your premier destination for hassle-free hotel bookings. At Book Hotels, 
            we understand the importance of finding the perfect accommodation for your travels. Whether you're 
            planning a luxurious getaway at a 5-star hotel, a cozy stay at a guesthouse, or a budget-friendly 
            adventure in a hostel, we've got you covered.</p>
            <p>Our platform offers a curated selection of accommodations across five categories to suit every 
            traveler's needs. From the opulent comfort of 5-star hotels to the charm of quaint guesthouses, we 
            strive to provide options that cater to diverse preferences and budgets. With our user-friendly 
            interface and intuitive search features, finding the ideal lodging for your trip has never been easier.</p>
            <p>At Book Hotels, we prioritize transparency and reliability in every aspect of our service. We work closely 
            with trusted partners to ensure that each property listed on our platform meets stringent quality standards. 
            Whether you're seeking a relaxing beach resort or a centrally located city hotel, you can book with confidence 
            knowing that your comfort and satisfaction are our top priorities.</p>
        </div>
       </div>
       <div className='About--text-2'>
        <p>Beyond offering a seamless booking experience, Book Hotels is committed to providing exceptional customer support every 
        step of the way. Our dedicated team is here to assist you with any inquiries or special requests, ensuring that your stay 
        is nothing short of extraordinary.From personalized recommendations to swift resolution of any issues, we go above and beyond 
        to make your hotel booking experience memorable for all the right reasons.</p>
        <p>Join the thousands of satisfied travelers who rely on Book Hotels for their accommodation needs. Whether you're embarking 
        on a solo adventure, planning a family vacation, or organizing a corporate retreat, Join us on this journey of exploration, 
        appreciation, and expression. Whether you're an avid photographer, a passionate enthusiast, or simply someone who appreciates 
        the beauty of visual storytelling, PicPort welcomes you with open arms.</p>
        <p>let Book Hotels be your trusted companion in finding the perfect place to stay. Start exploring our vast selection of hotels 
        today and make your next journey unforgettable. Experience the convenience, reliability, and quality that define Book Hotels. 
        Your dream accommodation awaits.</p>  
       </div>
    </div>
  )
}

export default About