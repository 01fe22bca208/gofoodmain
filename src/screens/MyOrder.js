// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {
//     const [orderData, setOrderData] = useState({});

//     const fetchMyOrder = async () => {
//         console.log(localStorage.getItem('userEmail'));
//         try {
//             const response = await fetch("http://localhost:3001/api/myOrderData", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     email: localStorage.getItem('userEmail')
//                 })
//             });
//             if (response.ok) {
//                 const data = await response.json();
//                 setOrderData(data);
//             } else {
//                 throw new Error('Failed to fetch order data');
//             }
//         } catch (error) {
//             console.error('Error fetching order data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchMyOrder();
//     }, []);

//     const calculateTotalPrice = (items) => {
//         return items.reduce((total, item) => {
//             // Check if item has a valid price before adding it to the total
//             return total + (item.price ? item.price : 0);
//         }, 0);
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className='container'>
//                 {Object.keys(orderData).length !== 0 && orderData.orderData && orderData.orderData.order_data ?
//                     orderData.orderData.order_data.map((item, index) => (
//                         <div key={index}>
//                             {Array.isArray(item) && item[0]?.Order_date &&
//                                 <div>
//                                     <h2 className="mt-5" style={{ color: 'white', backgroundColor: '#198754', padding: '5px', borderRadius: '5px' }}>{item[0].Order_date}</h2>
//                                     <hr />
//                                     <div className='row'>
//                                         {item.map((arrayData, innerIndex) => (
//                                             <div key={`${index}-${innerIndex}`} className='col-12 col-md-6 col-lg-3'>
//                                                 {!arrayData.Order_date &&
//                                                     <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                         <div className="card-body">
//                                                             <h5 className="card-title">{arrayData.name}</h5>
//                                                             <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                                 <span className='m-1'>{arrayData.qty}</span>
//                                                                 <span className='m-1'>{arrayData.size}</span>
//                                                                 <div className='d-inline ms-2 h-100 w-20 fs-5'>
//                                                                     ₹{arrayData.price}/-
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 }
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <div className="mt-3">Total Price: ₹{calculateTotalPrice(item)}</div>
//                                 </div>
//                             }
//                         </div>
//                     ))
//                     : <div className="mt-5">No data available</div>
//                 }
//             </div>
//             <Footer />
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState({});

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'));
        try {
            const response = await fetch("http://localhost:3001/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });
            if (response.ok) {
                const data = await response.json();
                setOrderData(data);
            } else {
                throw new Error('Failed to fetch order data');
            }
        } catch (error) {
            console.error('Error fetching order data:', error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => {
            // Check if item has a valid price before adding it to the total
            return total + (item.price ? item.price : 0);
        }, 0);
    };

    return (
        <div>
            <Navbar />
            <div className='container'>
                {Object.keys(orderData).length !== 0 && orderData.orderData && orderData.orderData.order_data ?
                    orderData.orderData.order_data.map((item, index) => (
                        <div key={index}>
                            {Array.isArray(item) && item[0]?.Order_date &&
                                <div>
                                    <h2 className="mt-5" style={{ color: 'white', backgroundColor: '#198754', padding: '5px', borderRadius: '5px', display: 'inline-block', maxWidth: '370px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item[0].Order_date}</h2>
                                    <hr />
                                    <div className='row'>
                                        {item.map((arrayData, innerIndex) => (
                                            <div key={`${index}-${innerIndex}`} className='col-12 col-md-6 col-lg-3'>
                                                {!arrayData.Order_date &&
                                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{arrayData.name}</h5>
                                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                <span className='m-1'>{arrayData.qty}</span>
                                                                <span className='m-1'>{arrayData.size}</span>
                                                                <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                                    ₹{arrayData.price}/-
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-3">Total Price: ₹{calculateTotalPrice(item)}</div>
                                </div>
                            }
                        </div>
                    ))
                    : <div className="mt-5">No data available</div>
                }
            </div>
            <Footer />
        </div>
    );
}
