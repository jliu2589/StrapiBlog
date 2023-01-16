function Card({ children }) {
  return (
    <div className="border border-gray-50 rounded-lg shadow-md p-4 w-60 mx-auto w-full hover:shadow-2xl hover:bg-slate-50 duration-75">
      {children}
    </div>
  );
}
export default Card;
