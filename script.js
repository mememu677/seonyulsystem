function confirmIdentity() {
  const identity = document.getElementById('identity').value.trim();
  const links = document.getElementById('links');
  const secretLink = document.getElementById('secretLink');
  links.style.display = 'block';
  if (identity === '선율') {
    secretLink.href = 'https://mx-didra-castle.vercel.app';
    secretLink.style.display = 'inline-block';
  } else {
    secretLink.style.display = 'none';
  }
}