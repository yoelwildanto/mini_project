const path = require("path");
const multer = require("multer");

const eventStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/image/events"));
  },
  filename: (req, file, cb) => {
    // const { username } = req.user;
    // cb(null, `event_${username}-${Date.now()}-${file.originalname}`);
    cb(null, `event_user-${Date.now()}-${file.originalname}`);
  },
});

const avatarStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/images/avatar"));
  },
  filename: (req, file, cb) => {
    const { username } = req.body;
    cb(null, `avatar_${username}-${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const fileType = file.mimetype.split("/")[1];
  if (
    fileType === "png" ||
    fileType === "jpg" ||
    fileType === "jpeg" ||
    fileType === "gif"
  ) {
    cb(null, true);
  } else {
    cb("File type not allowed", false);
  }
};

const limits = {
  fileSize: 5120 * 5120,
};

const uploadEventFile = multer({
  storage: eventStorage,
  fileFilter,
  limits,
}).single("image");

const uploadAvatarFile = multer({
  storage: avatarStorage,
  fileFilter,
  limits,
}).single("avatar");

module.exports = {
  uploadEventFile,
  uploadAvatarFile,
};