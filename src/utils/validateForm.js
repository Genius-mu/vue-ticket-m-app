// src/utils/validateForm.js
export function validateForm(email, password, confirmPassword) {
  if (!email || !password || !confirmPassword)
    return { success: false, message: "All fields are required" };

  if (password.length < 6)
    return { success: false, message: "Password must be at least 6 characters" };

  if (password !== confirmPassword)
    return { success: false, message: "Passwords do not match" };

  return { success: true };
}
