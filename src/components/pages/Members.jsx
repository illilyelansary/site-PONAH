import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Users, X, FileText, CheckCircle, FileCheck2, UserCheck, Search } from 'lucide-react';
import defaultMembers from '../../data/membersData_detailed_full';
import { useAuth } from '../../contexts/AuthContext';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import InscriptionForm from '../../components/InscriptionForm';

const teamData = [
  { name: "Dr Elmehdi AG WAKINA", role: "Président", description: "Responsable de la direction stratégique et de la représentation de la PONAH" },
  { name: "Moussa Abba DIALLO", role: "Vice-Président", description: "Appui à la direction et coordination des activités" },
  { name: "Dianguina SOUMARE", role: "Secrétaire Général", description: "Gestion administrative et coordination des équipes" },
  { name: "Alidji GUITTEYE", role: "Trésorier Général", description: "Gestion financière et comptable de la plateforme" },
  { name: "YAYA BOIRE", role: "Trésorier Adjoint", description: "Appui à la gestion comptable" },
  { name: "Louis Cheick SISSOKO", role: "Secrétaire chargé de l’Information, communication et organisation", description: "Responsable de la communication interne et externe" },
  { name: "Abdoul Moutalib Ag WATANE", role: "Secrétaire adjoint chargé de l’Information, communication et organisation", description: "Soutien aux actions de communication et d’organisation" },
  { name: "Nassouroun Walet OUEFAN", role: "Secrétaire chargée du Plaidoyer aux alliances", description: "Responsable des partenariats et du plaidoyer" },
  { name: "Moussa Ibrahim TOURE", role: "Secrétaire adjoint chargé du plaidoyer et aux alliances", description: "Appui aux activités de plaidoyer et de collaboration" },
  { name: "Gamny IGASTANE", role: "Président (autre structure)", description: "Responsable d'une structure affiliée" },
  { name: "Abdoul Aziz AG ALWALI", role: "Membre", description: "Membre actif de la plateforme" },
  { name: "Mouhamadou Farka MAIGA", role: "Membre", description: "Membre actif de la plateforme" },
  { name: "Abdoulaye A. TRAORE", role: "Secrétaire Permanent", description: "Coordinateur des activités permanentes de la PONAH" }
];

const faqData = [
  { question: "Comment adhérer à la PONAH ?", answer: "L’adhésion nécessite une demande timbrée, un Accord Cadre, le paiement des frais d’adhésion (50 000 FCFA) et l’engagement à respecter les statuts." },
  { question: "Quels sont les avantages d’être membre ?", answer: "Accès aux formations, représentations, participation aux mécanismes de coordination, échanges d’expériences, et renforcement des capacités." },
  { question: "Comment collaborer avec la PONAH ?", answer: "Nous collaborons avec les ONG, les agences de coopération internationales, les bailleurs de fonds et les institutions gouvernementales." },
  { question: "Où intervient la PONAH ?", answer: "La PONAH couvre l’ensemble du territoire malien avec plus de 150+ ONG membres réparties dans toutes les régions et le district de Bamako." }
];

