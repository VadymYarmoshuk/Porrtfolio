import { Box, Container, Typography, Button, Fade } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export default function Hero() {
  const { t, getPortfolioData } = useLanguage();
  const portfolioData = getPortfolioData();
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        pt: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="md">
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              }}
            >
              {portfolioData.personalInfo.name}
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              }}
            >
              {portfolioData.personalInfo.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.8,
                maxWidth: '600px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.25rem' },
              }}
            >
              {portfolioData.personalInfo.bio}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('contact')}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                {t('hero.getInTouch')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('projects')}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {t('hero.viewProjects')}
              </Button>
            </Box>
          </Box>
        </Fade>
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': {
                transform: 'translateX(-50%) translateY(0)',
              },
              '50%': {
                transform: 'translateX(-50%) translateY(-10px)',
              },
            },
          }}
          onClick={() => scrollToSection('about')}
        >
          <KeyboardArrowDown sx={{ fontSize: 40, opacity: 0.8 }} />
        </Box>
      </Container>
    </Box>
  );
}

