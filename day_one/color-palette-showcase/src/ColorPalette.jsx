function ColorPalette() {
  const flagColors = [
    { name: 'Nigeria Green', bg: 'bg-green-600', hex: '#16A34A' },
    { name: 'Nigeria White', bg: 'bg-white', hex: '#FFFFFF', border: true },
    { name: 'Nigeria Green', bg: 'bg-green-600', hex: '#16A34A' }
  ];
  
  const greenShades = [
    { shade: 50, hex: '#F0FDF4' },
    { shade: 100, hex: '#DCFCE7' },
    { shade: 200, hex: '#BBF7D0' },
    { shade: 300, hex: '#86EFAC' },
    { shade: 400, hex: '#4ADE80' },
    { shade: 500, hex: '#22C55E' },
    { shade: 600, hex: '#16A34A' },
    { shade: 700, hex: '#15803D' },
    { shade: 800, hex: '#166534' },
    { shade: 900, hex: '#14532D' },
    { shade: 950, hex: '#052E16' }
  ];
  
  return (
    <div className="max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-lg">
      
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-gray-900 mb-3 text-center">
        Nigerian Color Palette 
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Official colors and Naija green variations
      </p>
      
      {/* Nigerian Flag Colors */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
           Nigerian Flag Colors
        </h3>
        
        <div className="grid grid-cols-3 gap-6">
          {flagColors.map((color, index) => (
            <div key={index} className="text-center">
              <div className={`${color.bg} h-32 rounded-lg shadow-md ${color.border ? 'border-2 border-gray-300' : ''}`}></div>
              <p className="mt-3 font-bold text-gray-900 text-lg">{color.name}</p>
              <p className="text-sm text-gray-600 font-mono">{color.hex}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/*  Different shades of Green (50-950) */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          🟢 Naija Green - All Shades (50-950)
        </h3>
        
        <div className="grid grid-cols-4 gap-6">
          {greenShades.map((item) => (
            <div key={item.shade} className="text-center">
           
              <div 
                className={`bg-green-${item.shade} h-24 rounded-lg shadow-md border border-gray-200`}
                style={{ backgroundColor: item.hex }}
              ></div>

              <p className="mt-3 font-bold text-gray-900">Green {item.shade}</p>
              <p className="text-xs text-gray-600 font-mono">green-{item.shade}</p>
              <p className="text-xs text-gray-500 font-mono mt-1">{item.hex}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColorPalette