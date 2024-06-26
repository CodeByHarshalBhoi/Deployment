import {data} from "../restApi.json";

export default function WhoAreWe() {
  return (
    <section className="who_are_we" id="who_are_we">
      <div className="container">
        <div className="text_banner">
            {
                data[0].who_we_are.slice(0, 2).map((ele)=>{
                    return (
                        <div className="card" key={ele.id}>
                            <h1 style={{fontWeight:"300"}} className="heading">{ele.number}</h1>
                            <p>{ele.title}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className="image_banner">
            <img src="/center.svg" alt="center" className="gradient_bg" />
            <img src="/whoweare.png" alt="who" />
        </div>
        <div className="text_banner">
            {
                data[0].who_we_are.slice(2).map((ele)=>{
                    return (
                        <div className="card" key={ele.id}>
                            <h1 style={{fontWeight:"300"}} className="heading">{ele.number}</h1>
                            <p>{ele.title}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}
