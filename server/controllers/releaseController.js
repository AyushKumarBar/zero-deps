const Release = require('../models/Release');

exports.createRelease = async (req, res) => {
  const { version, features, improvements, bugFixes, releaseDate, stakeholders } = req.body;

  try {
    const release = new Release({ version, features, improvements, bugFixes, releaseDate, stakeholders });
    await release.save();
    res.status(201).json(release);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReleases = async (req, res) => {
  try {
    const releases = await Release.find().populate('stakeholders', 'name email');
    res.json(releases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
