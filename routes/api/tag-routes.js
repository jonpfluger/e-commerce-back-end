const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [Product]
    })
    res.json(allTags)
  } catch (err) {
    res.status(500).json(err)
  }
});

// get one tag
router.get('/:id', async (req, res) => {
  try {
    const singleTag = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    res.json(singleTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body)
    res.json(newTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(updatedTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(deletedTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
