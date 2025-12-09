import { Plus } from 'lucide-react';

const NewPostButton = () => {
  return (
    <button 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-lg flex items-center space-x-2 z-40"
      style={{ backgroundColor: '#DC2626' }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#B91C1C'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#DC2626'}
    >
      <Plus size={18} />
      <span>New Post</span>
    </button>
  );
};

export default NewPostButton;
