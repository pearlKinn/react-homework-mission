function Status({state='신청마감'}) {

  let color = ''
  if(state==='모집중') {
    color="border-blue-500 text-blue-700"
  }else if(state==='사전알림신청') {
    color="border-teal-500 text-emerald-600"
  }else {
    color="border-red-500 text-red-700"
  }
  return (
    <div className={`${color} inline-flex items-center rounded border px-2 py-1 text-xs font-semibold sm:text-sm`}>
      {state}
    </div>
  );
}

export default Status