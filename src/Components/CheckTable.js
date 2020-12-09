import React from 'react'
import {Table} from 'react-bootstrap'

function CheckTable() {
    return (
        
        <div className ='Container'>
            
        <div className='table'>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ama</td>
      <td>Johnson</td>
      <td>@amajohnson</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Davids</td>
      <td>@davids</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Derek</td>
      <td>@rich</td>
    </tr>
  </tbody>
</Table>
            
          </div>  
        </div>
       
    )
}


export default CheckTable
