import "./transhis.css";
import store from "../../store/store";
import { useSelector } from "react-redux";
export default function History(){

    let total_trans_his = useSelector(function(store){
        return store.transReducer
    })


    return <> <div className="main">
        <h3>Transaction History</h3>
           {total_trans_his.map((element,index) =>{
            return <>
           
           <ul className="list">
            <li>
            <button onClick={function deletekro(){
                store.dispatch({
                    type:"TRANS_DELETED",
                    payload:index
                });

            }} >x</button>
            {element.descripton}
            <span> {element.amount}</span>
            </li>

            </ul>

            </>

}
)}
</div> 
    
    </>}