import "./newUser.css";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1>New User</h1>
      <form>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <TextField
            label="Username"
            placeholder="heba"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Full Name"
            placeholder="Heba Syijari"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Email"
            type="email"
            placeholder="hebasyijari@gmail.com"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            placeholder="password"
            variant="outlined"
            fullWidth
            autoComplete="current-password"
          />

          <TextField
            label="Phone"
            placeholder="+1 123 456 78"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Address"
            placeholder="New York | USA"
            variant="outlined"
            fullWidth
          />

          <FormControl component="fieldset">
            <InputLabel shrink>Gender</InputLabel>
            <RadioGroup row>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

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

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <Button variant="contained" color="success" size="large">
              Create
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
}
