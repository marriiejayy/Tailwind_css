import Button from './Button.jsx'
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Button Variants</h2>
          
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Primary Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" size="small">Small Primary</Button>
                <Button variant="primary" size="medium">Medium Primary</Button>
                <Button variant="primary" size="large">Large Primary</Button>
              </div>
            </div>
            
            {/* Secondary Buttons */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Secondary Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="secondary" size="small">Small Secondary</Button>
                <Button variant="secondary" size="medium">Medium Secondary</Button>
                <Button variant="secondary" size="large">Large Secondary</Button>
              </div>
            </div>
            
            {/* Status Buttons */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Status Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="danger" size="medium">Danger</Button>
                <Button variant="success" size="medium">Success</Button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App