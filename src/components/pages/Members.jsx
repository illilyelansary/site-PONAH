import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Users, X, FileText, CheckCircle, FileCheck2, UserCheck, Search, MapPin, Building2, Filter } from 'lucide-react';
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
  { name: "Louis Cheick SISSOKO", role: "Secrétaire chargé de l'Information, communication et organisation", description: "Responsable de la communication interne et externe" },
  { name: "Abdoul Moutalib Ag WATANE", role: "Secrétaire adjoint chargé de l'Information, communication et organisation", description: "Soutien aux actions de communication et d'organisation" },
  { name: "Nassouroun Walet OUEFAN", role: "Secrétaire chargée du Plaidoyer aux alliances", description: "Responsable des partenariats et du plaidoyer" },
  { name: "Moussa Ibrahim TOURE", role: "Secrétaire adjoint chargé du plaidoyer et aux alliances", description: "Appui aux activités de plaidoyer et de collaboration" },
  { name: "Gamny IGASTANE", role: "Président (autre structure)", description: "Responsable d'une structure affiliée" },
  { name: "Abdoul Aziz AG ALWALI", role: "Membre", description: "Membre actif de la plateforme" },
  { name: "Mouhamadou Farka MAIGA", role: "Membre", description: "Membre actif de la plateforme" },
  { name: "Abdoulaye A. TRAORE", role: "Secrétaire Permanent", description: "Coordinateur des activités permanentes de la PONAH" }
];

const faqData = [
  { question: "Comment adhérer à la PONAH ?", answer: "L'adhésion nécessite une demande timbrée, un Accord Cadre, le paiement des frais d'adhésion (50 000 FCFA) et l'engagement à respecter les statuts." },
  { question: "Quels sont les avantages d'être membre ?", answer: "Accès aux formations, représentations, participation aux mécanismes de coordination, échanges d'expériences, et renforcement des capacités." },
  { question: "Comment collaborer avec la PONAH ?", answer: "Nous collaborons avec les ONG, les agences de coopération internationales, les bailleurs de fonds et les institutions gouvernementales." },
  { question: "Où intervient la PONAH ?", answer: "La PONAH couvre l'ensemble du territoire malien avec plus de 150+ ONG membres réparties dans toutes les régions et le district de Bamako." }
];

// Définir les domaines d'intervention principaux
const interventionDomains = [
  { id: 'all', label: 'Tous les domaines' },
  { id: 'agriculture', label: 'Agriculture et Élevage', keywords: ['agriculture', 'élevage', 'pêche', 'agroécologie', 'agr'] },
  { id: 'wash', label: 'Eau, Hygiène et Assainissement (WASH)', keywords: ['eau', 'hygiène', 'assainissement', 'wash', 'hydraulique', 'approvisionnement en eau'] },
  { id: 'education', label: 'Éducation et Alphabétisation', keywords: ['éducation', 'alphabétisation', 'scolarisation', 'education', 'alpha'] },
  { id: 'environment', label: 'Environnement et Changement Climatique', keywords: ['environnement', 'changement climatique', 'climat', 'restauration des terres', 'ressources naturelles', 'gestion des ressources'] },
  { id: 'gender', label: 'Genre et VBG', keywords: ['genre', 'vbg', 'femmes', 'filles', 'autonomisation'] },
  { id: 'governance', label: 'Gouvernance et Décentralisation', keywords: ['gouvernance', 'décentralisation', 'foncier', 'démocratique', 'redevable'] },
  { id: 'humanitarian', label: 'Humanitaire et Aide d\'Urgence', keywords: ['humanitaire', 'urgence', 'aide d\'urgence', 'aide humanitaire'] },
  { id: 'nutrition', label: 'Nutrition', keywords: ['nutrition', 'nutritionnel'] },
  { id: 'peace', label: 'Paix et Cohésion Sociale', keywords: ['paix', 'cohésion sociale', 'stabilisation', 'consolidation de la paix', 'conflit', 'gestion des conflits'] },
  { id: 'protection', label: 'Protection', keywords: ['protection', 'enfant', 'protection de l\'enfant'] },
  { id: 'health', label: 'Santé et Santé de la Reproduction', keywords: ['santé', 'ssr', 'reproduction', 'santé de la reproduction', 'santé communautaire'] },
  { id: 'food_security', label: 'Sécurité Alimentaire et Résilience', keywords: ['sécurité alimentaire', 'résilience', 'moyens de subsistance', 'moyens d\'existence', 'securité alimentaire'] }
];

