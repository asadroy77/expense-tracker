import "./balance.css";
import { useSelector } from "react-redux"
export default function Balance(){
let transactions = useSelector(function(store){
                return store.transReducer
})

let amount = transactions.map(element => {
        return element.amount
})

console.log(amount)

let total = amount.reduce((a,b)=>(a+= +b),0)


            

      

return <>
<div className="mainB">
        <h2> Current Balance </h2>
        <h1>${total}</h1>
        </div>

</>

}