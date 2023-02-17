export function Button({ text, src, onClick }) {
  return (
    <button
      className="px-10 py-2 bg-[#2b3945] text-white rounded shadow-xl mt-8 ml-6"
      onClick={onClick}
    >
      {text}
      {src}
    </button>
  );
}
