import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Card = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
    // console.log(uniqueId);
    // console.log(singleData);

  const handleShowAll = () => {
    // console.log("hello");
    setShowAll(true);
  };

  // eita dorkar nai.. eita setUniqueId useState dia krbo
  // const handleId = (id, value) => {
  //   console.log(id);
  //   console.log(value);
  // };

  // const handleSort = ()=>{
  //   const sortedData = data.sort((a,b)=>{
  //     return new Date(a.published_in) - new Date(b.published_in);
  //   });
  //   // setData(sortedData);
  //   setData([...data,sortedData]);

  // }
  const handleSort = ()=>{
    const sortedData = data.sort((a,b) =>{
      return new Date(a.published_in) - new Date(b.published_in);
    })
    // setData(sortedData)
    setData([...data, sortedData]);
  }



  useEffect(()=>{
    // console.log('hello from useEffect')
      fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then(res => res.json())
      .then(data => setSingleData(data.data))
  },[uniqueId])
  console.log(singleData);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const value = await res.json();
      // console.log(value.data.tools);
      setData(value.data.tools);
    };
    
    loadData();
    // console.log(data);
  }, []);
  return (
    <>
   <span onClick={handleSort}>
   <Button>Sort By Date</Button>
   </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6">
        {
          // data.map((singleData)=> {
          //     // console.log(singleData)
          //     return <SingleData singleData={singleData}/>
          // })

          data.slice(0, showAll ? 12 : 6).map((singleData) => (
            <SingleData
              singleData={singleData}
              key={singleData.id}
              setUniqueId = {setUniqueId}
              // handleId={handleId}
            />
          ))
        }
      </div>
      {/* <p style={{display: 'inline-block'}} onClick={handleShowAll}>
            <Button>See More</Button>
           </p> */}
      {!showAll && (
        <span onClick={handleShowAll}>
          <Button>See More</Button>
        </span>
      )}
      <Modal singleData={singleData}></Modal>
    </>
  );
};

export default Card;
