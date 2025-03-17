import express from "express";
const app = express();
const port = 4000;

app.use(express.json());

app.post("/events", (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  res.json({
    response: "event received"
  });
});

app.get("/test", (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  res.json({
    result: "we booked an appointment for your for Friday next week"
  });
});

app.listen(port, () => {
  console.log(`The events server is listening on port ${port}`);
});
