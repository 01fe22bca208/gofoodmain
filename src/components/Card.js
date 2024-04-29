// import React, { useEffect, useState ,useRef} from 'react';


// import { useDispatchCart,useCart } from './ContextReducer';
// export default function Card(props) {
//     let dispatch=useDispatchCart()
//     let data=useCart()
//     const priceRef=useRef();
//      let options =props.options;
//      let priceOptions = Object.keys(options);
//      const [qty,setQty]=useState(1)
//      const [size,setSize]=useState("")
//  const handleAddToCart=async()=>{
//    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
//    console.log(data);
   
//  }
//  let finalPrice =qty*parseInt(options[size]);
//  useEffect(()=>{
//     setSize(priceRef.current.value)
//  },[])

//     return (
//         <div>
//             <div>
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img  src={props.foodItem.img} alt="..."className="card-img-top" style={{height:"120px",objectFit:"fill"}}  />
//                     <div className="card-body">
//                         <h5 className="card-title">{props.foodItem.name}</h5>
            
//                        <div className='container w-100'> </div>
//                         <select className='m-2 h-100  bg-success rounded ' onChange ={(e)=>setQty(e.target.value)}>
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}> {i + 1}</option>
//                                 )
//                             })}
//                         </select>

//                         <select className='m-2 h-100  bg-success rounted'ref={priceRef} onChange ={(e)=>setSize(e.target.value)}>
//                             { priceOptions.map((data)=>{
//                                 return <option key={data} value={data}>
//                                     {data}
//                                 </option>
//                             }
//                         )}
//                         </select>
//                         <div className='d-inline h-100 fs-5'> ₹{finalPrice}/-

//                         </div>
                        

//                     </div>
//                     <hr>
//                     </hr>
//                     <botton className={'btn btn-success justify-center ms-15 '}onClick={handleAddToCart}>Add to Cart </botton>
//                 </div>
//             </div>

//         </div>
//     )
// }


// import React, { useEffect, useState ,useRef} from 'react';
// import { useDispatchCart, useCart } from './ContextReducer';

// export default function Card(props) {
//     let dispatch = useDispatchCart();
//     let data = useCart();
//     const priceRef = useRef();
//     let options = props.options;
//     let priceOptions = Object.keys(options);
//     let foodItem = props.item;
//     const [qty, setQty] = useState(1);
//     const [size, setSize] = useState("");
//     const [showAlert, setShowAlert] = useState(false); // State for showing the alert

//     const handleAddToCart = async () => {
//         let food =[]
//         for (const item of data){
//             if (item.id===props.foodItem._id){
//                 food = item;
//                 break;

//             }
//         }
//         if(food.length!==0){
//             if(food.size === size){
//              await dispatch({type :"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
//              setShowAlert(true);
//                 setTimeout(() => {
//                     setShowAlert(false);
//                 }, 1000);
//              return
//             }
        
        
//         else if(food.size !==size)
//         {await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size});
//         await console.log(data);
//         setShowAlert(true);
//     setTimeout(() => {
//         setShowAlert(false);
//     }, 1000);
        
//         return 
//          // Set showAlert to true after adding to cart
//     }
    
//      return 
//     }
//     await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size});
//     setShowAlert(true);
//     setTimeout(() => {
//         setShowAlert(false);
//     }, 1000);
// }
//     let finalPrice = qty * parseInt(options[size]);

//     useEffect(() => {
//         setSize(priceRef.current.value);
//     }, []);
    

//     return (
//         <div>
//             <div>
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src={props.foodItem.img} alt="..." className="card-img-top" style={{height: "120px", objectFit: "fill"}} />
//                     <div className="card-body">
//                         <h5 className="card-title">{props.foodItem.name}</h5>
//                         <div className='container w-100'></div>
//                         <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
//                             {Array.from(Array(6), (e, i) => (
//                                 <option key={i + 1} value={i + 1}> {i + 1}</option>
//                             ))}
//                         </select>
//                         <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//                             {priceOptions.map((data) => (
//                                 <option key={data} value={data}>{data}</option>
//                             ))}
//                         </select>
//                         <div className='d-inline h-100 fs-5'> ₹{finalPrice}/-</div>
//                     </div>
//                     <hr></hr>
//                     {/* <button className={'btn btn-success justify-center ms-15'}  onClick={handleAddToCart}>Add to Cart</button> */}
//                     <button className={'btn btn-success justify-center ms-15'} onClick={handleAddToCart} disabled={!localStorage.getItem("authToken")}>
//                     Add to Cart
//                      </button>

//                 </div>
//             </div>
//             {showAlert && (
//                 <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
//                    Item added to cart successfully!
//                     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}></button>
//                 </div>
//             )}
//         </div>
//     );
// }



import React, { useEffect, useState ,useRef} from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    let foodItem = props.item;
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const [showAlert, setShowAlert] = useState(false); // State for showing the alert

    const handleAddToCart = async () => {
        let food =[];
        for (const item of data){
            if (item.id===props.foodItem._id){
                food = item;
                break;
            }
        }
        if(food.length!==0){
            if(food.size === size){
                await dispatch({type :"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 1000);
                return;
            } else {
                await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size});
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 1000);
                return;
            }
        } else {
            await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size});
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 1000);
        }
    }

    let finalPrice = qty * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.foodItem.img} alt="..." className="card-img-top" style={{height: "120px", objectFit: "fill"}} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <div className='container w-100'></div>
                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => (
                                <option key={i + 1} value={i + 1}> {i + 1}</option>
                            ))}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => (
                                <option key={data} value={data}>{data}</option>
                            ))}
                        </select>
                        <div className='d-inline h-100 fs-5'> ₹{finalPrice}/-</div>
                    </div>
                    {!localStorage.getItem("authToken") ? null : (
                        <button className={'btn btn-success justify-center ms-15'} onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
            {showAlert && (
                <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                   Item added to cart successfully!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}></button>
                </div>
            )}
        </div>
    );
}
