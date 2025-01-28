import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const PersonalDetailsForm = () => {
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "auto",
        p: 3,
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#852bd9",
          color: "white",
          p: 3,
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",

          height: { sm: "40vh", md: "25vh" },
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Personal details
        </Typography>
        <Typography variant="body2">
          Update your information and find out how it’s used.
        </Typography>
      </Box>

      {/* Form */}
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Profile Picture and Social Media Icons */}
          <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
            <Avatar
              sx={{
                width: { xs: 80, md: 100 },
                height: { xs: 80, md: 100 },
                margin: "auto",
                mt: { xs: -6, md: -9 },
                mb: 2,
                border: "2px solid #e0e0e0",
              }}
            />
            <Button
              sx={{
                ml: { xs: 0, md: 2 },
                color: "#000",
                mt: -1,
              }}
            >
              Upload Photo
            </Button>
            <Box sx={{ mt: 4, ml: 4 }}>
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: { xs: "50vw", md: "12vw" },
                    height: { xs: "6vh", md: "5vh" },
                    border: "1px solid gray",
                    borderRadius: 1,
                    mb: 3,
                  }}
                >
                  <Icon sx={{ color: "#000" }} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Form Fields */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {[
                { label: "First Name", id: "First" },
                { label: "Last Name", id: "Last" },
              ].map((field, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <label htmlFor={field.id} style={{ textAlign: "left" }}>
                    {field.label}
                  </label>
                  <TextField id={field.id} label={field.label} fullWidth />
                </Grid>
              ))}
              <Grid item xs={12}>
                <label htmlFor="Bio" style={{ textAlign: "left" }}>
                  Bio Description
                </label>
                <TextField
                  id="Bio"
                  label="Message"
                  fullWidth
                  multiline
                  rows={3}
                />
              </Grid>
              {[
                {
                  label: "Email Address",
                  id: "email",
                  helperText:
                    "Will use this email ID to send you confirmation.",
                },
                {
                  label: "Phone number",
                  id: "phone",
                  helperText:
                    "Will use this number if they need to contact you.",
                },
              ].map((field, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <label htmlFor={field.id} style={{ textAlign: "left" }}>
                    {field.label}
                  </label>
                  <TextField
                    id={field.id}
                    label={field.label}
                    fullWidth
                    helperText={field.helperText}
                  />
                </Grid>
              ))}
              {["Address 1", "Address 2"].map((label, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <label htmlFor={label} style={{ textAlign: "left" }}>
                    {label}
                  </label>
                  <TextField id={label.toLowerCase()} label={label} fullWidth />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {["City", "State", "Country", "Zipcode"].map(
                    (label, index) => (
                      <Grid
                        key={index}
                        item
                        xs={12}
                        sm={3}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        }}
                      >
                        <label htmlFor={label} style={{ textAlign: "left" }}>
                          {label}
                        </label>
                        <TextField id={label} label={label} fullWidth />
                      </Grid>
                    )
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 3,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: 5,
              color: "black",
              border: "1px solid black",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 5,
              backgroundColor: "#852bd9",
              color: "white",
            }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalDetailsForm;
