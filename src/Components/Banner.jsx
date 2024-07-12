const Banner = () => {
    const bannerStyle = {
        background: 'url("https://fastly.picsum.photos/id/901/1200/400.jpg?hmac=u5WzqqhT_Eb28jj__hqEMMtnp9jVaXfsVUAGGR5OruE") no-repeat center center',
        backgroundSize: 'cover',
        color: 'white', 
        padding: '100px 0', 
        textAlign: 'center',
    }

    return (
        <div style={bannerStyle}>
           <div className="container">
            <h1 className="display-4">Bem-vindo ao meu site </h1>
            <p className="lead" > Esse site está sendo desenvolvido por Gustavo Oliveira</p>
           </div>
        </div>
    )
}

export default Banner; 
