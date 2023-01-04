import { Component } from "react";
import './card-list.styles.css'
import Card from '../card/card.component';

// class Cardlist extends Component{
//     render() {
//         console.log('Render from Cardlist');
//         const {monsters} = this.props;
        
//         return (
//             <div className="card-list">
//             {monsters.map((monster)=>{
                
//                 return (
//                     <Card monster={monster}/>
//                 )
//             })}
            
//             </div>
//         );
//     }



// }
const Cardlist = ({monsters}) => {

    
    
    return (
        <div className="card-list">
        {monsters.map((monster) => {
            
            return (
                <Card monster={monster}/>
            )
        })}
        
        </div>
    );
        
        
    
    
    
    }
export default Cardlist;