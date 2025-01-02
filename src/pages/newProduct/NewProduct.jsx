import "./newProduct.css";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1>New Product</h1>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <TextField type="file" id="file" />

          <TextField
            label="Name"
            placeholder="Apple Airpods"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Stock"
            placeholder="123"
            variant="outlined"
            fullWidth
          />

          {/* Active */}
          <FormControl fullWidth>
            <InputLabel id="active-label">Active</InputLabel>
            <Select
              labelId="active-label"
              id="active"
              name="active"
              defaultValue="yes"
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="success"
            size="medium"
            sx={{
              alignSelf: "center",
              paddingX: 3,
              paddingY: 1,
            }}
          >
            Create
          </Button>
        </Box>
      </form>
    </div>
  );
}
