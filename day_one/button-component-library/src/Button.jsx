function Button({ variant = 'primary', size = 'medium', children, ...props }) {
  
  const getButtonClasses = () => {
    const base = "font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    

    const variants = {
      primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
      secondary: "bg-white text-gray-800 border-2 border-green-600 hover:bg-gray-50 focus:ring-green-500",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500", 
      success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    };
    
    const sizes = {
      small: "px-3 py-1 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    };
    
    return `${base} ${variants[variant]} ${sizes[size]}`;
  };
  
  return (
    <button 
      className={getButtonClasses()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button