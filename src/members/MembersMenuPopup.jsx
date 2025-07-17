import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function MembersMenuPopup({ member, onEdit, onDelete }) {
  const exportToPDF = () => {
    const doc = new jsPDF();
    const nom = member?.name || member?.denomination || 'Membre';

    // Vérifie que member est bien un objet
    const data =
      member && typeof member === 'object' && !Array.isArray(member)
        ? Object.entries(member)
        : [];

    doc.text(`Profil de ${nom}`, 10, 10);
    doc.autoTable({
      startY: 20,
      head: [['Champ', 'Valeur']],
      body: data.map(([key, value]) => [key, value]),
    });
    doc.save(`${nom}.pdf`);
  };

  return (
    <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-10">
      <button onClick={() => onEdit(member)} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        Éditer
      </button>
      <button onClick={exportToPDF} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
        Exporter en PDF
      </button>
      <button onClick={() => onDelete(member?._id)} className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600">
        Supprimer
      </button>
    </div>
  );
}
