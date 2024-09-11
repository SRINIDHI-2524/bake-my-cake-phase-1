import Content from './Content';
import './Header.css';
import NavBar from './Navbar';
export default function Header({setFilteredProduct}){
    return(
    <div className='Header'>
        <Content/>
        <NavBar setFilteredProduct={setFilteredProduct}/>
        </div>
    );
}