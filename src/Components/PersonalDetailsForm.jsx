import React from "react";
import { Box, TextField, Button, Typography, Grid, Avatar, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const PersonalDetailsForm = () => {
  return (
    <Box
      sx={{
        maxWidth: "800px",
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
          bgcolor: "#8E24AA",
          color: "white",
          p: 3,
          borderRadius: "8px 8px 0 0",
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
                width: 80,
                height: 80,
                margin: "auto",
                mb: 2,
                border: "2px solid #e0e0e0",
              }}
            />
            <Button variant="outlined" size="small">
              Upload Photo
            </Button>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <IconButton>
                <Facebook sx={{ color: "#3b5998" }} />
              </IconButton>
              <IconButton>
                <Twitter sx={{ color: "#1DA1F2" }} />
              </IconButton>
              <IconButton>
                <Instagram sx={{ color: "#E4405F" }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Form Fields */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Bio Description"
                  fullWidth
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Email address" fullWidth helperText="Will use this email ID to send you confirmation." />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone number"
                  fullWidth
                  helperText="Will use this number if they need to contact you."
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Address 1" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Address 2" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="City" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="State" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Country" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Zipcode" fullWidth />
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
          <Button variant="outlined" color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalDetailsForm;
