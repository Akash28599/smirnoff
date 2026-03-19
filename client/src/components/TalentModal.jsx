import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import BackendService from '../services/BackendService';

export default function TalentModal({ category, onClose }) {
  const { user, showToast } = useAppContext();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [link, setLink] = useState('');
  const [phone, setPhone] = useState(user.phone);
  const [feedback, setFeedback] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!name || !bio || !link) {
      setFeedback({ type: 'error', message: 'Please fill all fields.' });
      return;
    }

    const result = await BackendService.submitTalent({ name, bio, link, phone, category });
    if (result.success) {
      setFeedback({
        type: 'success',
        message: '🎉 Your entry has been received! Share your link to get votes.'
      });
      setSubmitted(true);
      showToast('Talent entry submitted!');
    } else {
      setFeedback({ type: 'error', message: result.message });
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content animate-slide-up">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="mb-2">Submit Your Entry</h2>
        <p className="text-gray-400 mb-8 text-sm">
          Category: <strong className="text-smirnoff-red uppercase">{category}</strong>
        </p>
        <div className="form-group">
          <label>Your Name / Stage Name</label>
          <input
            type="text"
            placeholder="e.g. DJ Chill-X"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Short Bio</label>
          <textarea
            rows="3"
            placeholder="Tell us about your talent..."
            className="resize-none"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Video Link (YouTube / Instagram / TikTok)</label>
          <input
            type="url"
            placeholder="https://..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="080XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {!submitted && (
          <button className="btn w-full" onClick={handleSubmit}>SUBMIT MY ENTRY</button>
        )}
        {feedback && (
          <div className="mt-4 text-center">
            {feedback.type === 'success' ? (
              <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                <p className="text-green-600 font-bold">{feedback.message}</p>
              </div>
            ) : (
              <p className="text-smirnoff-red">{feedback.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
