const multer = require("multer");
const path = require("path");

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dirPath = path.join(__dirname, "../public/uploads/userProfiles");
    cb(null, dirPath); // ✅ Save to correct folder
  },
  filename: (req, file, cb) => {
    const uniqueName = file.fieldname + "_" + Date.now() + path.extname(file.originalname);
    cb(null, uniqueName); // ✅ Example: profileImage_1749949566269.jpg
  },
});

// Optional: validate file type
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);

  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed (.jpg, .jpeg, .png, .webp)"));
  }
};

const upload = multer({ storage, fileFilter });

module.exports = { upload };
