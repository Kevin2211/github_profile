import React from 'react'
import { Card, CardContent, Typography, Button, CardActions, Box} from '@mui/material'



export default function UserCard(props) {
    const { user } = props

  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
        <img src={user.avatar_url} alt="" /> 
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {user.name}
      </Typography>

      <Typography variant="h5" component="div">
        {user.bio}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Followers: {user.followers}
      </Typography>
      <Typography variant="body2">
        Location: {user.location}
        <br />
        {user.bio}
      </Typography>
    </CardContent>
    <CardActions>
      <a href={user.html_url}><Button size="small">Go to Profile</Button></a>
    </CardActions>
  </Card>
  )
}

