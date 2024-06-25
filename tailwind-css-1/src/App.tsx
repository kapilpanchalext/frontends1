type PersonType = {
  name: string
  email: string
}

function App() {
  const person: PersonType[] = [
    {
      name: "Abc Cde1",
      email: "5uJ0d1@example.com",
    },
    {
      name: "Abc Cde2",
      email: "5uJ0d2@example.com",
    },
    {
      name: "Abc Cde3",
      email: "5uJ0d3@example.com",
    }
];

  return (
    <div className="mx-auto">
      <h1>Tailwind CSS</h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" /> */}
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
      <svg className="relative transform translate-x-1/2 -translate-y-1/2 animate-bounce w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 15l-6-6 1.41-1.41L12 12.17l4.59-4.58L18 9z"></path>
      </svg>
      <button className="relative z-10 mr-5 ml-5 shadow-xl shadow-blue-500/50 hover:shadow-none outline outline-offset-2 outline-1 outline-blue-500/100 text-blue-500 hover:bg-blue-500 hover:text-white h-[50px] w-[200px] rounded-lg">
        SignIn
      </button>
      </div>
      <button className="mr-5 ml-5 shadow-xl shadow-blue-500/50 hover:shadow-none outline outline-offset-2 outline-1 outline-blue-500/100 text-blue-500 hover:bg-blue-500 hover:text-white h-[50px] w-[200px] rounded-lg">
        Save changes
      </button>

      <button 
        type="button" 
        className="flex items-center justify-center ml-5 mr-5 shadow-xl shadow-blue-500/50 hover:shadow-none outline outline-offset-2 outline-1 outline-blue-500 text-blue-500 h-[50px] w-[200px] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        disabled>
        <svg className="animate-spin h-5 w-5 mr-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke-width="4" className="opacity-25" />
          <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
        </svg>
        Processing...
      </button>
        
      <button className="relative flex items-center justify-center ml-5 mr-5 shadow-xl shadow-blue-500/50 hover:shadow-none outline outline-offset-2 outline-1 outline-blue-500/100 text-blue-500 hover:bg-blue-500 hover:text-white h-[50px] w-[200px] rounded-lg">
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        Transactions
      </button>

    </div>

    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>

      <ul className="p-6 divide-y divide-slate-200">
        {person.map((person) => (
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img className="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">{person.name}</p>
              <p className="text-sm text-slate-500 truncate">{person.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
