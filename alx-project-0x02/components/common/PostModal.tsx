import React from "react";

type PostData = {
  title: string;
  content: string;
};

type PostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PostData) => void;
};

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-semibold">Add Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded border px-3 py-2"
              rows={4}
              required
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded border px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
