 
import express from 'express';


const server = express();

server.get('/', (req, res) => {
  res.send('Bot is running!');
});

function keepAlive() {
  server.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
  });
}


export default keepAlive;