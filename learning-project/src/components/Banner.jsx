import logo from '../assets/abstract-logo.jpg'
const Banner = () =>{
    return (
        <header>
            <div>
                <img src={logo} alt="logo"></img>
            </div>
            <div>Providing houses all over the world</div>
        </header>
    );
}
export default Banner;