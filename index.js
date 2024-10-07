import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Định nghĩa route cơ bản
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route so sánh hai số
app.post("/compare", (req, res) => {
    const { num1, num2 } = req.body; // Truy cập num1 và num2 từ body

    if (num1 > num2) {
        res.json({ result: 1 });
    } else if (num1 < num2) {
        res.json({ result: -1 });
    } else {
        res.json({ result: 0 });
    }
});

// Lắng nghe và khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Xuất app để sử dụng trong test
export default app;
