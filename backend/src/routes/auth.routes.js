import express from 'express';  

const router = express.Router();

router.get("/signup",(req,res) => {
res.send ("SINGUP ENDPOINT");
});

router.get("/login",(req,res) => {
res.send ("LOGIN ENDPOINT");
});
router.get("/logout",(req,res) => {
res.send ("LOGOUT ENDPOINT");
});


export default router;