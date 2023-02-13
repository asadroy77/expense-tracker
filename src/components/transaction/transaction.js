import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import "./transaction.css";
import store from '../../store/store'
export default function Trans(props){
    let data = useForm();

    function saveT(dataofTrans){

        store.dispatch({
            type:"TRANS_ADDED",
            payload:dataofTrans
        });

        
        // // console.log(typeof(props.cpesy))
        // console.log(dataofTrans.amount)
        // let newvalue = +dataofTrans.amount
        // if (newvalue > 0){
        // let newone = props.cpesy + newvalue
        // props.setcPesy(newone)
        // props.setIncome(newone)}
        // else if ( newvalue < 0){
        // let newone = props.cpesy + newvalue
        // props.setcPesy(newone)
        // let newexpense = props.expense + newvalue
        // props.setExpense(newexpense)

        // }

        // props.setOld([...props.old ,dataofTrans])

        // console.log(props.old)


    }
    return <div className='formmain'>
    <h3>Add a transaction</h3>
    <form onSubmit={data.handleSubmit(saveT)}>
        <div>
            <h3>Add a descripton</h3>
            <input {...data.register('descripton', {required:true})} />
        </div>
        {data.formState.errors.name && <div className="error">descripton dyn</div>}
        
        <div>
            <h3>Add a Amount</h3>
            <input  type="number" {...data.register('amount', {required:true})} />
        </div>
        {data.formState.errors.amount && <div className="error">amount btayn</div>}

    
    <button>Submit</button>
    </form>

</div>

}