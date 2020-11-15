import React, { Component } from 'react' 
import {useForm} from "react-hook-form";
import { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { ResponsiveRadar } from '@nivo/radar'




const FormsAndInputs = () => { 

    const {register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        const jsonReq = JSON.stringify({
            NHHINC: rev.toString(),
            HFIN_YN: finA.toString(),
            HPRES_MORT: mortgage.toString(),
            HDIV_YN: stonk.toString(),
            NHUNDER18: kids.toString(),
            HINT_YN: bank.toString(),
            NRPP: loc.toString()
        });

        console.log(jsonReq)
        
        await fetch(`https://stonks-io.herokuapp.com/api/advice`, {
        method: "POST",
        body: jsonReq,
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
        }).then((response) => {
            console.log(response)
            return response.json()
        }).then(res => {
            console.log(res)
            const chartRoot = [
                {
                    'title': 'Get a credit card',
                    'value': res.get_credit_card
                },
                {
                    'title': 'Relocate',
                    'value': res.relocate
                },
                {
                    'title': 'Get bank account',
                    'value': res.get_bank_account
                },
                {
                    'title': 'Diversify',
                    'value': res.fin_diversification
                },
                {
                    'title': 'Consolidate',
                    'value': res.fin_consolidation
                }
            ]

            setResponse(chartRoot);
        })

    }

    const MyResponsiveRadar = (chartRoot) => (
        <ResponsiveRadar
            data={chartRoot}
            keys={ 'value' }
            indexBy="title"
            maxValue="auto"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: 'color' }}
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={{ scheme: 'nivo' }}
            fillOpacity={0.25}
            blendMode="multiply"
            animate={true}
            motionConfig="wobbly"
            isInteractive={true}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )

const[response,setResponse] = useState({'title':'', 'value':0}, {'title':'', 'value':0}, {'title':'', 'value':0}, {'title':'', 'value':0}, {'title':'', 'value':0});

const [capG,setcapG] = useState(0);
const [bus,setbus] = useState(0); 
const [finC,setfinC] = useState(0); 
const [lE,setlE] = useState(0);
const [bank,setbank] = useState(0); 
const [kids,setkids] = useState(0); 
const [rev,setrev] = useState(0); 
const [exp,setexp] = useState(0);   
const [loc,setloc] = useState("homeless"); 
const [stonk,setstonk] = useState(0); 
const [finA,setfinA] = useState(0);
const [mortgage, setMortgage] = useState(0);  

const [finalI, setfinalI] = useState(0);
const [finalA,setfinalA] = useState(0);
const [stockf,setstockf] = useState(0); 
const [fkids,setfkids] = useState(0); 
const [costL,setcostL] = useState(0);
    return( 
        <div className="FormsAndInputs"> 
         <form onSubmit={handleSubmit(onSubmit)}> 
                <h1 className="className">Possible Goals for Stonks.io?</h1>
                <label for="capGrowth" className="capGrow"> 
                        <input  name="capGrowth" id="capGrowth" type="checkbox" ref={
                             register()
                             } onInput = {()=>setcapG(capG ==1 ? 0:1)}/>  
                       <space></space> Capital Growth </label>
                    <div></div> 
                   
                    <label for="startBus" className="startbiz">
                     <input name="startBus"  type="checkbox" id="startBus" ref={
                  
                  register()
                     } onInput = {()=>setbus(bus ==1 ? 0:1)} />
                    <space></space> Starting a Business</label>
                    <div></div>
                    <label for="finCol" className="finny">
                    <input name="finCol" type="checkbox" id="finCol" ref={
                register()
                 } onInput = {()=>setfinC(finC ==1 ? 0:1)}/>
                <space></space> Financing College</label>
             <div></div>
             <label for="livingExpense" className="livE">
                <input name="livingExpense" type="checkbox" id="livingExpense" ref={
                register()
                } onInput = {()=>setlE(lE ==1 ? 0:1)}/>
               <space></space> Budget Living Expenses</label>
                    <div></div>
          
          
                <h1 className="info">Personal Information</h1>
          
      
                <label className="inc"> 
                    <span className= "textN">Income:</span> <space></space>          
                    <input type="number" name="income" ref={register} onChange={event=>setrev(event.target.value)} className="inc2"/>
                    </label> <br></br>
                <label className="expe"> 
                <span className= "textN">Expenses:</span> <space></space>
                    <input type="number" name="expense" ref={register} onChange={event=>setexp(event.target.value)} className="expe2"/>
                </label> <br></br>
                <label className="fib"> 
                <span className= "textN">  State Fib Code:</span> <space></space>
                    <input type="text" name="location" ref={register} className="fib2" onChange={event=>setloc(event.target.value)} />
                </label> <br></br>
                <label className="child"> 
                <span className= "textN"> Children: </span><space></space>
                    <input type="number" name="children" ref={register} className="child2" onChange={event=>setkids(event.target.value)} />
                </label> <br></br>
                <label className="bannk">Do you have a Bank?</label>
                <label className="bannky"><space></space> Yes
                <input name="Bank" type="radio" value="Yes" ref={register({required: true })} onInput = {()=>setbank(bank ==1 ? 0:1)} /> 
                </label><label className="bannkn"><space></space> No
                <input name="Bank" type="radio" value="No" ref={register({required: true })} onInput = {()=>setbank(bank ==1 ? 0:1)} />
                </label> <br></br>
                

                <label className="stonkk">Do you have a Mutual Funds or Stocks?</label>
                    <label className="stonkky"><space></space> Yes 
                    <input name="mutualfund" type="radio" value="Yes" ref={register({required: true })} onInput = {()=>setstonk(stonk ==1 ? 0:1)} /> 
                    </label><label className="stonkkn"> No 
                    <input name="mutualfund" type="radio" value="No" ref={register({required: true })} onInput = {()=>setstonk(stonk ==1 ? 0:1)}/>
                    </label> <br></br>

                    <label className="finAS">Do you have Finacial Assistance?</label>
                    <label className="finASy"><space></space> Yes
                    <input name="finass" type="radio" value="Yes" ref={register({required: true })} onInput = {()=>setfinA(finA ==1 ? 0:1)} /> 
                    </label ><label className="finASn"><space></space> No
                    <input name="finass" type="radio" value="No" ref={register({required: true })} onInput = {()=>setfinA(finA ==1 ? 0:1)}/>
                    </label> <br></br>

                    <label className="mortgage">Do you have a mortgage?</label>
                    <label className="mortgagey"><space></space> Yes 
                    <input name="mortgage" type="radio" value="Yes" ref={register({required: true })} onInput = {()=>setMortgage(mortgage ==1 ? 0:1)} /> 
                    </label><label className="mortgagen"> No 
                    <input name="mortgage" type="radio" value="No" ref={register({required: true })} onInput = {()=>setMortgage(mortgage ==1 ? 0:1)}/>
                    </label> <br></br>

             <button className="submitb" type="submit" onClick ={()=>setfinalI(rev)} onClick ={()=>setfinalA(finA)} onClick ={()=>setstockf(stonk)}
             onClick ={()=>setfkids(kids)} onClick ={()=>setcostL(loc)} className="submitbutton" 
             >Submit</button>

                
            </form>
            <MyResponsiveRadar {...response}/>
        </div>


    )
//big cock  8=========D<
                
}





export default FormsAndInputs;