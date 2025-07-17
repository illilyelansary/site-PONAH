import React, { useState } from 'react';

const MemberForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    dateCreation: '',
    accordCadre: '',
    zoneIntervention: '',
    adresse: '',
    responsable: '',
    fonction: '',
    telephone: '',
    email: '',
    recent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 🔽 🔽 🔽 VOICI LA FONCTION QUE TU CHERCHES
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Membre ajouté avec succès');
        setFormData({
          name: '',
          fullName: '',
          dateCreation: '',
          accordCadre: '',
          zoneIntervention: '',
          adresse: '',
          responsable: '',
          fonction: '',
          telephone: '',
          email: '',
          recent: false,
        });
      } else {
        alert("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Ajouter un nouveau membre</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 bg-white p-6 rounded shadow">
        <input type="text" name="name" placeholder="Nom court (ex: AMSS)" value={formData.name} onChange={handleChange} required />
        <input type="text" name="fullName" placeholder="Dénomination complète" value={formData.fullName} onChange={handleChange} required />
        <input type="date" name="dateCreation" value={formData.dateCreation} onChange={handleChange} required />
        <input type="text" name="accordCadre" placeholder="N° Accord Cadre" value={formData.accordCadre} onChange={handleChange} />
        <input type="text" name="zoneIntervention" placeholder="Zone d’intervention" value={formData.zoneIntervention} onChange={handleChange} />
        <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} />
        <input type="text" name="responsable" placeholder="Nom et Prénom du Responsable" value={formData.responsable} onChange={handleChange} />
        <input type="text" name="fonction" placeholder="Fonction" value={formData.fonction} onChange={handleChange} />
        <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="recent" checked={formData.recent} onChange={handleChange} />
          <span>Adhérent récent (2024 ou 2025)</span>
        </label>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80">
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default MemberForm;
