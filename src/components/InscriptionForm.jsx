// src/components/InscriptionForm.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function InscriptionForm() {
  const [formData, setFormData] = useState({
    nomONG: '',
    acronyme: '',
    dateCreation: '',
    accordCadre: '',
    adresse: '',
    zones: '',
    nomResponsable: '',
    prenomResponsable: '',
    fonction: '',
    email: '',
    telephone: '',
    engagementStatuts: false,
    engagementCotisation: false,
    demandeTimbrée: false,
    accordCadreFournis: false,
    fraisPayes: false
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(fd => ({ ...fd, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    emailjs.send(
      'service_ponah',
      'template_adhesion_struct',
      formData,
      'iXZaD4i2v60D279kC'
    ).then(() => {
      setSuccess(true);
      setFormData({
        nomONG: '', acronyme: '', dateCreation: '', accordCadre: '',
        adresse: '', zones: '', nomResponsable: '', prenomResponsable: '',
        fonction: '', email: '', telephone: '',
        engagementStatuts: false, engagementCotisation: false,
        demandeTimbrée: false, accordCadreFournis: false, fraisPayes: false
      });
    }).catch(console.error).finally(() => setSending(false));
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      {success && <p className="text-green-600 col-span-2">Message envoyé avec succès !</p>}

      <input name="nomONG" required value={formData.nomONG} onChange={handleChange} placeholder="Nom complet de l'ONG *" className="border p-3 rounded" />
      <input name="acronyme" value={formData.acronyme} onChange={handleChange} placeholder="Acronyme" className="border p-3 rounded" />
      <input name="dateCreation" value={formData.dateCreation} onChange={handleChange} placeholder="Date de création" className="border p-3 rounded" />
      <input name="accordCadre" value={formData.accordCadre} onChange={handleChange} placeholder="Numéro d'accord cadre" className="border p-3 rounded" />
      <input name="adresse" required value={formData.adresse} onChange={handleChange} placeholder="Adresse physique *" className="border p-3 rounded" />
      <input name="zones" value={formData.zones} onChange={handleChange} placeholder="Zones d'intervention" className="border p-3 rounded" />

      <input name="prenomResponsable" value={formData.prenomResponsable} onChange={handleChange} placeholder="Prénom du responsable" className="border p-3 rounded" />
      <input name="nomResponsable" value={formData.nomResponsable} onChange={handleChange} placeholder="Nom du responsable" className="border p-3 rounded" />
      <input name="fonction" value={formData.fonction} onChange={handleChange} placeholder="Fonction du responsable" className="border p-3 rounded" />
      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email du responsable *" className="border p-3 rounded" />
      <input name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone du responsable" className="border p-3 rounded" />

      <div className="col-span-2 space-y-3">
        <label className="block">
          <input type="checkbox" name="engagementStatuts" checked={formData.engagementStatuts} onChange={handleChange} className="mr-2" required />
          J'accepte de respecter les statuts de la PONAH *
        </label>
        <label className="block">
          <input type="checkbox" name="engagementCotisation" checked={formData.engagementCotisation} onChange={handleChange} className="mr-2" required />
          Je m'engage à payer la cotisation annuelle de 50 000 FCFA *
        </label>
        <label className="block">
          <input type="checkbox" name="demandeTimbrée" checked={formData.demandeTimbrée} onChange={handleChange} className="mr-2" />
          Demande timbrée fournie
        </label>
        <label className="block">
          <input type="checkbox" name="accordCadreFournis" checked={formData.accordCadreFournis} onChange={handleChange} className="mr-2" />
          Accord cadre fourni
        </label>
        <label className="block">
          <input type="checkbox" name="fraisPayes" checked={formData.fraisPayes} onChange={handleChange} className="mr-2" />
          Frais d'adhésion de 50 000 FCFA payés
        </label>
      </div>

      <div className="col-span-2 text-center mt-4">
        <button type="submit" disabled={sending} className="bg-primary text-white px-6 py-3 rounded">
          {sending ? 'Envoi en cours...' : 'Soumettre la demande'}
        </button>
      </div>
    </form>
  );
}
