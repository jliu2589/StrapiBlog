function Card({ children }) {
  return (
    <div className="border border-black rounded-lg p-2 w-60 mx-auto my-3">
      {children}
    </div>
  );
}
export default Card;
