import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../redux/features/collectionSlice';
import { Link } from 'react-router-dom';
import CollectionCard from '../components/collectionCard';
const Collection = () => {
    let dispatch = useDispatch();

   useEffect(() => {
let data =JSON.parse(localStorage.getItem("collection"))||[]
  dispatch(setData(data));
   }, [dispatch]);

   // this line take the data which is set by set data into the collection slice
    let returnedData = useSelector((state)=>state.Collection.data);

    // this runs when the user click the remove button
   const handleRemove=(idx)=>{
    const updatedData=returnedData.filter((items,index)=>{
        return index !==idx;
    })
    localStorage.setItem("collection",JSON.stringify(updatedData))
    dispatch(setData(updatedData))
   }


  return (
    <div className='flex flex-col w-full h-screen'> 
    <nav className=' h-16 px-5 pt-4 text-xl flex decoration-black underline'>
        <h1 className='text-center w-full font-bold text-3xl text-black'>Welcome to The Collection page </h1>
  <Link to={'/'}><button className='border-2 border-white rounded-xl px-2 py-1.5 active:scale-90 cursor-pointer'>clickToHome</button></Link>
    </nav>


    <div className='flex gap-2 h-[92%] w-full py-4 items-center px-10 overflow-auto flex-wrap'>

 
  {returnedData.map((elem,idx)=>{
    return <CollectionCard elem={elem} idx={idx} handleRemove={handleRemove}/>
  })}
     </div>
    </div>
  )
}

export default Collection