const url = 'http://localhost:3000';

async function postData(url = '', data = {}) {
  const res = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    alert('Email is already in use');
  }
  return res.json();
}

export async function subscribe(email) {
  const data = await postData(`${url}/subscribe`, { email });

  return data;
}

export async function unsubscribe(email) {
  const data = await postData(`${url}/subscribe`);

  return data;
}
