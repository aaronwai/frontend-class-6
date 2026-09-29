import aboutImg from '../assets/about.jpeg';
import Title from "./Title.jsx";
const About = () => {
  return (
    <section className="section" id="about">
        <Title title="about" subTitle="us"/>
        <div className="section-center about-center">
            <div className="about-img">
                <img src={aboutImg} alt="hill-photo" className="about-photo"/>
            </div>
            <article className="about-info">
                <h3>explore the difference</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                 <a href="#" className="btn" role="button">read more</a>
            </article>
        </div>
    </section>
  )
}

export default About