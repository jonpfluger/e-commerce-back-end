const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      include: [Category, Tag]
    })
    res.json(allProducts)
  } catch (err) {
    res.status(500).json(err)
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    const singleProduct = await Product.findOne({
      where: {
        id: req.params.id
      },
      include: [Category, Tag]
    })
    res.json(singleProduct)
  } catch (err) {
    res.status(500).json(err)
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
  } catch (err) {
    res.status(500).json(err)
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(updatedProduct)
  } catch (err) {
    res.status(500).json(err)
  }
});

// delete one product by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(deletedProduct)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
