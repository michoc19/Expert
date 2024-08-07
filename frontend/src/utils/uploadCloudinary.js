const upload_preset = import.meta.env.VITE_UPLOAD_PRESETS;
const cloud_name = import.meta.env.VITE_CLOUDE_NAME;
import cloudinary from "./cloudinaryConfig";


const uploadImageToCloudinary = async (base64Image) =>{
    const uploadData = {
        file: base64Image,
        upload_preset: upload_preset,
    };

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
            method :"POST",
            body : JSON.stringify(uploadData),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    if (!res.ok) {
        const errorData = await response.json();
        console.error('Cloudinary upload error:', errorData);
        throw new Error(errorData.message ||'Failed to upload image');
      }

    const data = await res.json();
    return data;
};

export  default uploadImageToCloudinary;