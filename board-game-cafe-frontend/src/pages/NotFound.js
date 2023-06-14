import React from 'react';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { ThemeProvider, createTheme, Avatar, CssBaseline, Box, Container, Typography } from '@mui/material';

const theme = createTheme();

export default function NotFound() {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <SentimentVeryDissatisfiedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Not Found
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}