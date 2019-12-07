const { db } = require('../utils/admin');

exports.getAllItems = (req, res) => {
  db.collection('items')
    .get()
    .then((data) => {
      const items = [];
      if (data.size === 0) {
        return res.status(200).json({ message: 'There are no Items' });
      }
      data.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return res.status(200).json(items);
    })
    .catch((err) => res.status(500).json({ error: err }));
};
