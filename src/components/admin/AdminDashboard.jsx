
import React, { useState } from 'react';
import { LogOut, PlusCircle, Pencil, Trash2, FileDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [selectedAction, setSelectedAction] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleAction = (action) => {
    setSelectedAction(action);
    switch (action) {
      case 'add':
        navigate('/admin/members/add');
        break;
      case 'edit':
        navigate('/admin/members/edit');
        break;
      case 'delete':
        navigate('/admin/members/delete');
        break;
      case 'export':
        navigate('/admin/members/export');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Panneau d'administration</h1>
        <button
          onClick={handleLogout}
          className="flex items-center text-red-600 hover:underline"
        >
          <LogOut className="mr-2" /> Se déconnecter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button
          onClick={() => handleAction('add')}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg flex items-center justify-center"
        >
          <PlusCircle className="mr-2" /> Ajouter un membre
        </button>
        <button
          onClick={() => handleAction('edit')}
          className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg flex items-center justify-center"
        >
          <Pencil className="mr-2" /> Modifier un membre
        </button>
        <button
          onClick={() => handleAction('delete')}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg flex items-center justify-center"
        >
          <Trash2 className="mr-2" /> Supprimer un membre
        </button>
        <button
          onClick={() => handleAction('export')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg flex items-center justify-center"
        >
          <FileDown className="mr-2" /> Exporter les membres
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
