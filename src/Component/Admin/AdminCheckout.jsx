import React, { useEffect } from 'react'

import LeftNav from './LeftNav'



import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCheckout, getCheckout } from '../../Store/ActionCreators/CheckoutActionCreators';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AdminCheckout() {
    var Checkout = useSelector((state) => state.CheckoutStateData)
    var dispatch = useDispatch()
    var navigate=useNavigate()
 
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userid', headerName: 'User Id', width: 130 },
        { field: 'paymentmode', headerName: 'Payment Mode', width: 130 },
       
        { field: 'paymentstatus', headerName: 'Payment Status', width: 130 },
        { field: 'totalAmount', headerName: 'Total Amount', width: 130 },
      
        { field: 'shippingAmount', headerName: 'Shipping Amount', width: 130 },
        { field: 'finalAmount', headerName: 'Final Amount', width: 130 },
       
        { field: 'time', headerName: 'Date', width: 130 },
        {
            field:"view",
            headerName:"View",
            sortable:false,
            renderCell:({row})=>
            <Button onClick={()=>{
                navigate("admin-single-Checkout/"+row.id)
            }}>
                <span className='material-symbols-outlined'>
                    visibility

                </span>

            </Button>,
        },
        // {
        //     field:"delete",
        //     headerName:"Delete",
        //     sortable:false,
        //     renderCell:({row})=>{
        //         if(row.status==="Done"){
        //             return  <Button onClick={()=>dispatch(deleteCheckout({id:row.id}))}>
        //             <span className='material-symbols-outlined'>
        //                 delete_forever
        
        //             </span>
        
        //         </Button>
        //            }
        //     }
          
        // }
    ];

    var rows = []
    for (let item of Checkout) {
        rows.push(item)
    }
    function getAPIData(){
        dispatch(getCheckout())
    }

    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Checkout</h5>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}

                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
