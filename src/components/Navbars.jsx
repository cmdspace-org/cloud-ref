import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import '../App.css'
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import Transaction from '../components/Transaction';
import Dashboard from '../components/Dashboard';

function Navbars() {
  
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            
          >
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="dashboard" className="link" />}
            
          >
            Credentials
          </MenuItem>
          
          <MenuItem
            component={<Link to="transaction" className="link" />}
            
          >
            Database
          </MenuItem>
          
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transaction" element={<Transaction />} />
        </Routes>
      </section>
    </div>
  )
}

export default Navbars