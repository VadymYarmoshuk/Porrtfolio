import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Fade,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Language,
} from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function Contact() {
  const { t, getPortfolioData } = useLanguage();
  const portfolioData = getPortfolioData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    // For now, we'll use mailto link
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Box
      id="contact"
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
              {t('contact.title')}
            </Typography>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
                    {t('contact.information')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {portfolioData.contact.email && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Email color="primary" />
                        <Typography variant="body1">{portfolioData.contact.email}</Typography>
                      </Box>
                    )}
                    {portfolioData.contact.phone && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Phone color="primary" />
                        <Typography variant="body1">{portfolioData.contact.phone}</Typography>
                      </Box>
                    )}
                    {portfolioData.contact.location && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LocationOn color="primary" />
                        <Typography variant="body1">{portfolioData.contact.location}</Typography>
                      </Box>
                    )}
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                      {portfolioData.contact.linkedin && (
                        <IconButton
                          href={portfolioData.contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="primary"
                          size="large"
                        >
                          <LinkedIn />
                        </IconButton>
                      )}
                      {portfolioData.contact.github && (
                        <IconButton
                          href={portfolioData.contact.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="primary"
                          size="large"
                        >
                          <GitHub />
                        </IconButton>
                      )}
                      {portfolioData.contact.website && (
                        <IconButton
                          href={portfolioData.contact.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="primary"
                          size="large"
                        >
                          <Language />
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
                    {t('contact.sendMessage')}
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label={t('contact.name')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label={t('contact.email')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label={t('contact.message')}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      margin="normal"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      {t('contact.send')}
                    </Button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

