const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-center justify-center bg-gray-50 p-12">
        <div className="max-w-md text-center">
          <div className="grid grid-cols-5 gap-3">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`bg-gray-600 aspect-square rounded-2xl bg-primary/10 ${
                  i % 2 === 0 ? "animate-ping" : ""
                }`}
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4">{title}</h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;