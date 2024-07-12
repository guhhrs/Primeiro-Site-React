const Cards = () => {
    const cardData = [
        {
            title: "Título 1", 
            subtitle: "Subtitle 1", 
            text: "Este é o texto do primeiro card", 
            img: "https://placehold.co/300x200", 
        }, 

        {
            title: "Título 2", 
            subtitle: "Subtitle 2", 
            text: "Este é o texto do segundo card", 
            img: "https://placehold.co/300x200",
        }, 

        {
            title: "Título 3", 
            subtitle: "Subtitle 3", 
            text: "Este é o texto do terceiro card", 
            img: "https://placehold.co/300x200",
        }
    ]; 

    console.log(cardData)

    return (
        <div className="row">
            {cardData.map((card, index) => (
                      
                <section key={index} className="col-md-4">
                        <article className="card">
                                <img src={card.img} alt="" />
                            <div className="card-body">
                                <h5 className="card-title pt-3 pb-3">{card.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
                                <p className="card-text">{card.text}</p>
                            </div>
                        </article>
                    </section>
                
               
           ) )}

        
        </div>

        

        

      


    )
}

export default Cards; 