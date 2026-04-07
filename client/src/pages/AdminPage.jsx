import { useState } from 'react';
import FormInput from '../components/FormInput.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { apiRequest } from '../lib/api.js';

const signalInitial = {
  pair: '',
  entry: '',
  stopLoss: '',
  target: '',
  bias: 'Buy',
  status: 'Open',
  notes: '',
  vipOnly: false
};

const videoInitial = {
  title: '',
  category: '',
  description: '',
  videoUrl: '',
  thumbnailUrl: '',
  vipOnly: false
};

export default function AdminPage() {
  const { token } = useAuth();
  const { data: userData, setData: setUserData } = useFetch('/users');
  const { data: signalData, setData: setSignalData } = useFetch('/signals');
  const { data: educationData, setData: setEducationData } = useFetch('/education');
  const { data: overviewData } = useFetch('/users/admin-overview');
  const [signalForm, setSignalForm] = useState(signalInitial);
  const [videoForm, setVideoForm] = useState(videoInitial);
  const [editingSignalId, setEditingSignalId] = useState(null);
  const [editingVideoId, setEditingVideoId] = useState(null);

  const createSignal = async (event) => {
    event.preventDefault();
    const response = await apiRequest(editingSignalId ? `/signals/${editingSignalId}` : '/signals', {
      method: editingSignalId ? 'PUT' : 'POST',
      token,
      body: signalForm
    });

    setSignalData((prev) => ({
      ...prev,
      signals: editingSignalId
        ? (prev.signals || []).map((signal) => (signal._id === editingSignalId ? response.signal : signal))
        : [response.signal, ...(prev.signals || [])]
    }));
    setSignalForm(signalInitial);
    setEditingSignalId(null);
  };

  const createVideo = async (event) => {
    event.preventDefault();
    const response = await apiRequest(editingVideoId ? `/education/${editingVideoId}` : '/education', {
      method: editingVideoId ? 'PUT' : 'POST',
      token,
      body: videoForm
    });

    setEducationData((prev) => ({
      ...prev,
      videos: editingVideoId
        ? (prev.videos || []).map((video) => (video._id === editingVideoId ? response.video : video))
        : [response.video, ...(prev.videos || [])]
    }));
    setVideoForm(videoInitial);
    setEditingVideoId(null);
  };

  const updateUserMembership = async (userId, membership) => {
    const response = await apiRequest(`/users/${userId}`, {
      method: 'PUT',
      token,
      body: { membership }
    });

    setUserData((prev) => ({
      ...prev,
      users: (prev.users || []).map((user) => (user.id === userId ? response.user : user))
    }));
  };

  const deleteSignal = async (signalId) => {
    await apiRequest(`/signals/${signalId}`, {
      method: 'DELETE',
      token
    });

    setSignalData((prev) => ({
      ...prev,
      signals: (prev.signals || []).filter((signal) => signal._id !== signalId)
    }));
  };

  const deleteVideo = async (videoId) => {
    await apiRequest(`/education/${videoId}`, {
      method: 'DELETE',
      token
    });

    setEducationData((prev) => ({
      ...prev,
      videos: (prev.videos || []).filter((video) => video._id !== videoId)
    }));
  };

  const startSignalEdit = (signal) => {
    setEditingSignalId(signal._id);
    setSignalForm({
      pair: signal.pair,
      entry: signal.entry,
      stopLoss: signal.stopLoss,
      target: signal.target,
      bias: signal.bias,
      status: signal.status,
      notes: signal.notes,
      vipOnly: signal.vipOnly
    });
  };

  const startVideoEdit = (video) => {
    setEditingVideoId(video._id);
    setVideoForm({
      title: video.title,
      category: video.category,
      description: video.description,
      videoUrl: video.videoUrl,
      thumbnailUrl: video.thumbnailUrl,
      vipOnly: video.vipOnly
    });
  };

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Admin"
        title="Platform Control Center"
        description="Manage monetized signals, premium lessons, and membership access from one place."
      />

      <div className="grid gap-4 md:grid-cols-5">
        {(overviewData.metrics || []).map((metric, index) => (
          <div key={metric.label} className={`glass-panel rounded-3xl p-5 ${index % 2 === 0 ? 'shadow-glow' : 'shadow-gold'}`}>
            <p className="text-sm text-slate-400">{metric.label}</p>
            <p className="mt-3 text-3xl font-bold text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="glass-panel rounded-[2rem] p-5">
          <SectionTitle eyebrow="Signals" title="Create Trade Signal" />
          <form onSubmit={createSignal} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormInput label="Pair" value={signalForm.pair} onChange={(e) => setSignalForm((prev) => ({ ...prev, pair: e.target.value }))} required />
              <FormInput label="Entry" value={signalForm.entry} onChange={(e) => setSignalForm((prev) => ({ ...prev, entry: e.target.value }))} required />
              <FormInput label="Stop Loss" value={signalForm.stopLoss} onChange={(e) => setSignalForm((prev) => ({ ...prev, stopLoss: e.target.value }))} required />
              <FormInput label="Target" value={signalForm.target} onChange={(e) => setSignalForm((prev) => ({ ...prev, target: e.target.value }))} required />
              <SelectField label="Bias" value={signalForm.bias} onChange={(e) => setSignalForm((prev) => ({ ...prev, bias: e.target.value }))} options={['Buy', 'Sell']} />
              <SelectField label="Status" value={signalForm.status} onChange={(e) => setSignalForm((prev) => ({ ...prev, status: e.target.value }))} options={['Open', 'Hit Target', 'Hit Stop Loss', 'Closed']} />
            </div>
            <TextArea label="Notes" value={signalForm.notes} onChange={(e) => setSignalForm((prev) => ({ ...prev, notes: e.target.value }))} />
            <Toggle label="VIP Only" checked={signalForm.vipOnly} onChange={(checked) => setSignalForm((prev) => ({ ...prev, vipOnly: checked }))} />
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="rounded-2xl bg-neon px-5 py-3 font-semibold text-night">
                {editingSignalId ? 'Update Signal' : 'Publish Signal'}
              </button>
              {editingSignalId && (
                <button
                  type="button"
                  onClick={() => {
                    setSignalForm(signalInitial);
                    setEditingSignalId(null);
                  }}
                  className="rounded-2xl border border-white/10 px-5 py-3 text-sm text-white"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="glass-panel rounded-[2rem] p-5">
          <SectionTitle eyebrow="Education" title="Upload Video Lesson" />
          <form onSubmit={createVideo} className="space-y-4">
            <FormInput label="Title" value={videoForm.title} onChange={(e) => setVideoForm((prev) => ({ ...prev, title: e.target.value }))} required />
            <div className="grid gap-4 sm:grid-cols-2">
              <FormInput label="Category" value={videoForm.category} onChange={(e) => setVideoForm((prev) => ({ ...prev, category: e.target.value }))} required />
              <FormInput label="Video URL" value={videoForm.videoUrl} onChange={(e) => setVideoForm((prev) => ({ ...prev, videoUrl: e.target.value }))} required />
            </div>
            <FormInput label="Thumbnail URL" value={videoForm.thumbnailUrl} onChange={(e) => setVideoForm((prev) => ({ ...prev, thumbnailUrl: e.target.value }))} />
            <TextArea label="Description" value={videoForm.description} onChange={(e) => setVideoForm((prev) => ({ ...prev, description: e.target.value }))} />
            <Toggle label="VIP Only" checked={videoForm.vipOnly} onChange={(checked) => setVideoForm((prev) => ({ ...prev, vipOnly: checked }))} />
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="rounded-2xl bg-gold px-5 py-3 font-semibold text-night">
                {editingVideoId ? 'Update Lesson' : 'Add Lesson'}
              </button>
              {editingVideoId && (
                <button
                  type="button"
                  onClick={() => {
                    setVideoForm(videoInitial);
                    setEditingVideoId(null);
                  }}
                  className="rounded-2xl border border-white/10 px-5 py-3 text-sm text-white"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </section>
      </div>

      <section className="glass-panel rounded-[2rem] p-5">
        <SectionTitle
          eyebrow="Members"
          title="Manage Users"
          description="Promote free members to VIP or audit access levels without leaving the platform."
        />
        <div className="space-y-3">
          {(userData.users || []).map((user) => (
            <div key={user.id} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm text-slate-400">{user.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">{user.role}</span>
                <select
                  value={user.membership}
                  onChange={(e) => updateUserMembership(user.id, e.target.value)}
                  className="rounded-full border border-white/10 bg-night px-4 py-2 text-sm text-white outline-none"
                >
                  <option value="free">Free</option>
                  <option value="vip">VIP</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <AdminList
          title="Published Signals"
          items={signalData.signals || []}
          formatter={(item) => `${item.pair} • ${item.status}`}
          onEdit={startSignalEdit}
          onDelete={deleteSignal}
        />
        <AdminList
          title="Video Library"
          items={educationData.videos || []}
          formatter={(item) => `${item.title} • ${item.category}`}
          onEdit={startVideoEdit}
          onDelete={deleteVideo}
        />
      </section>
    </div>
  );
}

function SelectField({ label, options, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-slate-300">{label}</span>
      <select
        {...props}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-neon/40"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-night">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-sm text-slate-300">{label}</span>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`h-7 w-14 rounded-full transition ${checked ? 'bg-neon' : 'bg-white/10'}`}
      >
        <span
          className={`block h-7 w-7 rounded-full bg-white transition ${checked ? 'translate-x-7' : 'translate-x-0'}`}
        />
      </button>
    </label>
  );
}

function TextArea({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-slate-300">{label}</span>
      <textarea
        {...props}
        rows={4}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-neon/40"
      />
    </label>
  );
}

function AdminList({ title, items, formatter, onEdit, onDelete }) {
  return (
    <div className="glass-panel rounded-[2rem] p-5">
      <h3 className="font-display text-2xl">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300"
          >
            <span>{formatter(item)}</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onEdit(item)}
                className="rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neon"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => onDelete(item._id)}
                className="rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-rose-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
