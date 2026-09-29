import Title from "./Title";
const Tours = () => {
  return (
     <section className="section tours" id="tours">
      <Title title="featured" subTitle="tours"/>
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
  )
}

export default Tours