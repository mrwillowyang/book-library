function fetchData<T>(url: string): Promise<T> {
  const promise: Promise<T> = fetch(url)
    .then((res) => res.json())
    .catch((err) => {});

  return promise;
}

export default fetchData;
