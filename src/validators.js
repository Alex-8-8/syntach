export const emailValidation = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

export const required = (value) => 
(!value || value === '') ? ' IS REQUIRED' 
: undefined;

export const minLength = min => value =>
  value && value.length < min ? `Must be at least ${min} characters` : undefined;

export const minLength6 = minLength(6);

export const passwordsMatch = (value, allValues) => 
  (value !== allValues.password) ? 'Passwords don\'t match' : undefined;