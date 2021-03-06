const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    id: "1561548436166032152",
    name: 'Brainey Smurf',
    age: 200,
    height: 8
  }
];

const generateId = () => {
    return `${Math.floor(Math.random() * 1000) +
    String(Date.now()) +
    Math.floor(Math.random() * 1000)}`;
};

server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = 1;

server.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body;
  const id = generateId();
  const newSmurf = { id, name, age, height };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  if (smurfs.find(smurf => smurf.name.toUpperCase() === name.toUpperCase())) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  } else if (smurfs.find(smurf => smurf.id === id)) {
    return sendUserError(
      `Ya gone did smurfed! ID processing goof detected.`,
      res
    );
  }

  smurfs.push(newSmurf);
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
