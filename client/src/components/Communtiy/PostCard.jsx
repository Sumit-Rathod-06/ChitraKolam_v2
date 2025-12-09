import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Send, X } from 'lucide-react';

const PostCard = ({ post, onLike, onSave, onComment, gridView = false }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (commentText.trim()) {
      setComments([...comments, { id: Date.now(), text: commentText, author: 'You' }]);
      onComment(post.id, commentText);
      setCommentText('');
    }
  };

  const formatTimestamp = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor(diff / 60000);
    
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'now';
  };

  if (gridView) {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 h-48">
          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">{post.author.avatar}</div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-gray-900 line-clamp-2 mb-2">{post.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.description}</p>
          <div className="flex items-center justify-between">
            <button
              onClick={() => onLike(post.id)}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                post.isLiked ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <Heart size={16} fill={post.isLiked ? 'currentColor' : 'none'} />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              <MessageCircle size={16} />
              <span>{post.comments}</span>
            </button>
            <button
              onClick={() => onSave(post.id)}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                post.isSaved ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'
              }`}
            >
              <Bookmark size={16} fill={post.isSaved ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl">
              {post.author.avatar}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
                {post.author.verified && <span className="text-blue-500">✓</span>}
              </div>
              <p className="text-sm text-gray-500">
                {post.author.username} · {formatTimestamp(post.timestamp)}
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal size={20} />
          </button>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.description}</p>

        <div className="rounded-lg overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover hover:scale-105 transition-transform" />
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <button
          onClick={() => onLike(post.id)}
          className={`flex items-center space-x-2 transition-colors ${
            post.isLiked ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
          }`}
        >
          <Heart size={20} fill={post.isLiked ? 'currentColor' : 'none'} />
          <span className="font-medium">{post.likes}</span>
        </button>
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <MessageCircle size={20} />
          <span className="font-medium">{post.comments}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
          <Share2 size={20} />
          <span className="font-medium">Share</span>
        </button>
        <button
          onClick={() => onSave(post.id)}
          className={`flex items-center space-x-2 transition-colors ${
            post.isSaved ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-600'
          }`}
        >
          <Bookmark size={20} fill={post.isSaved ? 'currentColor' : 'none'} />
          <span className="font-medium">Save</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="border-t border-gray-100 bg-gray-50">
          <div className="max-h-64 overflow-y-auto p-4 space-y-3">
            {comments.length === 0 ? (
              <p className="text-gray-500 text-center text-sm py-4">No comments yet. Be the first to comment!</p>
            ) : (
              comments.map(comment => (
                <div key={comment.id} className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-sm text-gray-900">{comment.author}</p>
                  <p className="text-sm text-gray-600">{comment.text}</p>
                </div>
              ))
            )}
          </div>
          <div className="border-t border-gray-200 p-4 flex gap-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              placeholder="Write a comment..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-sm"
            />
            <button
              onClick={handleAddComment}
              className="text-white px-4 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: '#dc2626' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#cc1616'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default PostCard;