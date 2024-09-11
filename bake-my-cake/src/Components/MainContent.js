//images must be declare here
//import logo from '../assets/logo.png';
import './MainContent.css';
import MainList from './MainList';
export default function MainContent({fillterData}){
    return(
        <div className='Display'>
            <div className='Main' >
            <div className='Child' >
                
                <h1>
                    Birthday Cake Delivery 👨‍🍳
                </h1>
                <p className='pp'>
                    Same Day and Midnight Delivery
                </p>
                <button className="Button"> Shop Now</button>

                </div>
            
            <img src="./images/classic Cheesecake.jpg"className="logo" />
            
            </div>
        {fillterData.map((c)=><MainList abc={c} key={c.id}/>)} 

            
            </div>

    );
}