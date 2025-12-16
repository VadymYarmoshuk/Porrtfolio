import {
  Box,
  Container,
  Typography,
  Paper,
  Fade,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Work } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { t, getPortfolioData } = useLanguage();
  const portfolioData = getPortfolioData();
  return (
    <Box
      id="experience"
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
              {t('experience.title')}
            </Typography>
            <Timeline position="alternate">
              {portfolioData.experience.map((exp, index) => (
                <TimelineItem key={exp.id}>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <Work />
                    </TimelineDot>
                    {index < portfolioData.experience.length - 1 && (
                      <TimelineConnector />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} sx={{ p: 3, maxWidth: 500 }}>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                        {exp.position}
                      </Typography>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {exp.startDate} - {exp.endDate === 'Present' ? t('experience.present') : exp.endDate}
                      </Typography>
                      {exp.technologies && exp.technologies.length > 0 && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, mb: 2 }}>
                          {exp.technologies.map((tech) => (
                            <Typography
                              key={tech}
                              variant="caption"
                              sx={{
                                bgcolor: 'primary.light',
                                color: 'white',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                fontSize: '0.75rem',
                              }}
                            >
                              {tech}
                            </Typography>
                          ))}
                        </Box>
                      )}
                      <Box component="ul" sx={{ pl: 2, mt: 2, mb: 0 }}>
                        {exp.description.map((desc, idx) => (
                          <Typography
                            key={idx}
                            component="li"
                            variant="body2"
                            sx={{ mb: 1 }}
                          >
                            {desc}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

