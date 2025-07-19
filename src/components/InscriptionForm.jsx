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
    telephone: ''
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
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
        fonction: '', email: '', telephone: ''
      });
    }).catch(console.error).finally(() => setSending(false));
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      {success && <p className="text-green-600 col-span-2">Message envoyé avec succès !</p>}
      <input name="nomONG" value={formData.nomONG} onChange={handleChange} placeholder="Nom complet de l'ONG" required className="border p-3 rounded" />
      <input name="acronyme" value={formData.acronyme} onChange={handleChange} placeholder="Acronyme" className="border p-3 rounded" />
      <input name="dateCreation" value={formData.dateCreation} onChange={handleChange} placeholder="Date de création" className="border p-3 rounded" />
      <input name="accordCadre" value={formData.accordCadre} onChange={handleChange} placeholder="Numéro d'accord cadre" className="border p-3 rounded" />
      <input name="adresse" value={formData.adresse} onChange={handleChange} placeholder="Adresse physique" className="border p-3 rounded" />
      <input name="zones" value={formData.zones} onChange={handleChange} placeholder="Zones d'intervention" className="border p-3 rounded" />
      <input name="nomResponsable" value={formData.nomResponsable} onChange={handleChange} placeholder="Nom du responsable" className="border p-3 rounded" />
      <input name="prenomResponsable" value={formData.prenomResponsable} onChange={handleChange} placeholder="Prénom du responsable" className="border p-3 rounded" />
      <input name="fonction" value={formData.fonction} onChange={handleChange} placeholder="Fonction du responsable" className="border p-3 rounded" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email du responsable" required className="border p-3 rounded" />
      <input name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone du responsable" className="border p-3 rounded" />

      <div className="col-span-2 text-center">
        <button type="submit" disabled={sending} className="bg-primary text-white px-6 py-3 rounded">
          {sending ? 'Envoi en cours...' : 'Soumettre la demande'}
        </button>
      </div>
    </form>
  );
}
