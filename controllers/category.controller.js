const categoryData = require('../assets/category.json')


const categoryDetails = (req, res) => {
    res.send(categoryData);
}

module.exports = {categoryDetails};