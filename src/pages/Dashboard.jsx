import React, { useState } from "react";
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";
import { Button } from "../stories/Button";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const [data , setData]=useState(mockData.results)

  const handler=(e)=>{
    const tar=e.target.value
    setSearchText(tar)
    setData(mockData.results.filter((order) =>
    {return order["&id"].toLowerCase().includes(searchText.toLowerCase())}
  ))


  }
 


  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
        <div className={styles.actionBox}>
          <Search value={searchText} onChange={(e) => handler(e)} />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
        
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
         
          <Card cardData={selectedOrderTimeStamps} title="Selected Order Timestamps" />
        </div>
        <List
          rows={data}
          currency={currency}
          time={timestamps.results}
          setSelectedOrderDetails={setSelectedOrderDetails}
          setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}
          
        />
      </div>
      
    </div>
  );
};

export default Dashboard;
