import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({ cloud_name: 'your_cloud_name', secure: true });

export default cloudinary;
