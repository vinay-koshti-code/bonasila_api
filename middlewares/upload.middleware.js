const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure upload directories exist
const uploadDirs = {
  media: 'uploads/media',
  products: 'uploads/products',
  collections: 'uploads/collections',
  finishes: 'uploads/finishes',
  contacts: 'uploads/contacts',
  pages: 'uploads/pages'
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
    } else if (file.fieldname === 'file' && req.originalUrl.includes('contact')) {
      uploadDir = uploadDirs.contacts;
    } else if ((file.fieldname === 'client_image' || file.fieldname === 'slide_image') && req.originalUrl.includes('home-page')) {
      uploadDir = uploadDirs.pages;
    }
    
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Allow more file types for contact uploads
  const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi|webm|pdf|doc|docx|txt|zip|rar/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = /image|video|application\/pdf|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document|text\/plain|application\/zip|application\/x-rar-compressed/.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('File type not allowed'));
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
  none: () => upload.none(),
  
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
  contactFile: upload.single('file'),
  multipleMedia: upload.array('files', 10)
};