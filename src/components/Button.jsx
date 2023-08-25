function Button({status}) {

  return (
    <div>
      {
        <>
          <button type="button" className="font-semibold text-gray-500">
            {status}
          </button>
        </>
      }
    </div>
  );
}

export default Button;
