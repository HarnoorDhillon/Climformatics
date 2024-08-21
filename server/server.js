const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = 3001;
const API_KEY = 'AIzaSyAn2Sk7BwlfO7fFCfAt90923NbHP5kQWLs'; // Secure your API Key

app.get('/fetchTemperatureData', async (req, res) => {
  const { filename } = req.query;
  const folderId = "1LCVKr3ZsQIyhmBS3Y-UJ95SpaRpx-0tR"; // ID of your Google Drive folder
  const searchUrl = `https://www.googleapis.com/drive/v3/files?q=name='${filename}' and '${folderId}' in parents&key=${API_KEY}`;

  try {
    const searchResponse = await axios.get(searchUrl);
    if (searchResponse.data.files && searchResponse.data.files.length > 0) {
      const fileUrl = `https://www.googleapis.com/drive/v3/files/${searchResponse.data.files[0].id}?alt=media&key=${API_KEY}`;
      const fileResponse = await axios.get(fileUrl);
      res.send(fileResponse.data);
    } else {
      res.status(404).send('No file found matching the specified date and time');
    }
  } catch (error) {
    console.error('Failed to fetch or parse temperature data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
