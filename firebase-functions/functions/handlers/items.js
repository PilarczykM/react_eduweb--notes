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

exports.getallUserItemsOfType = (req, res) => {
  const { cardType, userUID } = req.query;

  if (cardType === undefined || userUID === undefined) {
    return res.status(400).json({ cardType: 'Can not be undefined!' });
  }

  if (cardType.trim() === '') {
    return res.status(400).json({ cardType: 'Can not be empty.' });
  }

  if (userUID.trim() === '') {
    return res.status(400).json({ cardType: 'Can not be empty.' });
  }

  db.collection('items')
    .where('userUID', '==', userUID)
    .where('cardType', '==', cardType)
    .get()
    .then((data) => {
      const itemsOfType = [];
      data.forEach((doc) =>
        itemsOfType.push({
          id: doc.id,
          ...doc.data(),
        }),
      );

      if (itemsOfType.length === 0) {
        return res.status(404).json({
          message: `Items of type ${cardType} where user id: ${userUID} not found.`,
        });
      }

      return res.status(200).json(itemsOfType);
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

exports.addItem = (req, res) => {
  const {
    title,
    content,
    cardType,
    userUID,
    twitterName,
    articleUrl,
  } = req.body;
  if (
    title === undefined ||
    content === undefined ||
    cardType === undefined ||
    userUID === undefined
  ) {
    return res.status(400).json({ body: 'Can not be undefined!' });
  }

  if (title.trim() === '' || content.trim() === '' || cardType.trim() === '') {
    return res.status(400).json({ body: 'Can not be empty.' });
  }

  const newItem = {
    cardType,
    title,
    content,
    userUID,
    twitterName: twitterName || '',
    articleUrl: articleUrl || '',
    createdAt: new Date().toISOString(),
  };

  db.collection('items')
    .add(newItem)
    .then((ref) => {
      const newItemRef = {
        id: ref.id,
        ...newItem,
      };
      return res.status(201).json(newItemRef);
    })
    .catch((err) => res.status(500).json({ error: err }));
};
