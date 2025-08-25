const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure upload directories exist
const uploadDirs = {
  media: 'uploads/media',
  products: 'uploads/products',
  collections: 'uploads/collections',
  finishes: 'uploads/finishes'
};

Object.values(uploadDirs).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadDir = uploadDirs.media; // default
    
    // Determine upload directory based on field name
    if (file.fieldname.includes('product') || file.fieldname === 'cover_image' || file.fieldname === 'size_image') {
      uploadDir = uploadDirs.products;
    } else if (file.fieldname.includes('collection')) {
      uploadDir = uploadDirs.collections;
    } else if (file.fieldname.includes('finish') || file.fieldname === 'image') {
      uploadDir = uploadDirs.finishes;
    }
    
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi|webm/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only images and videos are allowed'));
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: fileFilter
});

// Export different upload configurations
module.exports = {
  single: (fieldName) => upload.single(fieldName),
  multiple: (fieldName, maxCount = 10) => upload.array(fieldName, maxCount),
  fields: (fields) => upload.fields(fields),
  
  // Predefined configurations for different entities
  productMedia: upload.single('file'),
  productImages: upload.fields([
    { name: 'cover_image', maxCount: 1 },
    { name: 'size_image', maxCount: 1 },
    { name: 'popup_image', maxCount: 1 },
    { name: 'menu_image', maxCount: 1 }
  ]),
  finishImage: upload.single('image'),
  finishTypeMedia: upload.fields([
    { name: 'video_image', maxCount: 1 },
    { name: 'video_file', maxCount: 1 }
  ]),
  collectionImages: upload.fields([
    { name: 'collection_image', maxCount: 1 },
    { name: 'banner_image', maxCount: 1 }
  ]),
  multipleMedia: upload.array('files', 10)
};