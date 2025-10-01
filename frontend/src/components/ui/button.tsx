import assets from "../../assets";

export function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button type="button" onClick={onClose} className="btn">
      <img
        src={assets.icons.close}
        alt="Close"
        className="dark:invert dark:brightness-200"
      />
    </button>
  );
}
