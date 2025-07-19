// src/components/InscriptionForm.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const InscriptionForm = () => {
  const [formData, setFormData] = useState({
    nomONG: '',
    acronyme: '',
    dateCreation: '',
    accordCadre: '',
    adresse: '',
    zones: '',
    domaines: '',
    nomResponsable: '',
    prenomResponsable: '',
    fonction: '',
    email: '',
    telephone: '',
    statuts: false,
    cotisation: false,
    demandeTimbee: false,
    accordCadreFourni: false,
    frais: false,
  });
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      statuts: formData.statuts ? 'Oui' : 'Non',
      cotisation: formData.cotisation ? 'Oui' : 'Non',
      demandeTimbee: formData.demandeTimbee ? 'Oui' : 'Non',
      accordCadreFourni: formData.accordCadreFourni ? 'Oui' : 'Non',
      frais: formData.frais ? 'Oui' : 'Non',
    };

    emailjs
      .send('smtp_zoho_ponah', 'formulaire_adhesion', templateParams, 'iXZaD4i2v60D279kC')
      .then(() => {
        setConfirmation(true);
        setFormData({
          nomONG: '', acronyme: '', dateCreation: '', accordCadre: '', adresse: '',
          zones: '', domaines: '', nomResponsable: '', prenomResponsable: '', fonction: '',
          email: '', telephone: '', statuts: false, cotisation: false, demandeTimbee: false,
          accordCadreFourni: false, frais: false,
        });
      })
      .catch((err) => console.error('Erreur EmailJS:', err));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-10">
      <h3 className="text-2xl font-bold mb-4">Formulaire d’adhésion à la PONAH</h3>
      {confirmation && <p className="text-green-600 font-semibold mb-4">Merci ! Votre demande a été envoyée avec succès.</p>}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="nomONG" required placeholder="Nom de l’ONG" value={formData.nomONG} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="acronyme" placeholder="Acronyme" value={formData.acronyme} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="dateCreation" placeholder="Date de création" value={formData.dateCreation} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="accordCadre" placeholder="Numéro d’accord cadre" value={formData.accordCadre} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="adresse" required placeholder="Adresse physique" value={formData.adresse} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="zones" required placeholder="Zones d’intervention" value={formData.zones} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="domaines" required placeholder="Domaines d’intervention" value={formData.domaines} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="nomResponsable" required placeholder="Nom du responsable" value={formData.nomResponsable} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="prenomResponsable" required placeholder="Prénom du responsable" value={formData.prenomResponsable} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="fonction" placeholder="Fonction du responsable" value={formData.fonction} onChange={handleChange} className="border p-2 rounded" />
        <input type="email" name="email" required placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded" />
        <input type="tel" name="telephone" required placeholder="Téléphone" value={formData.telephone} onChange={handleChange} className="border p-2 rounded" />

        <div className="md:col-span-2 space-y-2">
          <label className="block"><input type="checkbox" name="statuts" checked={formData.statuts} onChange={handleChange} className="mr-2" />Accepte les statuts de la PONAH *</label>
          <label className="block"><input type="checkbox" name="cotisation" checked={formData.cotisation} onChange={handleChange} className="mr-2" />S’engage à payer la cotisation annuelle *</label>
          <label className="block"><input type="checkbox" name="demandeTimbee" checked={formData.demandeTimbee} onChange={handleChange} className="mr-2" />Fournit une demande timbrée *</label>
          <label className="block"><input type="checkbox" name="accordCadreFourni" checked={formData.accordCadreFourni} onChange={handleChange} className="mr-2" />Fournit l’accord cadre *</label>
          <label className="block"><input type="checkbox" name="frais" checked={formData.frais} onChange={handleChange} className="mr-2" />S’engage à régler les frais d’adhésion *</label>
        </div>

        <button type="submit" className="md:col-span-2 bg-primary text-white py-2 px-6 rounded hover:bg-primary/90">Envoyer la demande</button>
      </form>
    </div>
  );
};

export default InscriptionForm;
