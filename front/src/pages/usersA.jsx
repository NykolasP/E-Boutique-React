import React, {useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Prénom', width: 150 },
    { field: 'surname', headerName: 'Nom', width: 150},
    { field: 'email', headerName: 'Email', width: 200}
];

export function UsersA() {
    const [usersData, setUsersData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3001/api/user/users", {
          headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
      }})
        .then( response => response.json())
        .then( data => {
            setUsersData(data)
        })
    }, [])
    return (
        <div style={{ height: 400, width: '100%' }}>
      {usersData && <DataGrid
        rows={usersData}
        columns={columns}
        pageSize={20}
        checkboxSelection
      />}
        </div>
    )
}