const Members = () => {
  const [membersData, setMembersData] = useState(defaultMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useAuth();
  const isAdmin = user && user.role === 'admin';
  const itemsPerPage = 12;

  const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";

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

  const exportAllToPDF = () => {
    const doc = new jsPDF('landscape');
    doc.setFontSize(12);
    doc.text('Liste complète des membres de la PONAH', 14, 15);
    const headers = [[
      'Nom complet de l’ONG', 'Acronyme'
    ]];
    const body = membersData.map(m => [
      m['Nom complet de l’ONG'] || '',
      m['Acronyme'] || '',
      m['Date de création'] || '',
      m['Numéro d’accord cadre'] || '',
      m['Adresse physique'] || '',
      m['Zones d’intervention'] || '',
      m['Domaines d’intervention'] || '',
      m['Nom du responsable'] || '',
      m['Prénom du responsable'] || '',
      m['Fonction du responsable'] || '',
      m['Téléphone du responsable'] || '',
      m['Email du responsable'] || ''
    ]);
    doc.autoTable({
      head: headers,
      body: body,
      startY: 20,
      styles: { fontSize: 7, cellPadding: 1 },
      headStyles: { fillColor: [41, 128, 185], textColor: [255, 255, 255] },
      theme: 'grid'
    });
    doc.save('Membres_PONAH_Global.pdf');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredMembers = membersData.filter((member) => {
    const nom = normalize(member['Nom complet de l’ONG']);
    const acronyme = normalize(member['Acronyme']);
    const zones = normalize(member['Zones d’intervention']);
    const search = normalize(searchTerm);
    const selected = normalize(selectedZone);

    const nomMatch = nom.includes(search);
    const acronymeMatch = acronyme.includes(search);
    const zoneMatch = selected === '' || (zones && zones.includes(selected));

    return zoneMatch && (nomMatch || acronymeMatch);
  });

  const paginatedMembers = filteredMembers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  const zoneOptions = [...new Set(
    membersData
      .flatMap(m => (m['Zones d’intervention'] || '').split(',').map(r => r.trim()))
      .filter(Boolean)
  )].sort((a, b) => a.localeCompare(b));

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Membres</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Plus de {membersData.length} ONG nationales et locales unies pour l'action humanitaire au Mali
        </p>
      </section>

      <div className="text-center mt-4">
        <button onClick={exportAllToPDF} className="bg-primary text-white px-6 py-2 rounded shadow">
          Exporter tous les membres en PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 mb-4 flex flex-col md:flex-row items-center gap-4 justify-between md:flex-wrap">
        {isAdmin && (
          <input type="file" accept=".xlsx,.xls" onChange={handleExcelUpload} className="text-sm border rounded px-2 py-1" />
        )}
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par nom ou acronyme..."
            className="border py-2 pr-4 pl-8 rounded w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <select
          value={selectedZone}
          onChange={(e) => setSelectedZone(e.target.value)}
          className="border py-2 px-3 rounded w-full md:w-60"
        >
          <option value="">Toutes les zones</option>
          {zoneOptions.map((region, i) => (
            <option key={i} value={region}>{region}</option>
          ))}
        </select>
        <div className="w-full text-right">
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedZone('');
              setCurrentPage(1);
            }}
            className="text-sm text-blue-600 underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-2 text-sm text-gray-600 italic">
        {filteredMembers.length} membre(s) trouvé(s)
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedMembers.map((m, i) => (
          <div key={i} onClick={() => setSelectedMember(m)} className="bg-white border p-4 rounded shadow cursor-pointer">
            <div className="flex items-center space-x-2">
              <Users className="text-primary" />
              <h3 className="text-sm font-medium">{m['Acronyme']}</h3>
            </div>
            <p className="text-xs mt-1">{m['Nom complet de l’ONG']}</p>
          </div>
        ))}
      </div>

      <div className="text-center my-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)} className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>{i + 1}</button>
        ))}
      </div>

      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded max-w-lg relative">
            <button className="absolute top-2 right-2" onClick={() => setSelectedMember(null)}><X /></button>
            <h2 className="text-xl font-bold mb-2">{selectedMember['Nom complet de l’ONG']}</h2>
            <p><strong>Acronyme:</strong> {selectedMember['Acronyme']}</p>
            <p><strong>Date de création:</strong> {selectedMember['Date de création']}</p>
            <p><strong>Responsable:</strong> {`${selectedMember['Prénom du responsable']} ${selectedMember['Nom du responsable']}`}</p>
            <p><strong>Fonction:</strong> {selectedMember['Fonction du responsable']}</p>
            <p><strong>Email:</strong> {selectedMember['Email du responsable']}</p>
            <p><strong>Adresse:</strong> {selectedMember['Adresse physique']}</p>
            <p><strong>Zone d’intervention:</strong> {selectedMember['Zones d’intervention']}</p>
            <p><strong>Accord Cadre:</strong> {selectedMember['Numéro d’accord cadre']}</p>
          </div>
        </div>
      )}

      <section className="py-16 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoindre la PONAH</h2>
          <p className="mb-10">L'adhésion à la PONAH est libre et volontaire pour toute ONG nationale qui accepte nos statuts.</p>
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
          <div className="bg-white rounded-lg shadow-md p-6 text-left max-w-4xl mx-auto mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-center">Conditions pour devenir membre</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
              <li>Être une ONG légalement reconnue au Mali.</li>
              <li>Disposer d’un Accord Cadre signé avec le Gouvernement.</li>
              <li>Soumettre une demande timbrée adressée au Président de la PONAH.</li>
              <li>S’engager à respecter les statuts et règlements intérieurs de la PONAH.</li>
              <li>Fournir les documents justificatifs requis (accord cadre, statuts, etc.).</li>
              <li>Payer les frais d’adhésion de 50 000 FCFA (non remboursables).</li>
              <li>S’acquitter de la cotisation annuelle fixée à 50 000 FCFA.</li>
            </ul>
            <p className="mt-4 italic text-sm text-gray-600">
              Pour toute question, contactez-nous à :
              <a href="mailto:secretariat@ponah.org" className="text-primary font-medium ml-1">secretariat@ponah.org</a>
            </p>
          </div>
          <a href="#formulaire-adhesion" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded">Devenir membre</a>
        </div>
      </section>

      <section id="formulaire-adhesion" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Formulaire d'Adhésion</h2>
          <InscriptionForm />
        </div>
      </section>

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
