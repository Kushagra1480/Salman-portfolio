import pic from '../../assets/chainsaw.jpg'

const Home = () => {

    return (
        <div className="container home-page">
            <div className = "text-zone">
                <h1 className = 'text-zone'>Hey, I'm Salman</h1>
                <img src = {pic} />
            </div>
        </div>   
    )
}

export default Home