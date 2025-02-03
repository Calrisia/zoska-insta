// src/app/gdpr/page.tsx

import { Metadata } from "next";
import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const metadata: Metadata = { title: "GDPR | ZoškaSnap" };

const GDPRClient = dynamic(() => import("../../../components/GDPRClient"), {
  ssr: false, // Ensures it's client-side only
});

export default function GDPR() {
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
        {/* GDPR Text */}
        <Typography variant="h3" gutterBottom>
          Súhlas s ochranou osobných údajov (GDPR)
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '600px', margin: '0 auto' }}>
          Tento dokument vysvetľuje, ako spracovávame a chránime vaše osobné údaje pri používaní našich služieb. Vaše osobné údaje, ako meno, e-mailová adresa a ďalšie informácie, budú spracovávané v súlade s požiadavkami GDPR (Nariadenie o ochrane osobných údajov). 
          Týmto súhlasíte so spracovaním týchto údajov na účely poskytovania našich služieb, zlepšovania používateľskej skúsenosti a zasielania relevantných informácií.
        </Typography>

        {/* Client-side back button */}
        <GDPRClient />
      </Box>
    </Container>
  );
}