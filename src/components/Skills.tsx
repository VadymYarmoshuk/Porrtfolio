import { Box, Container, Typography, Chip, Paper, Fade } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'frontend':
      return 'primary';
    case 'backend':
      return 'secondary';
    case 'databases':
      return 'info';
    case 'tools':
      return 'success';
    default:
      return 'default';
  }
};

export default function Skills() {
  const { t, getPortfolioData } = useLanguage();
  const portfolioData = getPortfolioData();
  const categories = ['frontend', 'backend', 'databases', 'tools', 'other'] as const;
  const categoryLabels: Record<string, string> = {
    frontend: t('skills.frontend'),
    backend: t('skills.backend'),
    databases: t('skills.databases'),
    tools: t('skills.tools'),
    other: t('skills.other'),
  };

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
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
              {t('skills.title')}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(2, 1fr)',
                },
                gap: 3,
              }}
            >
              {categories.map((category) => {
                const skillsInCategory = portfolioData.skills.filter(
                  (skill) => skill.category === category
                );
                if (skillsInCategory.length === 0) return null;

                return (
                  <Paper key={category} elevation={2} sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                      {categoryLabels[category]}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                      {skillsInCategory.map((skill) => (
                        <Chip
                          key={skill.name}
                          label={skill.name}
                          color={getCategoryColor(skill.category)}
                          variant="outlined"
                          sx={{
                            fontSize: '0.9rem',
                            height: 32,
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                );
              })}
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

