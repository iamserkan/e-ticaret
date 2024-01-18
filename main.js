const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MongoDB bağlantısı
mongoose.connect("mongodb+srv://iamserkan10:Ostim123@cluster0.usuzq41.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

// Product Model
const Product = mongoose.model("Product", {
  title: String,
  description: String,
  price: Number,
  stock: Number
});

// Ürünleri Görüntüleme
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Yeni Ürün Ekleme
app.post("/add-product", async (req, res) => {
  try {
    const newProduct = req.body;
    const addedProduct = await Product.create(newProduct);
    res.json(addedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Ürün Güncelleme
app.put("/update-product/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const updatedProduct = req.body;

    await Product.findByIdAndUpdate(productId, updatedProduct);

    const updatedProductFromDB = await Product.findById(productId);
    res.json(updatedProductFromDB);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Ürün Silme
app.delete("/delete-product/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    await Product.findByIdAndDelete(productId);

    res.send("Product deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// HTML sayfası
app.get("/product-page", (req, res) => {
  res.sendFile(__dirname + "/product-page.html");
});

// Server'ı dinle
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
