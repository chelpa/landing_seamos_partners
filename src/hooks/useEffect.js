useEffect(() => {
  const script = document.createElement('script');

  script.src = "./fbapi.js";
  script.async = true;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  }
}, []);
