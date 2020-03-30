import React,{Component} from 'react';
import './ListItem.css';

// const ListItem = (props) =>{
//     const item = props.item;
//     if(item.done){
//         return (
//             <div>
//                 {/* <p onclick={this.ColorClick} style={this.style} className="done-item">{item.content}</p>  */}
//                 <p className="done-item">{item.content}</p> 
               

//             </div>
//         )
//     }else{
//         return <p className="item">{item.content}</p>
//     }
// } 


class ListItem extends Component{

    constructor(props){
        super(props);
    }

    onChangeItem = (event) => {
        event.target.className = "done-item";
    }

    render(){
        if(this.props.item.done){
            return <p className="done-item">{this.props.item.content}</p>
        }else{
            return <p className="item" onClick={this.onChangeItem}>{this.props.item.content}</p>
        }
    }
    
}

export default ListItem;
