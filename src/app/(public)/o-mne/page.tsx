// src/app/o-nas/page.tsx

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const metadata = { title: "O nás | ZoškaSnap" };

export default function AboutUs() {
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
        <Typography variant="h3" gutterBottom>
          O nás
        </Typography>
        <Typography variant="body1" paragraph>
          Vitajte na stránke ZoškaSnap! Sme tím nadšencov, ktorí sa zameriavajú na poskytovanie najlepších riešení pre našich používateľov. Naša misia je jednoduchá - prinášať inovácie a kvalitu do každého aspektu našej práce.
        </Typography>
        <Typography variant="body1" paragraph>
          Sme hrdí na to, že môžeme spolupracovať s takými skvelými partnermi ako je SPŠE Zochova. Ak máte záujem dozvedieť sa viac o našej škole, navštívte naše oficiálne stránky a sociálne siete:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mt: 3,
            flexWrap: 'wrap',
          }}
        >
          <Button
            variant="contained"
            href="https://zochova.sk/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: 'primary.main',
              '&:hover': { backgroundColor: 'primary.dark' },
            }}
          >
            Oficiálna stránka
          </Button>
          <Button
            variant="contained"
            href="https://www.facebook.com/spsezochova/?locale=sk_SK"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: 'primary.main',
              '&:hover': { backgroundColor: 'primary.dark' },
            }}
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            href="https://www.instagram.com/spsezochova/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: 'primary.main',
              '&:hover': { backgroundColor: 'primary.dark' },
            }}
          >
            Instagram
          </Button>
        </Box>
      </Box>
    </Container>
  );
}