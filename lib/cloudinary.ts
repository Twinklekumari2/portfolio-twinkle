const CLOUD_NAME = "dqvxeeedd";

export const cloudinaryImage = (publicId: string) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_2560,dpr_auto,q_auto:best,f_auto/${publicId}`;