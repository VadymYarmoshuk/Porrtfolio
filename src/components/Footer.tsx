import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { LinkedIn, GitHub, Email, Language } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, getPortfolioData } = useLanguage();
  const portfolioData = getPortfolioData();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2">
            © {currentYear} {portfolioData.personalInfo.name}. {t('footer.rights')}.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {portfolioData.contact.linkedin && (
              <IconButton
                component={Link}
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'inherit' }}
              >
                <LinkedIn />
              </IconButton>
            )}
            {portfolioData.contact.github && (
              <IconButton
                component={Link}
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'inherit' }}
              >
                <GitHub />
              </IconButton>
            )}
            {portfolioData.contact.email && (
              <IconButton
                component={Link}
                href={`mailto:${portfolioData.contact.email}`}
                sx={{ color: 'inherit' }}
              >
                <Email />
              </IconButton>
            )}
            {portfolioData.contact.website && (
              <IconButton
                component={Link}
                href={portfolioData.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'inherit' }}
              >
                <Language />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

