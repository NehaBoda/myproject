import React from 'react'
import img22 from '../assets/img22.jpg'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
     <div className='home' id="home">
        <main>
            <h1>Boda_Services</h1>
            <p>Solution To All Your Problems</p>
        </main>
    </div>
    <div className='home2'>
        <img src={img22} alt="Graphics"/>
        <div>
            <p>
            Bodaservices is a platform that connects people who want to make their place in inovative world
            </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
            <h1> Who we are?</h1>
            <p> At Boda Services, we aspire to not only provide exceptional transportation solutions but also
                 to generate significant employment opportunities and support co
                 mmunity development. Stay tuned as we gear up to launch a transportation revolution that puts safety,
                  sustainability, and customer satisfaction at the forefront.</p>
        </div>
    </div>
    <div className="home4" id="brands">
        <div>
           <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:"0.3s"
            }} >
                <AiFillGoogleCircle/>
                <p>Google</p>
                
            </div>
            <div style={{
                animationDelay:"0.5s"
            }} >
                <AiFillAmazonCircle/>
                <p>Amazone</p>
                
            </div>
            <div style={{
                animationDelay:"0.7s"
            }} >
                <AiFillYoutube/>
                <p>Youtube</p>
                
            </div>
            <div style={{
                animationDelay:"1s"
            }} >
                <AiFillInstagram/>
                <p>Instagram</p>
                
            </div>
            
        </article>
        </div>
    </div></>
    
   

  )
}

export default Home