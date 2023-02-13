import "./inout.css" ;
import { useSelector } from "react-redux";

export default function Inout(){


let transactions = useSelector(function(store){
    return store.transReducer
})

let amount = transactions.map(element => {
return element.amount
})



let total = amount.filter(a => +a > 0).
reduce((a,b)=>(a+= +b),0)



let total_expense = amount.filter(a => +a < 0).
reduce((a,b)=>(a+= +b),0)
    







 return <>
 <div className="mainInout">
    <div className="one">
        <h2>Income</h2>
        <h1>{total}</h1>
    </div>
    <div className="two">
    <h2>Expenses</h2>
    <h1>{total_expense}</h1>
    </div>
 </div>
 </>
}