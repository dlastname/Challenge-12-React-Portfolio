export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function isFullNameEntered(name) {
  // Check if name is empty or not a string
  if (!name || typeof name !== "string") return false;
  // Split by spaces (handles multiple spaces)
  const parts = name.trim().split(/\s+/);
  // Ensure at least first and last name
  return parts.length >= 2;
}