const Members = () => {
  const [membersData, setMembersData] = useState(defaultMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const { user } = useAuth();
  const isAdmin = user && user.role === 'admin';
  const itemsPerPage = 12;

  const normalize = (str) => str ? str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase() : "";

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
      'Nom complet de l\'ONG', 'Acronyme', 'Date de création', 'Accord cadre', 'Adresse', 'Zones', 'Domaines', 'Responsable', 'Téléphone', 'Email'
    ]];
    const body = membersData.map(m => [
      m['Nom complet de l\'ONG'] || '',
      m['Acronyme'] || '',
      m['Date de création'] || '',
      m['Numéro d\'accord cadre'] || '',
      m['Adresse physique'] || '',
      m['Zones d\'intervention'] || '',
      m['Domaines d\'intervention'] || '',
      `${m['Prénom du responsable'] || ''} ${m['Nom du responsable'] || ''}`,
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

  // Fonction pour vérifier si un membre correspond au domaine sélectionné
  const matchesDomain = (member, domainId) => {
    if (domainId === 'all') return true;
    
    const domainsText = normalize(member['Domaines d\'intervention'] || '');
    if (domainsText === 'nan' || !domainsText) return false;
    
    const domain = interventionDomains.find(d => d.id === domainId);
    if (!domain || !domain.keywords) return false;
    
    return domain.keywords.some(keyword => 
      domainsText.includes(normalize(keyword))
    );
  };

  const filteredMembers = membersData.filter((member) => {
    const nom = normalize(member['Nom complet de l\'ONG']);
    const acronyme = normalize(member['Acronyme']);
    const zones = normalize(member['Zones d\'intervention']);
    const search = normalize(searchTerm);
    const selected = normalize(selectedZone);

    const nomMatch = nom.includes(search);
    const acronymeMatch = acronyme.includes(search);
    const zoneMatch = selected === '' || (zones && zones.includes(selected));
    const domainMatch = matchesDomain(member, selectedDomain);

    return zoneMatch && domainMatch && (nomMatch || acronymeMatch);
  });

  const paginatedMembers = filteredMembers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  const zoneOptions = [...new Set(
    membersData
      .flatMap(m => (m['Zones d\'intervention'] || '').split(',').map(r => r.trim()))
      .filter(Boolean)
  )].sort((a, b) => a.localeCompare(b));

  // Compter les filtres actifs
  const activeFiltersCount = (selectedZone !== '' ? 1 : 0) + (selectedDomain !== 'all' ? 1 : 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Membres</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Plus de {membersData.length} ONG nationales et locales unies pour l'action humanitaire au Mali
        </p>
      </section>

      {/* Bouton Export PDF */}
      <div className="text-center mt-6">
        <button 
          onClick={exportAllToPDF} 
          className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition-colors font-medium"
        >
          📄 Exporter tous les membres en PDF
        </button>
      </div>

      {/* Section Filtres Avancés */}
      <div className="max-w-7xl mx-auto px-4 mt-8 mb-6">
        {isAdmin && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Import Excel (Admin uniquement)
            </label>
            <input 
              type="file" 
              accept=".xlsx,.xls" 
              onChange={handleExcelUpload} 
              className="text-sm border rounded px-3 py-2 w-full md:w-auto"
            />
          </div>
        )}

        {/* Bouton d'affichage des filtres (mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg mb-4"
        >
          <Filter size={20} />
          Filtres {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </button>

        {/* Filtres */}
        <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-col gap-4`}>
          {/* Barre de recherche */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par nom ou acronyme..."
              className="border py-3 pr-4 pl-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Filtres par région et domaine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Filtre par région */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                Région d'intervention
              </label>
              <select
                value={selectedZone}
                onChange={(e) => {
                  setSelectedZone(e.target.value);
                  setCurrentPage(1);
                }}
                className="border py-3 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Toutes les régions</option>
                {zoneOptions.map((region, i) => (
                  <option key={i} value={region}>{region}</option>
                ))}
              </select>
            </div>

            {/* Filtre par domaine d'intervention */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building2 className="inline w-4 h-4 mr-1" />
                Domaine d'intervention
              </label>
              <select
                value={selectedDomain}
                onChange={(e) => {
                  setSelectedDomain(e.target.value);
                  setCurrentPage(1);
                }}
                className="border py-3 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {interventionDomains.map(domain => (
                  <option key={domain.id} value={domain.id}>{domain.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Bouton de réinitialisation */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <strong>{filteredMembers.length}</strong> membre(s) trouvé(s)
            </div>
            {(searchTerm || selectedZone || selectedDomain !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedZone('');
                  setSelectedDomain('all');
                  setCurrentPage(1);
                }}
                className="text-sm text-primary hover:text-primary/80 underline font-medium"
              >
                ✕ Réinitialiser tous les filtres
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Liste des membres */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        {filteredMembers.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500 text-lg mb-4">Aucune ONG ne correspond à vos critères de recherche.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedZone('');
                setSelectedDomain('all');
                setCurrentPage(1);
              }}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              Réinitialiser tous les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedMembers.map((m, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedMember(m)} 
                className="bg-white border rounded-lg shadow hover:shadow-xl transition-shadow p-6 cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="text-primary w-6 h-6" />
                  <h3 className="text-lg font-bold text-gray-900">{m['Acronyme']}</h3>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{m['Nom complet de l\'ONG']}</p>
                
                {m['Zones d\'intervention'] && (
                  <div className="flex items-start gap-2 text-xs text-gray-500 mb-2">
                    <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{m['Zones d\'intervention']}</span>
                  </div>
                )}
                
                {m['Domaines d\'intervention'] && m['Domaines d\'intervention'] !== 'nan' && (
                  <div className="flex items-start gap-2 text-xs text-gray-500">
                    <Building2 className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{m['Domaines d\'intervention']}</span>
                  </div>
                )}
                
                <button className="mt-4 w-full px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium text-sm">
                  Voir les détails
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="text-center my-8">
          <div className="inline-flex gap-2 flex-wrap justify-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentPage(i + 1)} 
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === i + 1 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Modal de détails */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 z-10" 
              onClick={() => setSelectedMember(null)}
            >
              <X size={24} />
            </button>
            
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedMember['Acronyme']}
                </h2>
                <p className="text-lg text-gray-600">
                  {selectedMember['Nom complet de l\'ONG']}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Informations générales */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-900 border-b pb-2">
                    Informations générales
                  </h3>
                  
                  <div>
                    <p className="text-sm text-gray-500">Date de création</p>
                    <p className="font-medium">{selectedMember['Date de création']}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Numéro d'accord cadre</p>
                    <p className="font-medium">{selectedMember['Numéro d\'accord cadre']}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Adresse physique</p>
                    <p className="font-medium">{selectedMember['Adresse physique']}</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-900 border-b pb-2">
                    Contact
                  </h3>
                  
                  <div>
                    <p className="text-sm text-gray-500">Responsable</p>
                    <p className="font-medium">
                      {selectedMember['Prénom du responsable']} {selectedMember['Nom du responsable']}
                    </p>
                    <p className="text-sm text-gray-600">{selectedMember['Fonction du responsable']}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="font-medium">{selectedMember['Téléphone du responsable']}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium break-all">{selectedMember['Email du responsable']}</p>
                  </div>
                </div>
              </div>

              {/* Zones d'intervention */}
              <div className="mt-6">
                <h3 className="font-semibold text-lg text-gray-900 border-b pb-2 mb-3">
                  Zones d'intervention
                </h3>
                <p className="text-gray-700">{selectedMember['Zones d\'intervention']}</p>
              </div>

              {/* Domaines d'intervention */}
              {selectedMember['Domaines d\'intervention'] && selectedMember['Domaines d\'intervention'] !== 'nan' && (
                <div className="mt-6">
                  <h3 className="font-semibold text-lg text-gray-900 border-b pb-2 mb-3">
                    Domaines d'intervention
                  </h3>
                  <p className="text-gray-700">{selectedMember['Domaines d\'intervention']}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Section Rejoindre la PONAH */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoindre la PONAH</h2>
          <p className="mb-10 text-lg">L'adhésion à la PONAH est libre et volontaire pour toute ONG nationale qui accepte nos statuts.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
              <FileText className="w-12 h-12 text-green-600 mb-3" />
              <h3 className="font-bold mb-2">Demande d'adhésion</h3>
              <p className="text-sm text-gray-600">Soumettre une demande timbrée adressée au Président</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
              <CheckCircle className="w-12 h-12 text-green-600 mb-3" />
              <h3 className="font-bold mb-2">Accord Cadre</h3>
              <p className="text-sm text-gray-600">Fournir l'accord cadre de votre organisation</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
              <FileCheck2 className="w-12 h-12 text-green-600 mb-3" />
              <h3 className="font-bold mb-2">Frais d'adhésion</h3>
              <p className="text-sm text-gray-600">50 000 FCFA non remboursable</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
              <UserCheck className="w-12 h-12 text-green-600 mb-3" />
              <h3 className="font-bold mb-2">Cotisation annuelle</h3>
              <p className="text-sm text-gray-600">Engagement à payer 50 000 FCFA</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-left max-w-4xl mx-auto mb-10">
            <h3 className="text-xl font-bold mb-4 text-primary">Critères d'adhésion</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
              <li>Être une ONG légalement reconnue au Mali.</li>
              <li>Disposer d'un Accord Cadre signé avec le Gouvernement.</li>
              <li>Soumettre une demande timbrée adressée au Président de la PONAH.</li>
              <li>S'engager à respecter les statuts et règlements intérieurs de la PONAH.</li>
              <li>Fournir les documents justificatifs requis (accord cadre, statuts, etc.).</li>
              <li>Payer les frais d'adhésion de 50 000 FCFA (non remboursables).</li>
              <li>S'acquitter de la cotisation annuelle fixée à 50 000 FCFA.</li>
            </ul>
            <p className="mt-4 italic text-sm text-gray-600">
              Pour toute question, contactez-nous à :
              <a href="mailto:secretariat@ponah.org" className="text-primary font-medium ml-1">secretariat@ponah.org</a>
            </p>
          </div>
          <a href="#formulaire-adhesion" className="mt-6 inline-block bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium">
            Devenir membre
          </a>
        </div>
      </section>

      {/* Formulaire d'adhésion */}
      <section id="formulaire-adhesion" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Formulaire d'Adhésion</h2>
          <InscriptionForm />
        </div>
      </section>

      {/* Équipe Dirigeante */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Notre Équipe Dirigeante</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamData.map((m, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-50 p-6 rounded-lg">
                <UserCheck className="w-12 h-12 text-primary mb-3" />
                <h3 className="font-bold text-gray-900">{m.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{m.role}</p>
                <p className="text-xs text-gray-600 mt-2">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions Fréquentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Questions Fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-primary mb-3">{faq.question}</h4>
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
