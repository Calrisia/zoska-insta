// src/sections/NonAuthHomeView.tsx

import { Container, Typography, Box, Button } from "@mui/material";
import Link from "next/link";

export default function NonAuthHomeView() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box
        sx={{
          textAlign: 'center',
          p: 4,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'background.paper',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Domovská stránka - Neprihlásený používateľ
        </Typography>
        <Typography variant="body1" paragraph>
          Registrujte sa, aby ste mohli pridať príspevky a zobraziť profil.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Link href="/auth/registracia" passHref>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': { backgroundColor: 'primary.dark' },
              }}
            >
              Registrácia
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}