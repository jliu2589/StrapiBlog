function Card({ children }) {
  return (
    <div className="border border-gray-50 rounded-lg shadow-md p-4 w-60 mx-auto">
      {children}
    </div>
  );
}
export default Card;
