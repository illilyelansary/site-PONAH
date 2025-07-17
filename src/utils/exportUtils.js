import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function exportAllMembersToPDF(members) {
  const doc = new jsPDF();
  doc.text('Liste des membres', 10, 10);
  const rows = members.map(member => [
    member.name || member.denomination,
    member.email || '',
    member.zone || '',
    member.domaines || '',
    member.acronyme || ''
  ]);
  doc.autoTable({
    head: [['Nom', 'Email', 'Zone', 'Domaines', 'Acronyme']],
    body: rows,
    startY: 20
  });
  doc.save('Liste_des_membres.pdf');
}