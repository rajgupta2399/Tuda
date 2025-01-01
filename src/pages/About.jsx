import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

function About() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      // Using JSONPlaceholder for demo images since Unsplash API requires API key
      const response = await fetch('https://api.unsplash.com/photos/?client_id=tl-w8pXz8BU1CbajfMWQMu3NV-4FLNOALQTwoHsArrM');
      const data = await response.json();      
      setImages(data);
    } catch (error) {
      toast.error('Failed to load images');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      
      <div className="prose max-w-none mb-12">
        <p className="text-lg text-center mb-8">
          Welcome to our Chat Application! We've created this platform to provide a seamless
          and intuitive communication experience. Our app features real-time messaging,
          user registration, and a beautiful responsive design that works great on both
          mobile and desktop devices.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {images.slice(0, 3).map((image) => (
          <div key={image.id} className="card bg-base-200">
            <figure className="px-0 pt-4">
              <img
                src={image.urls.full}
                alt={image.title}
                className="rounded-xl object-cover h-48 w-full"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;