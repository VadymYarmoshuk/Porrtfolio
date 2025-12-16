import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Fade,
} from '@mui/material';
import { School } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export default function Education() {
  const { t, getPortfolioData } = useLanguage();
  const portfolioData = getPortfolioData();
  return (
    <Box
      id="education"
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
              {t('education.title')}
            </Typography>
            <Grid container spacing={4}>
              {portfolioData.education.map((edu) => (
                <Grid size={{ xs: 12, md: 6 }} key={edu.id}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <School
                        sx={{
                          fontSize: 40,
                          color: 'primary.main',
                          mr: 2,
                        }}
                      />
                      <Box>
                        <Typography variant="h5" component="h3" fontWeight={600}>
                          {edu.degree} in {edu.field}
                        </Typography>
                        <Typography variant="h6" color="primary" gutterBottom>
                          {edu.institution}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {edu.startDate} - {edu.endDate}
                    </Typography>
                    {edu.description && (
                      <Typography variant="body2" sx={{ mt: 2 }}>
                        {edu.description}
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

