import './Navbar.css';
import Button from "./Button"; // Assuming Button is in the same directory

export default function Navbar({ setFilteredProduct }) { // Correct the component name to 'Navbar'
    console.log("Navbar received setFileteredProduct:", typeof setFilteredProduct);
    return (
        <div className='Navbar'>
            <Button setFilteredProduct={setFilteredProduct} />
        </div>
    );
}
