import './css/style.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
 
return (
  //  <!-- navbar -->
  <>
  <Navbar />
    {/*  <!-- hero --> */}
    <section className="hero" id="home">
        <div className="hero-banner">
            <h1>continue exploring</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis explicabo velit quisquam accusamus assumenda.</p>
            <a href="#tours" className="btn hero-btn" role="button">explore tours</a>
        </div>
    </section>
     {/* <!-- about --> */}
    <section className="section" id="about">
        <div className="section-title">
            <h2>about<span>us</span></h2>
        </div>
        <div className="section-center about-center">
            <div className="about-img">
                <img src="./images/Gemini_Generated_Image_xgbryixgbryixgbr.jpeg" alt="hill-photo" className="about-photo"/>
            </div>
            <article className="about-info">
                <h3>explore the difference</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                 <a href="#" className="btn" role="button">read more</a>
            </article>
        </div>
    </section>
    {/* // <!-- services --> */}
    <section className="section services" id="services">
       <div className="section-title">
            <h2>our<span>services</span></h2>
        </div> 
        <div className="section-center services-center">
            {/* <!-- first service --> */}
            <article className="service">
                <span className="service-icon">
                    <i className="fa-solid fa-wallet"></i>
                </span>
                <div className="service-info">
                    <h4>saving money</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                </div>
            </article>
            {/* <!-- second icon --> */}
            <article className="service">
                <span className="service-icon">
                    <i className="fa-solid fa-tree"></i>
                </span>
                <div className="service-info">
                    <h4>endless hiking</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                </div>
            </article> 
            {/* <!-- third icon --> */}
             <article className="service">
                <span className="service-icon">
                    <i className="fa-solid fa-socks"></i>
                </span>
                <div className="service-info">
                    <h4>amazing comfort</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                </div>
            </article>
        </div>
    </section>
    {/* // <!-- tour section --> */}
    <section className="section tours" id="tours">
        <div className="section-title">
            <h2>featured<span>tours</span></h2>
        </div>  
        <div className="section-center tours-center">
            {/* <!-- first tour --> */}
            <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/Copilot_20260918_103647.png" alt="tour photo" className="tour-img" />
                    <p className="tour-date">september 26th, 2026</p>
                </div>
               <div className="tour-info">
                <div className="tour-title"><h4>mount everest</h4></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                <div className="tour-footer">
                    <p><span><i className="fa-solid fa-map"></i>china</span></p>
                    <p>6 days</p>
                    <p>from $2100</p>
                </div>
               </div>
            </article>
{/* <!-- second tour --> */}
 <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/Copilot_20260918_103651.png" alt="tour photo" className="tour-img" />
                    <p className="tour-date">september 26th, 2026</p>
                </div>
               <div className="tour-info">
                <div className="tour-title"><h4>mount everest</h4></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                <div className="tour-footer">
                    <p><span><i className="fa-solid fa-map"></i>china</span></p>
                    <p>6 days</p>
                    <p>from $2100</p>
                </div>
               </div>
            </article>
{/* <!-- third tour --> */}
 <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/Copilot_20260918_103654.png" alt="tour photo" className="tour-img" />
                    <p className="tour-date">september 26th, 2026</p>
                </div>
               <div className="tour-info">
                <div className="tour-title"><h4>mount everest</h4></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                <div className="tour-footer">
                    <p><span><i className="fa-solid fa-map"></i>china</span></p>
                    <p>6 days</p>
                    <p>from $2100</p>
                </div>
               </div>
            </article>
{/* <!-- fourth tour --> */}
 <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/Copilot_20260918_103657.png" alt="tour photo" className="tour-img" />
                    <p className="tour-date">september 26th, 2026</p>
                </div>
               <div className="tour-info">
                <div className="tour-title"><h4>mount everest</h4></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                <div className="tour-footer">
                    <p><span><i className="fa-solid fa-map"></i>china</span></p>
                    <p>6 days</p>
                    <p>from $2100</p>
                </div>
               </div>
            </article>
        </div>
    </section>
    <Footer />
    </>
)
  
}

export default App
