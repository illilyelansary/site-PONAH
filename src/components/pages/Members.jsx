import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Search, Users, X, FileText, CheckCircle, FileCheck2, UserCheck } from 'lucide-react';
import defaultMembers from '../../data/membersData';
import { useAuth } from '../../contexts/AuthContext';

const teamData = [
  { name: "Elmehdi AG WAKINA", role: "Président", description: "Responsable de la direction stratégique et de la représentation de la PONAH" },
  { name: "Moussa A. DIALLO", role: "Vice-Président", description: "Appui à la direction et coordination des activités" },
  { name: "Dinguina SOUMARE", role: "Secrétaire Général", description: "Gestion administrative et coordination des équipes" },
  { name: "Alfaji Guityaye", role: "Trésorier Général", description: "Gestion financière et comptable de la plateforme" },
];

const faqData = [
  { question: "Comment adhérer à la PONAH ?", answer: "L’adhésion nécessite une demande timbrée, un Accord Cadre, le paiement des frais d’adhésion (50 000 FCFA) et l’engagement à respecter les statuts." },
  { question: "Quels sont les avantages d’être membre ?", answer: "Accès aux formations, représentations, participation aux mécanismes de coordination, échanges d’expériences, et renforcement des capacités." },
  { question: "Comment collaborer avec la PONAH ?", answer: "Nous collaborons avec les ONG, les agences de coopération internationales, les bailleurs de fonds et les institutions gouvernementales." },
  { question: "Où intervient la PONAH ?", answer: "La PONAH couvre l’ensemble du territoire malien avec plus de 120+ ONG membres réparties dans toutes les régions et le district de Bamako." },
];

