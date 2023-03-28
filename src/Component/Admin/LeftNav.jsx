import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftNav() {
    return (
        <>
            <div className="list-group">
               
                <Link to="/admin-home" className="list-group-item list-group-item-action">Home</Link>
                <Link to="/admin-user" className="list-group-item list-group-item-action">Users</Link>
                <Link to="/admin-maincategory" className="list-group-item list-group-item-action">Maincategory</Link>
                <Link to="/admin-subcategory" className="list-group-item list-group-item-action">Subcategory</Link>
                <Link to="/admin-brand" className="list-group-item list-group-item-action">Brands</Link>
                <Link to="/admin-product" className="list-group-item list-group-item-action">Products</Link>
                <Link to="/admin-contact" className="list-group-item list-group-item-action">Contact US</Link>
                <Link to="/admin-newslatter" className="list-group-item list-group-item-action">Newslatters</Link>
                <Link to="/admin-checkouts" className="list-group-item list-group-item-action">Checkouts</Link>
              
                 </div>
        </>
    )
}
