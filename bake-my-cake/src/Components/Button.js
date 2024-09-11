
import  './Button.css';
export default function Button({setFilteredProduct}){
    return(
        <div>
        <button className="button" onClick={()=>setFilteredProduct("")}>ALL</button>
          <button className="button"  onClick={()=>setFilteredProduct("cakes")}   >CAKES</button>
          <button className="button"  onClick={()=>setFilteredProduct("cup cakes")} >CUPCAKES</button>
          <button  className="button" onClick={()=>setFilteredProduct("cookies")} >COOKIES</button>
          <button className="button"  onClick={()=>setFilteredProduct("brownies")}>BROWNIES</button>
          <button  className="button"  onClick={()=>setFilteredProduct("chocolates")}>CHOCOLATES</button>
            
        </div>

    );
}