const Members = () => {
  const [membersData, setMembersData] = useState(defaultMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('name');
  const [editData, setEditData] = useState(null);
  const { user } = useAuth();
  const isAdmin = user && user.role === 'admin';

  const itemsPerPage = 12;

  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const binaryStr = evt.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setMembersData(data);
      setCurrentPage(1);
    };
    reader.readAsBinaryString(file);
  };

  const filteredMembers = membersData
    .filter(member => member.name && member.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a[sortBy]?.localeCompare(b[sortBy] || ''));

  const paginatedMembers = filteredMembers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  return (
    <div className="min-h-screen">
      {/* Section Héro */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Membres</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Plus de {membersData.length} ONG nationales et locales unies pour l'action humanitaire au Mali
        </p>
      </section>

      {/* Import Excel + Filtres */}
      <div className="max-w-4xl mx-auto px-4 mt-8 mb-4 flex flex-col md:flex-row items-center gap-4 justify-between">
        {isAdmin && (
          <input type="file" accept=".xlsx,.xls" onChange={handleExcelUpload} className="text-sm border rounded px-2 py-1" />
        )}
        <input type="text" placeholder="Rechercher..." className="border px-4 py-2 rounded w-full" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select className="border px-2 py-2 rounded" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="name">Nom</option>
          <option value="zoneIntervention">Zone</option>
        </select>
      </div>

      {/* Statistiques */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div><div className="text-3xl font-bold text-primary">{membersData.length}</div><div>ONG Membres</div></div>
          <div><div className="text-3xl font-bold text-secondary">{[...new Set(membersData.map(m => m.zoneIntervention).filter(Boolean))].length}</div><div>Zones</div></div>
          <div><div className="text-3xl font-bold text-accent">{membersData.filter(m => m.recent).length}</div><div>Nouveaux Membres 2025</div></div>
        </div>
      </section>

      {/* Liste Membres */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedMembers.map((m, i) => (
          <div key={i} onClick={() => setSelectedMember(m)} className="bg-white border p-4 rounded shadow cursor-pointer">
            <div className="flex items-center space-x-2">
              <Users className="text-primary" />
              <h3 className="text-sm font-medium">{m.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="text-center my-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)} className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>{i + 1}</button>
        ))}
      </div>

      {/* Modale */}
      {selectedMember && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded max-w-lg relative">
      <button className="absolute top-2 right-2" onClick={() => setSelectedMember(null)}><X /></button>
      <h2 className="text-xl font-bold mb-2">{selectedMember.fullName || selectedMember.name}</h2>
      <p><strong>Responsable:</strong> {selectedMember.responsable}</p>
      <p><strong>Adresse:</strong> {selectedMember.adresse}</p>
      <p><strong>Email:</strong> {selectedMember.email}</p>
      <p><strong>Zone:</strong> {selectedMember.zoneIntervention}</p>
      <p><strong>Accord Cadre:</strong> {selectedMember.accordCadre}</p>

      {isAdmin && (
        <div className="flex gap-3 mt-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => {
              setEditData(selectedMember);
              setSelectedMember(null);
            }}
          >
            Modifier
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={async () => {
              if (!window.confirm("Confirmer la suppression de ce membre ?")) return;
              try {
                const res = await fetch(`https://ponah-backend.onrender.com/api/members/${selectedMember._id}`, {
                  method: 'DELETE',
                  headers: {
                    Authorization: `Bearer ${user.token}`,
                  },
                });
                if (!res.ok) throw new Error("Échec de la suppression");
                alert("Membre supprimé avec succès !");
                setSelectedMember(null);
                window.location.reload();
              } catch (err) {
                alert(err.message);
              }
            }}
          >
            Supprimer
          </button>
        </div>
      )}
    </div>
  </div>
)}

{editData && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded max-w-lg w-full relative">
      <button className="absolute top-2 right-2" onClick={() => setEditData(null)}><X /></button>
      <h2 className="text-xl font-bold mb-4">Modifier le membre</h2>
      <form onSubmit={async (e) => {
        e.preventDefault();
        try {
          const res = await fetch(`https://ponah-backend.onrender.com/api/members/${editData._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}` // Assure-toi que le token est bien transmis
            },
            body: JSON.stringify(editData)
          });
          if (!res.ok) throw new Error('Échec de la mise à jour');
          alert('Membre mis à jour');
          setEditData(null);
          window.location.reload();
        } catch (err) {
          alert(err.message);
        }
      }}>
        {['name', 'fullName', 'responsable', 'email', 'adresse', 'accordCadre', 'zoneIntervention'].map(field => (
          <div key={field} className="mb-3">
            <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
            <input
              type="text"
              className="border rounded w-full px-3 py-2"
              value={editData[field] || ''}
              onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
            />
          </div>
        ))}
        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>
)}

      {/* Adhésion */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoindre la PONAH</h2>
          <p className="mb-10">L'adhésion à la PONAH est libre et volontaire pour toute ONG nationale qui accepte nos statuts</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <FileText className="w-10 h-10 text-green-600 mb-2" />
              <h3 className="font-bold">Demande d'adhésion</h3>
              <p className="text-sm">Soumettre une demande timbrée adressée au Président</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-green-600 mb-2" />
              <h3 className="font-bold">Accord Cadre</h3>
              <p className="text-sm">Fournir l'accord cadre de votre organisation</p>
            </div>
            <div className="flex flex-col items-center">
              <FileCheck2 className="w-10 h-10 text-green-600 mb-2" />
              <h3 className="font-bold">Frais d'adhésion</h3>
              <p className="text-sm">50 000 FCFA non remboursable</p>
            </div>
            <div className="flex flex-col items-center">
              <UserCheck className="w-10 h-10 text-green-600 mb-2" />
              <h3 className="font-bold">Cotisation annuelle</h3>
              <p className="text-sm">Engagement à payer 50 000 FCFA</p>
            </div>
          </div>

          <div className="bg-white rounded shadow p-6 text-left max-w-3xl mx-auto">
            <h4 className="text-xl font-bold mb-4">Critères d'adhésion</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Être une ONG nationale légalement reconnue</li>
              <li>Intervenir dans le domaine humanitaire</li>
              <li>Accepter les statuts et règlement intérieur</li>
              <li>Disposer d’un Accord Cadre valide</li>
              <li>S’acquitter des frais d’adhésion et cotisations</li>
              <li>Respecter la charte des membres</li>
            </ul>
          </div>
          <a href="mailto:ponah.mali@gmail.com" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded">Demander l'adhésion</a>
        </div>
      </section>

      {/* Équipe Dirigeante */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Notre Équipe Dirigeante</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamData.map((m, i) => (
              <div key={i} className="flex flex-col items-center">
                <UserCheck className="w-10 h-10 text-primary mb-2" />
                <h3 className="font-bold">{m.name}</h3>
                <p className="text-sm text-primary">{m.role}</p>
                <p className="text-xs text-gray-600 mt-1">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions Fréquentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions Fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white border p-4 rounded shadow">
                <h4 className="font-semibold text-primary mb-2">{faq.question}</h4>
                <p className="text-sm text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
