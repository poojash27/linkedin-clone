import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, Button, Grid } from '@mui/material';

const dummyPeople = [
  {
    id: 1,
    name: 'Priya Sharma',
    designation: 'UI/UX Designer at Flipkart',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    designation: 'Software Engineer at Infosys',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Anjali Patel',
    designation: 'Product Manager at Zomato',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 4,
    name: 'Aman Verma',
    designation: 'DevOps Engineer at TCS',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
];

function Network() {
  const [connections, setConnections] = useState([]);

  const handleConnect = (id) => {
    setConnections((prev) => [...prev, id]);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        People you may know
      </Typography>
      <Grid container spacing={2}>
        {dummyPeople.map((person) => (
          <Grid item xs={12} sm={6} md={4} key={person.id}>
            <Card>
              <CardContent style={{ textAlign: 'center' }}>
                <Avatar
                  src={person.avatar}
                  alt={person.name}
                  style={{ width: 80, height: 80, margin: '0 auto' }}
                />
                <Typography variant="h6" style={{ marginTop: 10 }}>{person.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {person.designation}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 10 }}
                  disabled={connections.includes(person.id)}
                  onClick={() => handleConnect(person.id)}
                >
                  {connections.includes(person.id) ? 'Connected' : 'Connect'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Network;
