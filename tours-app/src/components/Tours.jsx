import Title from "./Title";
import Tour from "./Tour";
import {tours} from "../../data";
const Tours = () => {
  return (
     <section className="section tours" id="tours">
      <Title title="featured" subTitle="tours"/>
        <div className="section-center tours-center">
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour}/>
            })}
        </div>
    </section>
  )
}

export default Tours