


const img1 = 'https://i.ibb.co/f87QMR2/heartimage1.webp'
const img2 = 'https://i.ibb.co/8zy89Rg/heartimage2.webp'
const img3 = 'https://i.ibb.co/WtQ4yBY/heartimage3.webp'
const img4 = 'https://i.ibb.co/nMjsttM/heartimage4.webp'
const img5 = 'https://i.ibb.co/C2NgYN1/heartimage5.webp'
const img6 = 'https://i.ibb.co/27xgnHJ/heartimage6.webp'
const img7 = 'https://i.ibb.co/1Zs2Rx4/heartimage7.webp'
const images = [img1, img2, img3, img4, img5, img6, img7];

const HeightLogo = () => {
  return (
    <div className="bg-gradient-to-bl from-[#e0f99c] to-[#e0f99c]">
      <div className="max-w-[1100px] mx-auto p-10  ">
        <div className="grid sm:grid-cols-2 ml-12 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
          {images.map((image, index) => (
            <img key={index} md: width={150} src={image} alt="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeightLogo;
