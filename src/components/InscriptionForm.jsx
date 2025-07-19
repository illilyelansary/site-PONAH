// Formulaire d’adhésion mis à jour avec EmailJS, confirmation, et nouveaux champs
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
    domaines: '',
    nomResponsable: '',
    prenomResponsable: '',
    fonction: '',
    email: '',
    telephone: '',
    engageStatuts: false,
    engageCotisation: false,
    engageDemande: false,
    engageAccord: false,
    engageFrais: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_ponah', 'template_adhesion_struct', formData, 'iXZaD4i2v60D279kC')
      .then(() => setSubmitted(true))
      .catch((error) => console.error('Erreur EmailJS:', error));
  };

  return (
    <section id="formulaire-adhesion" className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Formulaire d’adhésion</h2>
        {submitted ? (
          <div className="text-green-700 bg-green-100 p-4 rounded text-center">
            Merci ! Votre demande a été envoyée avec succès. Vous recevrez une confirmation par email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium">Nom complet de l’ONG *</label>
                <input required name="nomONG" value={formData.nomONG} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">Acronyme *</label>
                <input required name="acronyme" value={formData.acronyme} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">Date de création *</label>
                <input required type="date" name="dateCreation" value={formData.dateCreation} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">Numéro d’accord cadre</label>
                <input name="accordCadre" value={formData.accordCadre} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium">Adresse physique *</label>
                <input required name="adresse" value={formData.adresse} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">Zones d’intervention *</label>
                <input required name="zones" value={formData.zones} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">Domaines d’intervention *</label>
                <input required name="domaines" value={formData.domaines} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">Prénom du responsable *</label>
                <input required name="prenomResponsable" value={formData.prenomResponsable} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">Nom du responsable *</label>
                <input required name="nomResponsable" value={formData.nomResponsable} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">Fonction *</label>
                <input required name="fonction" value={formData.fonction} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">Téléphone *</label>
                <input required name="telephone" value={formData.telephone} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
            </div>

            <div className="space-y-3 mt-6">
              <label className="block font-semibold mb-2">Engagements *</label>
              <label className="flex items-center"><input type="checkbox" name="engageStatuts" checked={formData.engageStatuts} onChange={handleChange} required className="mr-2" /> Respecter les statuts de la PONAH</label>
              <label className="flex items-center"><input type="checkbox" name="engageCotisation" checked={formData.engageCotisation} onChange={handleChange} required className="mr-2" /> Payer la cotisation annuelle de 50 000 FCFA</label>
              <label className="flex items-center"><input type="checkbox" name="engageDemande" checked={formData.engageDemande} onChange={handleChange} required className="mr-2" /> Soumettre une demande timbrée</label>
              <label className="flex items-center"><input type="checkbox" name="engageAccord" checked={formData.engageAccord} onChange={handleChange} required className="mr-2" /> Fournir l'accord cadre de l’ONG</label>
              <label className="flex items-center"><input type="checkbox" name="engageFrais" checked={formData.engageFrais} onChange={handleChange} required className="mr-2" /> Payer les frais d’adhésion de 50 000 FCFA</label>
            </div>

            <div className="text-center mt-6">
              <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded">Envoyer la demande</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
