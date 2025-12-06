import express from 'express';
const router = express.Router();
router.get("/send",(req,res) => {
    res.send ("SEND MESSAGE ENDPOINT");
});
export default router;