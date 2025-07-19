import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function InscriptionForm() {
  const formRef = useRef();

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const zonesOptions = ['Bamako', 'Gao', 'Kayes', 'Kidal', 'Koulikoro', 'Mopti', 'Ségou', 'Sikasso', 'Tombouctou', 'Taoudéni', 'Ménaka'];
  const domainesOptions = ['Éducation', 'Santé', 'Sécurité alimentaire', 'Eau-Hygiène', 'Genre', 'Environnement', 'Gouvernance', 'Protection', 'Développement économique'];

  const [form, setForm] = useState({
    nomONG: '',
    acronyme: '',
    dateCreation: '',
    numeroAccord: '',
    adresse: '',
    emailONG: '',
    telephone: '',
    siteWeb: '',
    zones: [],
    domaines: [],
    nomResp: '',
    prenomResp: '',
    fonctionResp: '',
    telResp: '',
    emailResp: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleMultiChange = (name, value) => {
    setForm(f => ({
      ...f,
      [name]: f[name].includes(value)
        ? f[name].filter(v => v !== value)
        : [...f[name], value]
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      'smtp_zoho_ponah',           // ← Ton SERVICE ID EmailJS
      'formulaire_adhesion',       // ← Ton TEMPLATE ID EmailJS
      {
        ...form,
        zones: form.zones.join(', '),
        domaines: form.domaines.join(', ')
      },
      'iXZaD4i2v60D279kC'           // ← Ta clé publique EmailJS
    ).then(() => {
      setSending(false);
      setSuccess(true);
      setForm({
        nomONG: '',
        acronyme: '',
        dateCreation: '',
        numeroAccord: '',
        adresse: '',
        emailONG: '',
        telephone: '',
        siteWeb: '',
        zones: [],
        domaines: [],
        nomResp: '',
        prenomResp: '',
        fonctionResp: '',
        telResp: '',
        emailResp: ''
      });
    }).catch(err => {
      setSending(false);
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
      console.error(err);
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Formulaire d’adhésion à la PONAH</h2>

      {success && <div className="text-green-700 font-semibold bg-green-100 p-4 rounded">Demande envoyée avec succès !</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="nomONG" value={form.nomONG} onChange={handleChange} placeholder="Nom complet de l’ONG *" className="border rounded px-3 py-2" required />
        <input name="acronyme" value={form.acronyme} onChange={handleChange} placeholder="Acronyme *" className="border rounded px-3 py-2" required />
        <input type="date" name="dateCreation" value={form.dateCreation} onChange={handleChange} className="border rounded px-3 py-2" required />
        <input name="numeroAccord" value={form.numeroAccord} onChange={handleChange} placeholder="Numéro d’accord cadre *" className="border rounded px-3 py-2" required />
        <input name="adresse" value={form.adresse} onChange={handleChange} placeholder="Adresse physique *" className="border rounded px-3 py-2" required />
        <input type="email" name="emailONG" value={form.emailONG} onChange={handleChange} placeholder="Email de l’ONG *" className="border rounded px-3 py-2" required />
        <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="Téléphone *" className="border rounded px-3 py-2" required />
        <input name="siteWeb" value={form.siteWeb} onChange={handleChange} placeholder="Site web / réseaux sociaux" className="border rounded px-3 py-2" />
      </div>

      <div>
        <label className="font-semibold">Zones d’intervention *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
          {zonesOptions.map(zone => (
            <label key={zone} className="flex items-center gap-2">
              <input type="checkbox" checked={form.zones.includes(zone)} onChange={() => handleMultiChange('zones', zone)} />
              {zone}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="font-semibold">Domaines d’intervention *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
          {domainesOptions.map(d => (
            <label key={d} className="flex items-center gap-2">
              <input type="checkbox" checked={form.domaines.includes(d)} onChange={() => handleMultiChange('domaines', d)} />
              {d}
            </label>
          ))}
        </div>
      </div>

      <hr className="my-4" />

      <h3 className="font-semibold">Informations sur le Responsable</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="nomResp" value={form.nomResp} onChange={handleChange} placeholder="Nom du responsable *" className="border rounded px-3 py-2" required />
        <input name="prenomResp" value={form.prenomResp} onChange={handleChange} placeholder="Prénom du responsable *" className="border rounded px-3 py-2" required />
        <input name="fonctionResp" value={form.fonctionResp} onChange={handleChange} placeholder="Fonction *" className="border rounded px-3 py-2" required />
        <input type="tel" name="telResp" value={form.telResp} onChange={handleChange} placeholder="Téléphone du responsable *" className="border rounded px-3 py-2" required />
        <input type="email" name="emailResp" value={form.emailResp} onChange={handleChange} placeholder="Email du responsable *" className="border rounded px-3 py-2" required />
      </div>

      <button type="submit" disabled={sending} className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 w-full font-semibold">
        {sending ? "Envoi en cours..." : "Soumettre la demande"}
      </button>
    </form>
  );
}
