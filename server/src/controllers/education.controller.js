import EducationVideo from '../models/EducationVideo.js';

export const listVideos = async (req, res) => {
  const videos = await EducationVideo.find().sort({ createdAt: -1 });
  const canViewVip = req.user?.membership === 'vip' || req.user?.role === 'admin';

  const payload = videos.map((video) => ({
    ...video.toObject(),
    locked: video.vipOnly && !canViewVip
  }));

  res.json({ videos: payload });
};

export const createVideo = async (req, res) => {
  const video = await EducationVideo.create(req.body);
  res.status(201).json({ video });
};

export const updateVideo = async (req, res) => {
  const video = await EducationVideo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!video) {
    return res.status(404).json({ message: 'Video not found' });
  }

  res.json({ video });
};

export const deleteVideo = async (req, res) => {
  const video = await EducationVideo.findByIdAndDelete(req.params.id);

  if (!video) {
    return res.status(404).json({ message: 'Video not found' });
  }

  res.json({ message: 'Video deleted' });
};
