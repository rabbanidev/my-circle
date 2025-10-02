export function Error({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="text-red-500 text-xs lg:text-sm">{message}</p>;
}
