

export default function Hero() {
   

  return (
    <section className="relative py-24 overflow-hidden"  style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')"
          }}>
      
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="flex items-center mb-8">
            <span className="text-sm font-medium text-brand-accent uppercase tracking-wider ">
              INDUSTRIES WE SERVE
            </span>
            
            {/* Decorative Dots */}
            <div className="flex items-center ml-6 space-x-2">
              <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold  mb-8 leading-tight text-white">
            INDUSTRIES
          </h1>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed text-white">
              Empowering Africa&apos;s diverse sectors with smart, secure, and reliable technology solutions. 
              From healthcare and education to manufacturing and financial services, we understand the unique 
              challenges each industry faces. Our tailored approach combines cutting-edge technology with 
              deep industry expertise to drive transformation, enhance security, and unlock growth potential 
              across every sector we serve.
            </p>
          </div>

          {/* Bottom Decorative Element */}
    
        </div>
      </div>
        {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl"></div>s
     
    </section>
  );
}
