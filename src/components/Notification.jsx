import React from 'react';
import { Avatar, Card, CardContent, Typography, Stack } from '@mui/material';

const dummyNotifications = [
  {
    id: 1,
    name: 'Amit Sharma',
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    message: 'viewed your profile',
    time: '2h ago',
  },
  {
    id: 2,
    name: 'Neha Kapoor',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    message: 'sent you a connection request',
    time: '3h ago',
  },
  {
    id: 3,
    name: 'Google',
    avatar: 'https://logo.clearbit.com/google.com',
    message: 'has a job opening for Frontend Developer',
    time: '1d ago',
  },
  {
    id: 4,
    name: 'Ravi Joshi',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    message: 'liked your post',
    time: '2d ago',
  },
];

const Notification = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        Notifications
      </Typography>
      <Stack spacing={2}>
        {dummyNotifications.map((note) => (
          <Card key={note.id} variant="outlined">
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={note.avatar} alt={note.name} sx={{ width: 48, height: 48, mr: 2 }} />
              <div>
                <Typography variant="body1">
                  <strong>{note.name}</strong> {note.message}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {note.time}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default Notification;
