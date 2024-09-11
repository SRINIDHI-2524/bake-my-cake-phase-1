import './MainList.css';

export default function MainList({abc}){
    return(
        <div className='Name' >
<img  className="img" src={abc.image}></img>
<h4 >
{abc.name}
</h4>
<p>{abc.price}</p>


        </div>

    );
}