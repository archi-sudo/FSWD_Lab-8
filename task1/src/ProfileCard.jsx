import React from 'react';
import './ProfileCard.css';
import photo1 from './assets/react.svg';

function ProfileCard({ name, photo, bio }) {
  return (
    <div className="profile-card">
      <img src={photo1} alt={name} className="profile-photo" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
}

export default ProfileCard;