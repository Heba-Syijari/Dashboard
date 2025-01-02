// import { Link } from "react-router-dom";
// import "./product.css";
// import Chart from "../../components/chart/Chart";
// import { productData } from "../../dummyData";
// import { Publish } from "@mui/icons-material";
// import Button from "@mui/material/Button";
// import Airpods from "../../assets/images/Apple Airpods.jpg";

// export default function Product() {
//   return (
//     <div className="product">
//       <div className="productTitleContainer">
//         <h1 className="productTitle">Product</h1>
//         <Link to="/newproduct">
//           <Button variant="contained" color="success" size="small">
//             Create
//           </Button>
//         </Link>
//       </div>
//       <div className="productTop">
//         <div className="productTopLeft">
//           <Chart data={productData} dataKey="Sales" title="Sales Performance" />
//         </div>
//         <div className="productTopRight">
//           <div className="productInfoTop">
//             <img src={Airpods} alt="product" className="productInfoImg" />
//             <span className="productName">Apple Airpods</span>
//           </div>
//           <div className="productInfoBottom">
//             <div className="productInfoItem">
//               <span className="productInfoKey">id:</span>
//               <span className="productInfoValue">123</span>
//             </div>
//             <div className="productInfoItem">
//               <span className="productInfoKey">sales:</span>
//               <span className="productInfoValue">5123</span>
//             </div>
//             <div className="productInfoItem">
//               <span className="productInfoKey">active:</span>
//               <span className="productInfoValue">yes</span>
//             </div>
//             <div className="productInfoItem">
//               <span className="productInfoKey">in stock:</span>
//               <span className="productInfoValue">no</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="productBottom">
//         <form className="productForm">
//           <div className="productFormLeft">
//             <label>Product Name</label>
//             <input type="text" placeholder="Apple AirPod" />
//             <label>In Stock</label>
//             <select name="inStock" id="idStock">
//               <option value="yes">Yes</option>
//               <option value="no">No</option>
//             </select>
//             <label>Active</label>
//             <select name="active" id="active">
//               <option value="yes">Yes</option>
//               <option value="no">No</option>
//             </select>
//           </div>
//           <div className="productFormRight">
//             <div className="productUpload">
//               <img src={Airpods} alt="product" className="productUploadImg" />
//               <label htmlFor="file">
//                 <Publish />
//               </label>
//               <input type="file" id="file" style={{ display: "none" }} />
//             </div>
//             <Button variant="contained" color="success" size="small">
//               Create
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  IconButton,
} from "@mui/material";
import { Publish } from "@mui/icons-material";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import Airpods from "../../assets/images/Apple Airpods.jpg";

export default function Product() {
  return (
    <Box sx={{ flex: 4, padding: 2 }}>
      {/* Title Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Product
        </Typography>
        <Link to="/newproduct">
          <Button variant="contained" color="success" size="small">
            Create
          </Button>
        </Link>
      </Box>

      {/* Top Section */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </Box>
        <Box
          sx={{
            flex: 1,
            padding: 2,
            boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
            borderRadius: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <img
              src={Airpods}
              alt="product"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "20px",
              }}
            />
            <Typography variant="h6" fontWeight="bold">
              Apple Airpods
            </Typography>
          </Box>
          <Box sx={{ paddingX: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 1,
              }}
            >
              <Typography variant="body1">id:</Typography>
              <Typography variant="body2" fontWeight="300">
                123
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 1,
              }}
            >
              <Typography variant="body1">sales:</Typography>
              <Typography variant="body2" fontWeight="300">
                5123
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 1,
              }}
            >
              <Typography variant="body1">active:</Typography>
              <Typography variant="body2" fontWeight="300">
                yes
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1">in stock:</Typography>
              <Typography variant="body2" fontWeight="300">
                no
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          padding: 2,
          boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
          borderRadius: 1,
        }}
      >
        <form style={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Product Name"
              placeholder="Apple AirPod"
              variant="outlined"
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="in-stock-label">In Stock</InputLabel>
              <Select labelId="in-stock-label" defaultValue="yes">
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="active-label">Active</InputLabel>
              <Select labelId="active-label" defaultValue="yes">
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={Airpods}
                alt="product"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginRight: "20px",
                }}
              />
              <IconButton component="label">
                <Publish />
                <input type="file" hidden />
              </IconButton>
            </Box>
            <Button variant="contained" color="success" size="small">
              Create
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
