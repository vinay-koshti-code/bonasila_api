const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const path = require('path');

// Configure S3 client
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// S3 storage configuration
const s3Storage = multerS3({
  s3: s3,
  bucket: process.env.AWS_S3_BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    const folder = req.uploadFolder || 'uploads';
    const fileName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, `${folder}/${fileName}`);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|mp4|avi|mov|wmv|pdf|doc|docx/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Invalid file type'));
  }
};

const upload = multer({
  storage: s3Storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
});

// Middleware functions with folder specification
const uploadMiddleware = {
  productImages: (req, res, next) => {
    req.uploadFolder = 'uploads/products';
    upload.fields([
      { name: 'popup_image', maxCount: 1 },
      { name: 'menu_image', maxCount: 1 },
      { name: 'size_image', maxCount: 1 }
    ])(req, res, next);
  },

  productMedia: (req, res, next) => {
    req.uploadFolder = 'uploads/products/media';
    upload.single('path')(req, res, next);
  },

  collectionImages: (req, res, next) => {
    req.uploadFolder = 'uploads/collections';
    upload.none()(req, res, next);
  },

  finishTypeMedia: (req, res, next) => {
    req.uploadFolder = 'uploads/finishes';
    upload.none()(req, res, next);
  },

  finishImage: (req, res, next) => {
    req.uploadFolder = 'uploads/finishes';
    upload.single('image')(req, res, next);
  },

  contactFile: (req, res, next) => {
    req.uploadFolder = 'uploads/contacts';
    upload.single('file')(req, res, next);
  },

  pageImages: (req, res, next) => {
    req.uploadFolder = 'uploads/pages';
    upload.fields([
      { name: 'client_image', maxCount: 1 },
      { name: 'slide_image', maxCount: 1 },
      { name: 'video_file_autoplay', maxCount: 1 },
      { name: 'header_image', maxCount: 1 },
      { name: 'invited_image', maxCount: 1 },
      { name: 'about_image', maxCount: 1 },
      { name: 'footer_title_image', maxCount: 1 },
      { name: 'footer_image', maxCount: 1 },
      { name: 'video_autoplay', maxCount: 1 },
      { name: 'footer_pincode_video', maxCount: 1 },
      { name: 'video_file', maxCount: 1 },
      { name: 'popup_file', maxCount: 1 },
      { name: 'perffection_video', maxCount: 1 },
      { name: 'footer_video', maxCount: 1 },
      { name: 'background_image', maxCount: 1 },
      { name: 'logo_image', maxCount: 1 }
    ])(req, res, next);
  },

  single: (fieldName) => (req, res, next) => {
    req.uploadFolder = 'uploads/general';
    upload.single(fieldName)(req, res, next);
  },

  fields: (fields) => (req, res, next) => {
    req.uploadFolder = 'uploads/general';
    upload.fields(fields)(req, res, next);
  },

  none: () => (req, res, next) => {
    upload.none()(req, res, next);
  },

  galleryMedia: (req, res, next) => {
    req.uploadFolder = 'uploads/gallery';
    upload.fields([
      { name: 'video', maxCount: 1 },
      { name: 'image', maxCount: 1 }
    ])(req, res, next);
  },
  
  contactPageImages: (req, res, next) => {
    req.uploadFolder = 'uploads/contacts';
    upload.fields([
      { name: 'sales_person_image', maxCount: 1 },
      { name: 'footer_image', maxCount: 1 }
    ])(req, res, next);
  },
  pageItemFiles: upload.fields([
    { name: 'file', maxCount: 1 },
    { name: 'pdf', maxCount: 1 }
  ]),
};

module.exports = uploadMiddleware;