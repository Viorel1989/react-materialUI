import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import Result from "./Components/Result";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    interestRate: 5,
  });
  return (
    <div className="App">
      <Navbar />
      <Grid container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <SliderSelect data={data} setData={setData} />
          <TenureSelect data={data} setData={setData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Result data={data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
