import { Box } from "@mui/material";
import Header from "../component/header";
import PieChart from "../component/pieChart";



const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart/>
      </Box>
    </Box>
  );
};

export default Pie;