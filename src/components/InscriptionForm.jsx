// src/components/InscriptionForm.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const regionsMali = [
  'Bamako', 'Kayes', 'Koulikoro', 'Sikasso', 'Ségou', 'Mopti', 'Tombouctou',
  'Gao', 'Kidal', 'Taoudénit', 'Ménaka', 'Nioro', 'Kita', 'Dioïla', 'Nara',
  'Bougouni', 'Koutiala', 'San', 'Douentza', 'Bandiagara'
];

const domaines = [
  "Secours d'urgence", 'Sécurité alimentaire et nutrition', 'Santé',
  'Eau, assainissement et hygiène (WASH)', 'Protection des populations vulnérables',
  'Abri et logement', 'Éducation', 'Coordination et gestion de l\'information',
  'Moyens de subsistance et résilience', 'Développement économique',
  'Environnement et changement climatique', 'Gouvernance et droits humains',
  'Prévention des conflits et consolidation de la paix', 'Autre'
];

const InscriptionForm = () => {
  const [formData, setFormData] = useState({
    nomONG: '', acronyme: '', dateCreation: '', accordCadre: '', adresse: '',
    emailONG: '', telephoneONG: '', web: '',
    zones: [], autresZones: '', domaines: [], autresDomaines: '',
    nomResponsable: '', prenomResponsable: '', fonction: '', telephone: '', email: '',
    statuts: false, cotisation: false, demandeTimbee: false, accordCadreFourni: false, frais: false
  });
  const [confirmation, setConfirmation] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'zones' || name === 'domaines') {
        setFormData((prev) => ({
          ...prev,
          [name]: checked ? [...prev[name], value] : prev[name].filter((v) => v !== value)
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const confirmAndSend = () => {
    const templateParams = {
      ...formData,
      zones: formData.zones.join(', '),
      domaines: formData.domaines.join(', '),
      statuts: formData.statuts ? 'Oui' : 'Non',
      cotisation: formData.cotisation ? 'Oui' : 'Non',
      demandeTimbee: formData.demandeTimbee ? 'Oui' : 'Non',
      accordCadreFourni: formData.accordCadreFourni ? 'Oui' : 'Non',
      frais: formData.frais ? 'Oui' : 'Non'
    };

    emailjs
      .send('smtp_zoho_ponah', 'formulaire_adhesion', templateParams, 'iXZaD4i2v60D279kC')
      .then(() => {
        setConfirmation(true);
        setFormData({
          nomONG: '', acronyme: '', dateCreation: '', accordCadre: '', adresse: '',
          emailONG: '', telephoneONG: '', web: '',
          zones: [], autresZones: '', domaines: [], autresDomaines: '',
          nomResponsable: '', prenomResponsable: '', fonction: '', telephone: '', email: '',
          statuts: false, cotisation: false, demandeTimbee: false, accordCadreFourni: false, frais: false
        });
        setShowSummary(false);
      })
      .catch((err) => console.error('Erreur EmailJS:', err));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-10">
      <h3 className="text-2xl font-bold mb-4">Formulaire d’adhésion à la PONAH</h3>
      {confirmation && <p className="text-green-600 font-semibold mb-4">Merci ! Votre demande a été envoyée avec succès.</p>}

      {!showSummary ? (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informations ONG */}
          <fieldset className="border p-4 rounded border-primary">
            <legend className="text-lg font-semibold text-primary mb-2">🏢 Informations sur l’ONG</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="nomONG" required placeholder="Nom complet de l’ONG" value={formData.nomONG} onChange={handleChange} className="border p-2 rounded" />
              <input name="acronyme" required placeholder="Acronyme" value={formData.acronyme} onChange={handleChange} className="border p-2 rounded" />
              <input type="date" name="dateCreation" value={formData.dateCreation} onChange={handleChange} className="border p-2 rounded" />
              <input name="accordCadre" required placeholder="Numéro d’accord cadre" value={formData.accordCadre} onChange={handleChange} className="border p-2 rounded" />
              <input name="adresse" required placeholder="Adresse physique" value={formData.adresse} onChange={handleChange} className="border p-2 rounded" />
              <input type="email" name="emailONG" required placeholder="Adresse email de l’ONG" value={formData.emailONG} onChange={handleChange} className="border p-2 rounded" />
              <input type="tel" name="telephoneONG" required placeholder="Téléphone principal" value={formData.telephoneONG} onChange={handleChange} className="border p-2 rounded" />
              <input name="web" placeholder="Page web / réseaux sociaux (optionnel)" value={formData.web} onChange={handleChange} className="border p-2 rounded" />
            </div>
          </fieldset>

          {/* Zones et domaines */}
          <fieldset className="border p-4 rounded border-primary">
            <legend className="text-lg font-semibold text-primary mb-2">🌍 Zones et domaines d’intervention</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-medium">Zones d’intervention :</label>
                {regionsMali.map((zone, i) => (
                  <label key={i} className="block text-sm">
                    <input type="checkbox" name="zones" value={zone} checked={formData.zones.includes(zone)} onChange={handleChange} className="mr-2" /> {zone}
                  </label>
                ))}
                <input name="autresZones" placeholder="Autre zone (préciser)" value={formData.autresZones} onChange={handleChange} className="border p-2 mt-2 rounded w-full" />
              </div>
              <div>
                <label className="font-medium">Domaines d’intervention :</label>
                {domaines.map((domaine, i) => (
                  <label key={i} className="block text-sm">
                    <input type="checkbox" name="domaines" value={domaine} checked={formData.domaines.includes(domaine)} onChange={handleChange} className="mr-2" /> {domaine}
                  </label>
                ))}
                <input name="autresDomaines" placeholder="Autre domaine (préciser)" value={formData.autresDomaines} onChange={handleChange} className="border p-2 mt-2 rounded w-full" />
              </div>
            </div>
          </fieldset>

          {/* Responsable */}
          <fieldset className="border p-4 rounded border-primary">
            <legend className="text-lg font-semibold text-primary mb-2">👤 Informations sur le responsable</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="nomResponsable" required placeholder="Nom du responsable" value={formData.nomResponsable} onChange={handleChange} className="border p-2 rounded" />
              <input name="prenomResponsable" required placeholder="Prénom du responsable" value={formData.prenomResponsable} onChange={handleChange} className="border p-2 rounded" />
              <input name="fonction" required placeholder="Fonction du responsable" value={formData.fonction} onChange={handleChange} className="border p-2 rounded" />
              <input type="tel" name="telephone" required placeholder="Téléphone du responsable" value={formData.telephone} onChange={handleChange} className="border p-2 rounded" />
              <input type="email" name="email" required placeholder="Email du responsable" value={formData.email} onChange={handleChange} className="border p-2 rounded" />
            </div>
          </fieldset>

          {/* Documents obligatoires */}
          <fieldset className="border p-4 rounded border-primary">
            <legend className="text-lg font-semibold text-primary mb-2">📎 Documents et engagements</legend>
            <label className="block text-sm">
              <input type="checkbox" name="statuts" checked={formData.statuts} onChange={handleChange} className="mr-2" /> J’accepte les statuts de la PONAH
            </label>
            <label className="block text-sm">
              <input type="checkbox" name="cotisation" checked={formData.cotisation} onChange={handleChange} className="mr-2" /> Je m’engage à payer la cotisation annuelle
            </label>
            <label className="block text-sm">
              <input type="checkbox" name="demandeTimbee" checked={formData.demandeTimbee} onChange={handleChange} className="mr-2" /> J’ai fourni une demande timbrée
            </label>
            <label className="block text-sm">
              <input type="checkbox" name="accordCadreFourni" checked={formData.accordCadreFourni} onChange={handleChange} className="mr-2" /> J’ai fourni l’accord cadre
            </label>
            <label className="block text-sm">
              <input type="checkbox" name="frais" checked={formData.frais} onChange={handleChange} className="mr-2" /> J’ai réglé les frais d’adhésion
            </label>
          </fieldset>

          <button type="submit" className="bg-primary text-white py-2 px-6 rounded hover:bg-primary/90">Prévisualiser et confirmer</button>
        </form>
      ) : (
        <div>
          <h4 className="text-xl font-semibold mb-4">Résumé de votre demande</h4>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
          <div className="flex gap-4 mt-4">
            <button onClick={confirmAndSend} className="bg-green-600 text-white px-4 py-2 rounded">Envoyer</button>
            <button onClick={() => setShowSummary(false)} className="bg-gray-300 px-4 py-2 rounded">Modifier</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InscriptionForm;
