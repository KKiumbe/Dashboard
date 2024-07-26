import React, { useState } from 'react';
import { mockDataTeam } from '../data/mockData';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Box, Typography, useTheme, TextField } from '@mui/material';
import { tokens } from '../theme';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../component/header';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = mockDataTeam.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    
    {
      field: "accessLevel",
      headerName: "Access Level",
      width: 150,
      renderCell: ({ row: { access } }) => {
        return (
        <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px" >
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ mb: 2 }}
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        width="100%"
        sx={{
          overflowX: 'auto',
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Box > {/* Adjust this value as needed */}
          <DataGrid
            checkboxSelection
            rows={filteredData}
            columns={columns}
            autoHeight
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
