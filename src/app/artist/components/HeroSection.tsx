export interface ArtistHeroSectionData {
  profileImage: string;
  backgroundImage: string;
}

export default function ArtistHeroSection({
  profileImage,
  backgroundImage,
}: ArtistHeroSectionData) {
  return (
    <div className="relative">
      {/* Hero Image */}
      <img
        src={`http://localhost:3000/uploads/${backgroundImage}`}
        alt="Hero background"
        className="w-full h-64 object-cover bg-primary" // adjust h-64 to your height
      />

      {/* Floating Card / Avatar */}
      <div
        className="
          absolute 
          left-1/2 
          lg:left-60
          md:left-16 md:translate-x-0
          -bottom-16 
          transform -translate-x-1/2
          w-32 h-32 
          bg-gray-800 
          rounded-2xl 
          shadow-xl 
          overflow-hidden
        "
      >
        <img
          src={`http://localhost:3000/uploads/${profileImage}`}
          alt="Avatar"
          className="w-full h-full object-cover bg-white"
        />
      </div>
    </div>
  );
}
