import { useState } from "react";
import Popup from "./Popup";

// Emoji categories
const emojiData: Record<string, string[]> = {
  Smileys: [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😅",
    "😆",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "🙂",
    "🤗",
    "🤩",
    "🤔",
    "🤨",
    "😐",
    "😑",
    "😶",
    "🙄",
    "😏",
    "😣",
    "😥",
    "😮",
    "🤐",
    "😯",
    "😪",
  ],
  Gestures: [
    "🙌",
    "👏",
    "👍",
    "👎",
    "👊",
    "✊",
    "🤛",
    "🤜",
    "🤞",
    "✌️",
    "🤟",
    "🤘",
    "👌",
    "🤏",
    "✋",
    "🤚",
    "🖐️",
    "🖖",
    "👋",
    "🤙",
    "💪",
  ],
  Hearts: [
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🤎",
    "🖤",
    "🤍",
    "💌",
    "💘",
    "💝",
    "💖",
    "💗",
    "💓",
    "💞",
    "💕",
    "💟",
    "❣️",
    "💔",
  ],
  Animals: [
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐨",
    "🐯",
    "🦁",
    "🐮",
    "🐷",
    "🐽",
    "🐸",
    "🐵",
    "🙈",
    "🙉",
    "🙊",
  ],
  Food: [
    "🍏",
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🫐",
    "🥝",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥥",
    "🥑",
    "🍆",
    "🥔",
    "🥕",
  ],
};

interface EmojiPickerProps {
  content: string;
  onContent: (val: string) => void;
}

export default function EmojiPicker({ content, onContent }: EmojiPickerProps) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Smileys");

  const addEmoji = (emoji: string) => {
    onContent(content + emoji);
    setOpen(false);
  };

  return (
    <Popup
      open={open}
      onClose={() => setOpen(false)}
      button={
        <button type="button" className="btn" onClick={() => setOpen(!open)}>
          😊
        </button>
      }
    >
      <div className="flex gap-2 mb-2 overflow-x-auto">
        {Object.keys(emojiData).map((cat) => (
          <button
            key={cat}
            type="button"
            className={`px-2 py-1 rounded text-sm ${
              category === cat
                ? "bg-blue-500 text-white"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-2 max-h-48 overflow-y-auto">
        {emojiData[category].map((emoji, idx) => (
          <button
            key={idx}
            type="button"
            className="text-lg p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => addEmoji(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
    </Popup>
  );
}
