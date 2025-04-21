import { useState } from 'react';
import "@/components/Project_List_Item/Project_List_Item.css";

interface ImageUploadProps {
  type: "thumbnail1" | "thumbnail2";
}

const ImageUpload = ({ type }: ImageUploadProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // 이미지 타입에 따라 클래스 이름과 스타일 설정
  let imgClassName = '';
  let imgStyle: React.CSSProperties = {};

  if (type === "thumbnail1") {
    imgStyle = { width: '200px', height: '200px' };
  } else if (type === "thumbnail2") {
    imgClassName = 'thumbnail_left';
    imgStyle = { width: '800px', height: '400px' };
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h3>미리보기:</h3>
          <img className={imgClassName} src={selectedImage} alt="Selected" style={imgStyle} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
