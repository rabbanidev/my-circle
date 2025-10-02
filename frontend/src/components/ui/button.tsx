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

export function SubmitButton({
  label,
  loading,
}: {
  label: string;
  loading?: boolean;
}) {
  return (
    <button
      type="submit"
      className="cursor-pointer w-full bg-[#0095f6] text-white py-2 px-4 rounded font-semibold text-sm hover:bg-[#0086e0] disabled:bg-[#b2dffc] disabled:cursor-not-allowed transition-colors"
      disabled={loading}
    >
      {loading ? "Loading" : label}
    </button>
  );
}
