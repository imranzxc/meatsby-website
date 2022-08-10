const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('[√] Подключение к базе данных успешно!');
    })
    .catch((err) => {
      console.error('[✖] Подключение к базе данных вызвало ошибку!', err);
      process.exit(1);
    });
};
