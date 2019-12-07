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

exports.getItem = (req, res) => {
  const document = db.doc(`/items/${req.params.itemId}`);

  document
    .get()
    .then((doc) => {
      if (!doc.exists) return res.status(404).json({ item: 'Not found' });

      return res.status(200).json({ id: doc.id, ...doc.data() });
    })
    .catch((err) => res.status(500).json({ error: err }));
};

exports.deleteItem = (req, res) => {
  const document = db.doc(`/items/${req.params.itemId}`);

  document
    .get()
    .then((doc) => {
      if (!doc.exists) return res.status(404).json({ item: 'Not found' });
      document.delete();
      return res.status(200).json({ message: 'Item deleted successfully.' });
    })
    .catch((err) => res.status(500).json({ error: err }));
};
