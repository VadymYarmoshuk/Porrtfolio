import { Box, Container, Typography, Grid, Avatar, Fade, Paper } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t, getPortfolioData } = useLanguage();
  const portfolioData = getPortfolioData();
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box>
            <Typography
              variant="h2"
              component="h2"
              align="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: 700 }}
            >
              {t('about.title')}
            </Typography>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  src={portfolioData.personalInfo.imageUrl}
                  alt={portfolioData.personalInfo.name}
                  sx={{
                    width: { xs: 200, md: 300 },
                    height: { xs: 200, md: 300 },
                    border: '4px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  {portfolioData.personalInfo.name.charAt(0)}
                </Avatar>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}
                  >
                    {portfolioData.personalInfo.bio}
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
                  >
                    {t('bio.about.extra')}
                  </Typography>
                  <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                      {t('about.languages')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {t('about.lang.polish')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t('about.lang.polish.level')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {t('about.lang.english')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t('about.lang.english.level')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {t('about.lang.ukrainian')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t('about.lang.ukrainian.level')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {t('about.lang.russian')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t('about.lang.russian.level')}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

