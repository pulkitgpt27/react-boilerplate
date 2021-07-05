// Will be updating  this file if needed

function handleJSONResponse(response: any) {
  return response.json().then((json: any) => {
    if (response.ok) {
      return json;
    }
    return Promise.reject(
      Object.assign({}, json, {
        status: response.status,
        statusText: response.statusText
      })
    );
  });
}

function handleTextResponse(response: any) {
  return response.text().then((text: string) => {
    if (response.ok) {
      return text;
    }
    return Promise.reject({
      status: response.status,
      statusText: response.statusText,
      err: text
    });
  });
}

function handleResponse(response: any) {
  const contentType = response.headers.get("content-type");
  if (contentType.includes("application/json")) {
    return handleJSONResponse(response);
  } else if (contentType.includes("text/html")) {
    return handleTextResponse(response);
  } else if (contentType.includes("text/plain")) {
    return handleTextResponse(response);
  } else if (contentType === null) {
    return Promise.resolve(null);
  }
  // Other response types as necessary. I haven't found a need for them yet though.
  throw new Error(`Sorry, content-type ${contentType} not supported`);
}

export const GET = (url: string) =>
  fetch(url, {
    // credentials: "include"
  })
    .then(handleResponse)
    .then(data => data)
    .catch(error => error);

export const POST = (url: string, body: any) =>
  fetch(url, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(handleResponse)
    .then(data => data)
    .catch(error => error);

export const POST_FORM_DATA = (url: string, body: any) =>
  fetch(url, {
    credentials: "include",
    method: "POST",
    body
  })
    .then(handleResponse)
    .then(data => data)
    .catch(error => error);

export const PUT = (url: string, body: any) =>
  fetch(url, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(res => res);

export const PATCH = (url: string, body: any) =>
  fetch(url, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(res => res);

export const DELETE = (url: string, body: any) =>
  fetch(url, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(handleResponse)
    .then(data => data)
    .catch(error => error);
