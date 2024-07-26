import React, { useState } from 'react';
import { createRelease } from '../services/api';

const ReleaseForm = () => {
  const [version, setVersion] = useState('');
  const [features, setFeatures] = useState('');
  const [improvements, setImprovements] = useState('');
  const [bugFixes, setBugFixes] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [stakeholders, setStakeholders] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const releaseData = {
      version,
      features: features.split(','),
      improvements: improvements.split(','),
      bugFixes: bugFixes.split(','),
      releaseDate: new Date(releaseDate),
      stakeholders: stakeholders.split(',').map(id => id.trim())
    };
    await createRelease(releaseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Version:</label>
      <input type="text" value={version} onChange={(e) => setVersion(e.target.value)} required />
      
      <label>Features:</label>
      <input type="text" value={features} onChange={(e) => setFeatures(e.target.value)} required />
      
      <label>Improvements:</label>
      <input type="text" value={improvements} onChange={(e) => setImprovements(e.target.value)} required />
      
      <label>Bug Fixes:</label>
      <input type="text" value={bugFixes} onChange={(e) => setBugFixes(e.target.value)} required />
      
      <label>Release Date:</label>
      <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
      
      <label>Stakeholders (comma separated IDs):</label>
      <input type="text" value={stakeholders} onChange={(e) => setStakeholders(e.target.value)} required />
      
      <button type="submit">Create Release</button>
    </form>
  );
};

export default ReleaseForm;
