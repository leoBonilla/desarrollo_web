import React from 'react';
import { Link} from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Index = ({ auth, clients }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Clientes</h2>}
    >
      <Head title="Clientes" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="mb-4">
                <Link href={route('clients.create')} className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
                  Agregar Cliente
                </Link>
              </div>
              <table className="min-w-full bg-white border">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border">Nombre</th>
                    <th className="py-2 px-4 border">Email</th>
                    <th className="py-2 px-4 border">Teléfono</th>
                    <th className="py-2 px-4 border">Dirección</th>
                    <th className="py-2 px-4 border">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map(client => (
                    <tr key={client.id}>
                      <td className="py-2 px-4 border">{client.name}</td>
                      <td className="py-2 px-4 border">{client.email}</td>
                      <td className="py-2 px-4 border">{client.phone}</td>
                      <td className="py-2 px-4 border">{client.address}</td>
                      <td className="py-2 px-4 border">
                        <Link href={route('clients.edit', client.id)} className="text-white bg-yellow-500 hover:bg-yellow-700 px-4 py-2 rounded">
                          Editar
                        </Link>
                        <button
                          onClick={() => Inertia.delete(route('clients.destroy', client.id))}
                          className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded ml-2"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
