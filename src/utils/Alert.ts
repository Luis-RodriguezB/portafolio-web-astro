interface Options {
  type: 'success' | 'danger';
  message: string;
}

export const showAlert = (parent: HTMLElement, { type, message }: Options) => {
  const alertDiv = document.createElement('div');
  alertDiv.id = 'alert';
  alertDiv.className = `
    text-center p-4 mb-1 text-normal 
    rounded-lg bg-gray-800 ${
      type === 'success' ? 'text-green-600' : 'text-red-600'
    }`;
  alertDiv.setAttribute('role', 'alert');

  const span = document.createElement('span');
  span.className = 'sr-only';
  span.textContent = 'Info';
  alertDiv.appendChild(span);

  const divInside = document.createElement('div');
  const messageSpan = document.createElement('span');
  messageSpan.className = 'font-medium';
  messageSpan.textContent = message;
  divInside.appendChild(messageSpan);

  alertDiv.appendChild(divInside);

  parent.appendChild(alertDiv);

  return alertDiv;
};