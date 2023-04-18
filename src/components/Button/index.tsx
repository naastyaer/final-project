function Button({ title, handelClick, type }) {
  return (
    <button
      type={type}
      onClick={(event) => handelClick(event)}
      className="inline-block rounded bg-slate-200 w-[100px] px-2 py-1 text-mg font-medium  text-black hover:bg-slate-500 hover:text-whit  ease-in duration-100"
    >
      {title}
    </button>
  );
}
export default Button;
