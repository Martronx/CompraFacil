import React, { useState } from 'react';
import { Search, ShoppingBasket, TrendingUp, Clock, Store, BarChart3 } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBasket className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">CompraFácil</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Productos</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Supermercados</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Compara precios y ahorra en tus compras
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Encuentra los mejores precios en supermercados de la Región Metropolitana
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-lg shadow-md p-2">
              <Search className="h-6 w-6 text-gray-400 mx-2" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="flex-1 p-2 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué elegir CompraFácil?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Precios Actualizados</h3>
              <p className="text-gray-600">Información actualizada diariamente de todos los supermercados</p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ahorra Tiempo</h3>
              <p className="text-gray-600">Compara precios rápidamente sin visitar múltiples sitios</p>
            </div>
            <div className="text-center p-6">
              <Store className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Múltiples Tiendas</h3>
              <p className="text-gray-600">Comparación entre los principales supermercados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Productos comparados</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Store className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Supermercados</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <ShoppingBasket className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-gray-600">Usuarios activos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ShoppingBasket className="h-6 w-6" />
              <span className="text-xl font-bold">CompraFácil</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 CompraFácil. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;