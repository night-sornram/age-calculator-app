"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  let leaf : boolean = false;
  let checkday = 0;
  let day30 = [4,6,9,11]
  let day31 = [1,3,5,7,8,10,12]
  const [showday,setShowDay] = useState("--")
  const [showmonth,setShowMonth] = useState("--")
  const [showyear,setShowYear] = useState("--")
  const [day,setDay] = useState("")
  const [month,setMonth] = useState("")
  const [year,setYear] = useState("")
  const [daystatus,setDayStatus] = useState("")
  const [monthstatus,setMonthStatus] = useState("")
  const [yearstatus,setYearStatus] = useState("")
  function checkLeapYear(year : number) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        leaf = true
    } else {
        leaf = false
    }
  }

  function checkValid(){
    checkLeapYear(parseInt(year))
    if(day30.includes(parseInt(month))){
      checkday = 30;
    }
    else if(day31.includes(parseInt(month))){
      checkday = 31;
    }else{
      if(leaf === true){
        checkday = 29;
      }
      else{
        checkday = 28;
      }
    }

  }
  function show(){
    var date = new Date();
      var d2 = date.getDate();
      var m2 = 1 + date.getMonth();
      var y2 = date.getFullYear();
      var mon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if(parseInt(day) > d2){
        d2 = d2 + mon[m2 - 1];
        m2 = m2 - 1;
      }
      if(parseInt(month) > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
      }
      var d = d2 - parseInt(day);
      var m = m2 - parseInt(month);
      var y = y2 - parseInt(year);
      setShowDay(d.toString());
      setShowMonth(m.toString());
      setShowYear(y.toString());

  }
  
  function c(){
    show()
    if( day !== "" && month !== "" && year !== "" && parseInt(month) <= 12 && parseInt(year) <= new Date().getFullYear() && parseInt(day) <= 31  ){
      checkValid()
      
      if(parseInt(day) > checkday){
        setDayStatus("invalid2")
        setMonthStatus("invalid2")
        setYearStatus("invalid2")
        setShowDay("--");
        setShowMonth("--");
        setShowYear("--");
      }
      else{
        show()
        setDayStatus("valid")
        setMonthStatus("valid")
        setYearStatus("valid")
      }
    }
    else{
      setShowDay("--");
      setShowMonth("--");
      setShowYear("--");
      if(day=== ""){
        setDayStatus("blank")
      }
      else if( parseInt(day) > 31){
        setDayStatus("invalid")
      }
      else{
        setDayStatus("valid")
      }
      if(month=== ""){
        setMonthStatus("blank")
      }
      else if( parseInt(month) > 12){
        setMonthStatus("invalid")
      }
      else{
        setMonthStatus("valid")
      }
      if(year=== ""){
        setYearStatus("blank")
      }
      else if( parseInt(year) > new Date().getFullYear()){
        setYearStatus("invalid")
      }
      else{
        setYearStatus("valid")
      }
    }
    
  }


  return (
    <div className=' w-screen h-screen  flex justify-center items-center'>
      <div className='  p-10 w-11/12 md:w-[48rem]  bg-white rounded-xl rounded-br-[170px]'>
        <div className='flex flex-row'>
          <div className=' flex flex-col'>
            <div className={daystatus === "blank" || daystatus === "invalid" || daystatus === "invalid2" ? "dateeror" : "date"}>
              D A Y
            </div>
            <input type="number" value={day} onChange={(e)=>{setDay(e.currentTarget.value)}} placeholder='DD' className={daystatus === "blank" || daystatus === "invalid"  || daystatus === "invalid2" ? "e" : "i"} />
            <div className={daystatus === "blank" || daystatus === "invalid" || daystatus === "invalid2" ? "statuserror" : "status"} >
              {daystatus === "blank" ? "This field is required" : ( daystatus === "invalid" ? "Must be a valid day " : (daystatus === "invalid2" ? "Must be a valid date" : "")) }
            </div>
          </div>
          <div className=' ml-3 md:ml-5 flex flex-col'>
            <div className={(monthstatus === "blank" || monthstatus === "invalid" || monthstatus === "invalid2" )? "dateeror" : "date"}>
              M O N T H
            </div>
            <input type="number" value={month} onChange={(e)=>{setMonth(e.currentTarget.value)}} placeholder='MM' className={monthstatus === "blank" || monthstatus === "invalid" || monthstatus === "invalid2"  ? "e" : "i"} />
            <div className={monthstatus === "blank" || monthstatus === "invalid" || monthstatus === "invalid2" ? "statuserror" : "status"}>
              {monthstatus === "blank" ? "This field is required" : ( monthstatus === "invalid" ? "Must be a valid month " : "") }
            </div>
          </div>
          <div className=' ml-3 md:ml-5 flex flex-col'>
            <div className={yearstatus === "blank" || yearstatus === "invalid" || yearstatus === "invalid2" ? "dateeror" : "date"}>
              Y E A R
            </div>
            <input type="number" value={year} onChange={(e)=>{setYear(e.currentTarget.value)}} placeholder='YYYY' className={yearstatus === "blank" || yearstatus === "invalid" || yearstatus === "invalid2" ? "e" : "i"} />
            <div className={yearstatus === "blank" || yearstatus === "invalid" || yearstatus === "invalid2" ? "statuserror" : "status"}>
              {yearstatus === "blank" ? "This field is required" : ( yearstatus === "invalid" ? "Must be in the past " : "") }
            </div>
          </div>     
        </div>
        <div className=' w-12/12  mt-5 flex flex-row justify-center items-center  relative'>
          <svg height="50" className=' absolute z-0 md:static stroke-custom-400 stroke-[3px] w-full mt-10'>
            <line x1="0" y1="0" x2="700" y2="0"/>

          </svg>
          <button onClick={c} 
          className=' z-10 md:top-0 right-2/5 right-2/4 md:right-0 static md:absolute w-14 h-14 md:w-20 md:h-20 rounded-full bg-custom-100 flex justify-center items-center'>
            <Image
            src={"/images/icon-arrow.svg"}
            width={46}
            height={44}
            alt='arrow'/>
          </button>
        </div>
        <div className=' text-5xl md:text-7xl italic font-extrabold'>
          <div>
            <span className=' text-custom-100'>{showyear}</span> years
          </div>
          <div>
            <span className=' text-custom-100'>{showmonth}</span> months
          </div>
          <div>
            <span className=' text-custom-100'>{showday}</span> days
          </div>
        </div>
      </div>
    </div>
  )}