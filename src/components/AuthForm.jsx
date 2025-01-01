import { Link } from 'react-router-dom';

function AuthForm({ 
  title, 
  fields, 
  loading, 
  onSubmit, 
  buttonText, 
  linkText, 
  linkTo 
}) {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map(({ name, type, label, value, onChange, placeholder }) => (
          <div key={name} className="form-control">
            <label className="label">
              <span className="label-text">{label}</span>
            </label>
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              className="input input-bordered w-full"
              placeholder={placeholder}
            />
          </div>
        ))}

        <button 
          type="submit" 
          className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? `${buttonText}...` : buttonText}
        </button>

        <p className="text-center mt-4">
          {linkText} {' '}
          <Link to={linkTo} className="text-primary hover:underline">
            {linkTo === '/' ? 'Register here' : 'Login here'}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default AuthForm;