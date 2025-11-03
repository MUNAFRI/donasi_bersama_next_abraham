export default function handler(req, res) {
  const random = Math.random();
  if (random < 0.9) {
    res.status(200).json({ status: "VERIFIED" });
  } else {
    res.status(200).json({ status: "FAILED" });
  }
}