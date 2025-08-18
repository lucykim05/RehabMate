const express = require('express');
const cors = require('cors');
const pool = require('./config/db'); // 방금 만든 pool 불러오기

const app = express();
app.use(cors());
app.use(express.json());

// DB 연결 테스트 라우트
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // 현재 시간 불러오기
    res.json({ time: result.rows[0] });
  } catch (err) {
    console.error('DB 연결 실패:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
