const pool = require("../db/pool");
const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

exports.getMessages = asyncHandler(async (req, res) => {
    const messages = await db.getAllMessages();
    res.render('index', { title: "Messages", messages })
});