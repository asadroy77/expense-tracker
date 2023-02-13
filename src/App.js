import './App.css';
import React from 'react';
import store from './store/store' 
import Balance from './components/balance/balance';
import Inout from './components/inout/inout';
import History from './components/tranhis/transhis';
import Trans from './components/transaction/transaction';
import { Provider, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {

 let [cpesy ,setcPesy] = useState(0)
 let [income ,setIncome] = useState(0)
 let [expense ,setExpense] = useState(0)










 return( <>
 <Provider  store={store}>
 <div className='bodyA'>
    <div className='mainA' >
    <h1> Expense Tracker </h1>
    </div>
   
    <Balance ></Balance>

    <Inout></Inout>
    <History></History>
    <Trans></Trans>

  
</div>
</Provider>
   
</> );
    
}


export default App;



