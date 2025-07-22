import React from 'react';
import { Card, CardContent, Typography, Button, Stack, Avatar } from '@mui/material';

const dummyJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Google',
    location: 'Bangalore, India',
    logo: 'https://logo.clearbit.com/google.com',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Amazon',
    location: 'Hyderabad, India',
    logo: 'https://logo.clearbit.com/amazon.com',
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Adobe',
    location: 'Remote',
    logo: 'https://logo.clearbit.com/adobe.com',
    type: 'Contract',
  },
];

const Jobs = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        Recommended Jobs
      </Typography>
      <Stack spacing={2}>
        {dummyJobs.map((job) => (
          <Card key={job.id} variant="outlined" sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
            <Avatar src={job.logo} alt={job.company} sx={{ width: 56, height: 56, marginRight: 2 }} />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">{job.title}</Typography>
              <Typography variant="body2" color="textSecondary">{job.company} · {job.location}</Typography>
              <Typography variant="body2" color="textSecondary">{job.type}</Typography>
            </CardContent>
            <Button variant="contained">Apply</Button>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default Jobs;
