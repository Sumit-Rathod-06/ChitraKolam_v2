// Mock API functions
export const fetchProfile = async (userId) => {
  // Simulate API call
  return {
    name: 'Priya Sharma',
    bio: 'A Mandala Artist, Creating Heritage Through Art',
    memberSince: 'Member Since May',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    artworks: '248',
    followers: '12.4K',
    following: '843'
  };
};

export const fetchArtworks = async (userId) => {
  // Simulate API call
  return [
    { id: 1, img: 'url', title: 'Artwork 1' },
    // ... more artworks
  ];
};