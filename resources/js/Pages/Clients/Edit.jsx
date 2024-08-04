import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Edit = ({ client, auth }) => {
  const { data, setData, patch, errors } = useForm({
    name: client.name,
    email: client.email,
    phone: client.phone,
    address: client.address
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    patch(route('clients.update', client.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Clientes</h2>}
    >
      <Head title="Editar Cliente" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h1 className="text-2xl mb-4 font-bold">Editar Cliente</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  />
                  {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  />
                  {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="text"
                    value={data.phone}
                    onChange={e => setData('phone', e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Dirección</label>
                  <input
                    type="text"
                    value={data.address}
                    onChange={e => setData('address', e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  >
                    Guardar
                  </button>
                  <Link
                    href={route('clients.index')}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  >
                    Volver a la Lista
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Edit;
