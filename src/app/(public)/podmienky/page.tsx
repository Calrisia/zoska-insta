// src/app/podmienky/page.tsx

import { Metadata } from "next";
import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const metadata: Metadata = { title: "Conditions of Use | ZoškaSnap" };

const GDPRClient = dynamic(() => import("../../../components/GDPRClient"), {
  ssr: false, // Ensures it's client-side only
});

export default function ConditionsOfUse() {
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
        {/* Conditions of Use Text */}
        <Typography variant="h3" gutterBottom>
          Podmienky používania
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '600px', margin: '0 auto' }}>
          Vitajte na stránke ZoškaSnap! Tieto podmienky používania upravujú vaše používanie našich služieb. Pri prístupe alebo používaní našej stránky súhlasíte s týmito podmienkami. Ak s nimi nesúhlasíte, nepoužívajte túto stránku.
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '600px', margin: '0 auto' }}>
          Naša stránka poskytuje rôzne služby, vrátane možnosti pridávať príspevky, komentovať a zdieľať obsah. Súhlasíte s tým, že budete používať naše služby zodpovedne a v súlade s platnými zákonmi a predpismi.
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '600px', margin: '0 auto' }}>
          Vyhradzujeme si právo upraviť alebo zmeniť tieto podmienky kedykoľvek bez predchádzajúceho upozornenia. Pravidelným prehliadaním tejto stránky sa uistite, že ste oboznámení s aktuálnymi podmienkami používania.
        </Typography>

        {/* Client-side back button */}
        <GDPRClient />
      </Box>
    </Container>
  );
}