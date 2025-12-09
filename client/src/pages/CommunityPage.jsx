import React, { useState, useEffect } from 'react';
import Header from '../components/Communtiy/Header';
import Sidebar from '../components/Communtiy/Sidebar';
import PostCard from '../components/Communtiy/PostCard';
import RightSidebar from '../components/Communtiy/RightSidebar';
import FloatingActionButton from '../components/Communtiy/FloatingActionButton';
import PostModal from '../components/Communtiy/PostModal';
import Navbar from '../components/Navbar';
import r1 from "../assets/Community/1.jpg";
import r2 from "../assets/Community/2.jpg";
import r3 from "../assets/Community/3.jpg";
import r4 from "../assets/Community/4.jpg";


const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('forYou');
  const [posts, setPosts] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);

  // Default posts data
    const defaultPosts = [
    {
      id: 1,
      author: {
        name: 'Lakshmi Devi',
        username: '@lakshmiiart',
        avatar: '👩‍🎨',
        verified: true,
      },
      title: 'Traditional Pongal Kolam with 13 dots',
      description:
        'Created this beautiful Pongal kolam using the traditional 13-dot pattern. The symmetry represents prosperity and abundance for the harvest season. 🙏✨',
      image: r1,
      timestamp: Date.now() - 7200000,
      likes: 342,
      comments: 28,
      isLiked: false,
      isSaved: false,
      category: 'festival',
    },
    {
      id: 2,
      author: {
        name: 'Kavitha Sundaram',
        username: '@kavithakolam',
        avatar: '🎨',
        verified: true,
      },
      title: 'Geometric Beauty - 21 Dot Pattern',
      description:
        'Exploring geometric patterns with a 21-dot base. This design took me 2 hours to complete! #KolamArt #SacredGeometry',
      image: r2,
      timestamp: Date.now() - 18000000,
      likes: 987,
      comments: 45,
      isLiked: false,
      isSaved: false,
      category: 'geometric',
    },
    {
      id: 3,
      author: {
        name: 'Anuradha Singh',
        username: '@anuradha',
        avatar: '🌺',
        verified: true,
      },
      title: 'Festival Flower Kolam',
      description: 'Beautiful flower kolam for the upcoming festival season! 🌼',
      image: r3,
      timestamp: Date.now() - 3600000,
      likes: 1200,
      comments: 89,
      isLiked: false,
      isSaved: false,
      category: 'festival',
    },
    {
      id: 4,
      author: {
        name: 'Divya Sharma',
        username: '@divya',
        avatar: '🪔',
        verified: false,
      },
      title: 'Deepavali Special - Oil Lamp Design',
      description:
        'Created this amazing oil lamp inspired kolam for Deepavali celebrations.',
      image: r4,
      timestamp: Date.now() - 1800000,
      likes: 856,
      comments: 67,
      isLiked: false,
      isSaved: false,
      category: 'festival',
    },
  ];


  // Load posts from local storage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('kolamPosts');
    if (savedPosts) {
      try {
        setPosts(JSON.parse(savedPosts));
      } catch (e) {
        setPosts(defaultPosts);
      }
    } else {
      setPosts(defaultPosts);
      localStorage.setItem('kolamPosts', JSON.stringify(defaultPosts));
    }
  }, []);

  // Save posts to local storage whenever they change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('kolamPosts', JSON.stringify(posts));
    }
  }, [posts]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
        : post
    ));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isSaved: !post.isSaved }
        : post
    ));
  };

  const handleComment = (postId, comment) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: post.comments + 1 }
        : post
    ));
  };

  const handleNewPost = (postData) => {
    const newPost = {
      id: Math.max(...posts.map(p => p.id), 0) + 1,
      author: {
        name: 'You',
        username: '@yourprofile',
        avatar: '✨',
        verified: false,
      },
      title: postData.title,
      description: postData.description,
      image: postData.image,
      timestamp: Date.now(),
      likes: 0,
      comments: 0,
      isLiked: false,
      isSaved: false,
      category: postData.category || 'other'
    };
    setPosts([newPost, ...posts]);
    setShowPostModal(false);
  };

  // Filter posts based on active tab
  const getFilteredPosts = () => {
    let filtered = [...posts];
    
    switch(activeTab) {
      case 'following':
        filtered = filtered.filter(p => p.author.verified);
        break;
      case 'recent':
        filtered.sort((a, b) => b.timestamp - a.timestamp);
        break;
      case 'mostLiked':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      case 'forYou':
      default:
        filtered.sort((a, b) => b.likes - a.likes);
    }
    
    return filtered;
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <Sidebar />

          {/* Main Content */}
          <main className="col-span-6">
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('forYou')}
                  className={`flex-1 py-4 px-6 font-medium transition-colors ${
                    activeTab === 'forYou'
                      ? 'border-b-2'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  style={{
                    color: activeTab === 'forYou' ? '#dc2626' : 'inherit',
                    borderBottomColor: activeTab === 'forYou' ? '#dc2626' : 'transparent'
                  }}
                >
                  For You
                </button>
                <button
                  onClick={() => setActiveTab('following')}
                  className={`flex-1 py-4 px-6 font-medium transition-colors ${
                    activeTab === 'following'
                      ? 'border-b-2'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  style={{
                    color: activeTab === 'following' ? '#dc2626' : 'inherit',
                    borderBottomColor: activeTab === 'following' ? '#dc2626' : 'transparent'
                  }}
                >
                  Following
                </button>
                <button
                  onClick={() => setActiveTab('recent')}
                  className={`flex-1 py-4 px-6 font-medium transition-colors ${
                    activeTab === 'recent'
                      ? 'border-b-2'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  style={{
                    color: activeTab === 'recent' ? '#dc2626' : 'inherit',
                    borderBottomColor: activeTab === 'recent' ? '#dc2626' : 'transparent'
                  }}
                >
                  Recent
                </button>
                <button
                  onClick={() => setActiveTab('mostLiked')}
                  className={`flex-1 py-4 px-6 font-medium transition-colors ${
                    activeTab === 'mostLiked'
                      ? 'border-b-2'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  style={{
                    color: activeTab === 'mostLiked' ? '#dc2626' : 'inherit',
                    borderBottomColor: activeTab === 'mostLiked' ? '#dc2626' : 'transparent'
                  }}
                >
                  Most Liked
                </button>
              </div>
            </div>

            {/* Posts Feed - Grid for mostLiked, otherwise vertical */}
            {activeTab === 'mostLiked' ? (
              <div className="grid grid-cols-2 gap-4">
                {filteredPosts.map((post) => (
                  <PostCard 
                    key={post.id} 
                    post={post} 
                    onLike={handleLike} 
                    onSave={handleSave}
                    onComment={handleComment}
                    gridView={true}
                  />
                ))}
              </div>
            ) : (
              <div>
                {filteredPosts.map((post) => (
                  <PostCard 
                    key={post.id} 
                    post={post} 
                    onLike={handleLike} 
                    onSave={handleSave}
                    onComment={handleComment}
                    gridView={false}
                  />
                ))}
              </div>
            )}
          </main>

          <RightSidebar posts={filteredPosts} />
        </div>
      </div>

      <FloatingActionButton onClick={() => setShowPostModal(true)} />
      
      {showPostModal && (
        <PostModal 
          onClose={() => setShowPostModal(false)} 
          onSubmit={handleNewPost}
        />
      )}
    </div>
  );
};

export default CommunityPage;