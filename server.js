const express = require('express');
const cors = require("cors")

const app = express();

app.use(cors({
    origin: "*"
}))




app.get('/api/markers', (req,res) => {
    
    const markers = [
        {id: 1, name: 'First Marker', time: '2:00'},
        {id: 2, name: 'Second Marker', time: '3:00'},
        {id: 3, name: 'Third Marker', time: '4:00'},
        {id: 4, name: 'Fourth Marker', time: '4:10'}
    ]
    
    res.json(markers)
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))