// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://alpsungurk:Ostim_123@cluster0.usuzq41.mongodb.net/info', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('kullanicilar', userSchema);

app.use(cors());
app.use(bodyParser.json());



// Kullanıcı girişi
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kullanıcıyı e-posta adresine göre bulma
    const user = await User.findOne({ email });

    // Kullanıcı yoksa hata döndürme
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Şifre kontrolü
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // JWT oluşturma
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
